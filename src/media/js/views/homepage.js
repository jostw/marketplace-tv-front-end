define('views/homepage',
    ['apps', 'core/capabilities', 'core/l10n', 'core/models', 'core/z',
     'templates', 'spatial-navigation'],
    function(apps, caps, l10n, models, z,
             nunjucks, SpatialNavigation) {
    var gettext = l10n.gettext;
    var appsModel = models('apps');

    var appContextMenu = document.getElementById('contextmenu').children[0];

    var $appPreview;
    var $appList;

    var appListHeight;

    function findLargestIcon(icons) {
        var iconSizes = Object.keys(icons);
        var maxIconSize = iconSizes.reduce(function(prev, current) {
            return parseInt(prev, 10) < parseInt(current, 10) ? current : prev;
        });

        if (location.protocol.match('app')) {
            return location.protocol + '//' + location.hostname + '/' + icons[maxIconSize];
        }

        return icons[maxIconSize];
    }

    // Initialize spatial navigation.
    SpatialNavigation.init();

    // Define the navigable elements.
    SpatialNavigation.add({
        selector: '.focusable'
    });

    z.page.on('loaded', function() {
        $appPreview = z.page.find('.app-preview');
        $appList = z.page.find('.app-list');

        appListHeight = $appList.innerHeight();

        // Add 'tabindex="-1"' to "currently-existing" navigable elements.
        SpatialNavigation.makeFocusable();

        // Focus the first navigable element.
        SpatialNavigation.focus();
    });

    z.page.on('sn:willfocus', '.focusable', function() {
        SpatialNavigation.pause();

        var callback = function() {
            SpatialNavigation.focus(this);
            SpatialNavigation.resume();
        };

        var scrollTop = $appList.scrollTop();
        var top = this.offsetTop;
        var bottom = top + this.offsetHeight;
        var margin = 5.8 * 10;
        var newPosition;

        if (scrollTop > top - margin) {
            newPosition = top - margin;
        } else if (scrollTop < bottom + margin - appListHeight) {
            newPosition = bottom + margin - appListHeight;
        }

        if (newPosition) {
            $appList.animate({ scrollTop: newPosition }, {
                duration: 200,
                done: callback.bind(this)
            });
        } else {
            callback.call(this);
        }

        return false;
    });

    z.page.on('focus', '.focusable', function() {
        var $appPreviewPrice;

        var focusedApp = appsModel.lookup(this.dataset.slug);
        var focusedManifestURL = focusedApp.manifest_url;

        // Update context menu's label
        if (focusedApp.doc_type === 'webapp') {
            appContextMenu.label = '#app:' + focusedManifestURL;
        } else if (focusedApp.doc_type === 'website') {
            appContextMenu.label = '#website:' +
                                    encodeURIComponent(focusedApp.url) + ',' +
                                    encodeURIComponent(focusedApp.name) + ',' +
                                    encodeURIComponent(findLargestIcon(focusedApp.icons));
        } else {
            appContextMenu.label = '';
        }

        this.classList.add('focused');

        // Mocking feature apps for CES demo.
        focusedApp.tv_featured = $(this).index() < 7;

        // Update app preview area with current focused app.
        $appPreview.html(
            nunjucks.env.render('_includes/app_preview.html', {
                app: focusedApp
            })
        );

        $appPreviewPrice = $appPreview.find('.price');

        if (!caps.webApps) {
            $appPreviewPrice.removeClass('hidden');

            return;
        }

        // Update type when app is already installed.
        apps.getInstalled().done(function(installedApps) {
            installedApps.map(function(installedManifestURL) {
                if (installedManifestURL === focusedManifestURL) {
                    $appPreviewPrice.addClass('installed');
                }
            });

            $appPreviewPrice.removeClass('hidden');
        });
    });

    z.page.on('keydown mousedown touchstart', '.focusable', function(e) {
        if (e.type === 'keydown' && e.keyCode !== KeyEvent.DOM_VK_RETURN) {
            return;
        }

        this.classList.add('pressed');
    });

    z.page.on('keyup mouseup touchend', '.focusable', function(e) {
        if (e.type === 'keyup' && e.keyCode !== KeyEvent.DOM_VK_RETURN) {
            return;
        }

        this.classList.remove('pressed');
        this.classList.add('released');

        if (e.type === 'keyup') {
            if (!caps.webApps) {
                return;
            }

            // Preview current focused app.
            var focusedApp = appsModel.lookup(this.dataset.slug);

            if (focusedApp.doc_type === 'webapp') {
                var focusedManifestURL = focusedApp.manifest_url;

                apps.getInstalled().done(function(installedApps) {
                    // Check if app is installed.
                    var isInstalled = installedApps.some(function(installedManifestURL) {
                        return focusedManifestURL === installedManifestURL;
                    });

                    if (isInstalled) {
                        apps.launch(focusedManifestURL);
                    } else {
                        apps.install(focusedApp);
                    }
                });
            } else {
                window.open(focusedApp.url, '_blank',
                    'remote=true,preview=true' +
                    ',name=' + encodeURIComponent(focusedApp.name) +
                    ',iconUrl=' + encodeURIComponent(findLargestIcon(focusedApp.icons)));
            }
        }
    });

    z.page.on('transitionend', '.focusable', function() {
        if (this.classList.contains('released')) {
            this.classList.remove('released');
        }
    });

    z.page.on('blur', '.focusable', function() {
        this.classList.remove('focused');
        this.classList.remove('pressed');
        this.classList.remove('released');
    });

    return function(builder) {
        builder.start('homepage.html');

        builder.z('type', 'root');
        builder.z('title', gettext('Homepage'));
    };
});
