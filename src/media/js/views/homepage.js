define('views/homepage',
    ['apps', 'core/l10n', 'core/models', 'core/z',
     'key_helper', 'image_helper', 'smart_button', 'spatial_navigation',
     'views/app_preview', 'views/app_context_menu', 'mock'],
    function(apps, l10n, models, z,
             keyHelper, imageHelper, smartButton, SpatialNavigation,
             appPreview, appContextMenu, mock) {
    var gettext = l10n.gettext;
    var appsModel = models('apps');

    var $appList;

    function scrollToApp(callback) {
        var appListScrollTop = $appList.scrollTop();
        var appListHeight = $appList.innerHeight();

        var top = this.offsetTop;
        var height = this.offsetHeight;

        var computedStyle = getComputedStyle(this);

        var marginTop = parseInt(computedStyle.marginTop, 10);
        var marginBottom = parseInt(computedStyle.marginBottom, 10);

        var appTop = top - marginTop;
        var appBottom = top + height + marginBottom * 1.5 - appListHeight;
        var appHeight = height + marginTop + marginBottom;

        var newPosition;

        if (appListScrollTop === 0) {
            newPosition = appTop;
        } else if (appListHeight < appHeight) {
            // Current scope height is too narrow.
            // Scroll to the center of the app.
            newPosition = top - (marginTop + marginBottom) / 2 +
                          (appHeight - appListHeight) / 2;
        } else if (appListScrollTop > appTop) {
            // App is above current scope.
            newPosition = appTop;
        } else if (appListScrollTop < appBottom) {
            // App is below current scope.
            newPosition = appBottom;
        }

        if (newPosition) {
            $appList.animate({ scrollTop: newPosition }, {
                duration: 200,
                done: callback.bind(this)
            });
        } else {
            callback.call(this);
        }
    }

    z.page.on('loaded reloaded_chrome', function() {
        if (z.page.find('.app-preview').length) {
            $appList = z.page.find('.app-list');

            SpatialNavigation.add({
                selector: '.footer-link'
            });

            SpatialNavigation.startFocus();
        }
    });

    // Prevent back button so the website will not go back to the tutorial page.
    z.page.on('keydown', function(e) {
        if (!keyHelper.isBackKey(e.keyCode)) {
            return;
        }

        if (z.page.find('.app-preview').length) {
            e.preventDefault();
        }
    });

    z.page.on('mouseover', '.app-button', function() {
        scrollToApp.call(this, this.focus);
    });

    z.page.on('sn:willfocus', '.app-button', function(e) {
        if (e.originalEvent.detail.hasOwnProperty('previousElement')) {
            SpatialNavigation.pause();

            scrollToApp.call(this, function() {
                SpatialNavigation.focus(this);
                SpatialNavigation.resume();
            });

            return false;
        }
    });

    z.page.on('focus', '.app-button', function(e) {
        var focusedApp = appsModel.lookup(this.dataset.id) ||
                         mock.lookup(this.dataset.id);

        // Clear the hash '#preview' when previewing apps.
        location.hash = '';

        // Update app preview area with current focused app.
        appPreview.render(focusedApp);

        // Set context menu.
        appContextMenu.set(focusedApp);
    });

    z.page.on('keyup mouseup touchend', '.app-button', function(e) {
        if (e.type === 'keyup' && !keyHelper.isEnterKey(e.keyCode)) {
            return;
        }

        // Preview current focused app.
        var focusedApp = appsModel.lookup(this.dataset.id) ||
                         mock.lookup(this.dataset.id);

        if (focusedApp.doc_type === 'webapp') {
            var focusedManifestURL = focusedApp.manifest_url;

            apps.checkInstalled(focusedManifestURL).done(function(isInstalled) {
                if (isInstalled) {
                    apps.launch(focusedManifestURL);
                } else {
                    location.hash = 'preview';

                    apps.install(focusedApp);
                }
            });
        } else {
            window.open(focusedApp.url, '_blank',
                'remote=true,preview=true' +
                ',name=' + encodeURIComponent(focusedApp.name) +
                ',iconUrl=' + encodeURIComponent(
                    imageHelper.findLargestIcon(focusedApp.icons)
                )
            );
        }
    });

    return function(builder) {
        if (!localStorage.getItem('marketplace.tutorial.fteskip')) {
             z.page.trigger('navigate', '/tv/tutorial/');

             return;
        }

        builder.start('homepage.html', {
            mock_apps: mock.apps
        });

        builder.z('type', 'root');
        builder.z('title', gettext('Homepage'));

        builder.onload('app-list').fail(function() {
            z.page.trigger('navigate', '/tv/offline/');
        });
    };
});
