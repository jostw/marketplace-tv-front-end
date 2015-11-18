define('views/homepage',
    ['core/l10n', 'core/models', 'core/z', 'templates', 'spatial-navigation'],
    function(l10n, models, z, nunjucks, SpatialNavigation) {
    var gettext = l10n.gettext;

    var appsModel = models('apps');
    var appsLength = 0;

    // Number of apps in a row.
    var COUNT = 7;

    // Initialize spatial navigation.
    SpatialNavigation.init();

    // Define the navigable elements.
    SpatialNavigation.add({
        selector: '.focusable'
    });

    z.page.on('loaded', function() {
        appsLength = document.getElementsByClassName('focusable').length;

        // Add 'tabindex="-1"' to "currently-existing" navigable elements.
        SpatialNavigation.makeFocusable();

        // Focus the first navigable element.
        SpatialNavigation.focus();
    });

    z.page.on('focus', '.focusable', function() {
        // Update app preview area with current focused app.
        z.page.find('.app-preview').html(
            nunjucks.env.render('_includes/app_preview.html', {
                app: appsModel.lookup($(this).data('slug'))
            })
        );
    });

    z.page.on('sn:navigatefailed', '.focusable', function(e) {
        var dir = e.originalEvent.detail.direction;

        var appIndex = parseInt(this.id.match(/focusable-(.+)/)[1]);
        var focusIndex;

        if (dir === 'up') {
            // Last row is not full.
            if (appIndex + Math.floor(appsLength / COUNT) * COUNT < appsLength) {
                focusIndex = appIndex + Math.floor(appsLength / COUNT) * COUNT;
            } else {
                focusIndex = appIndex + (Math.floor(appsLength / COUNT) - 1) * COUNT;
            }
        } else if (dir === 'right') {
            focusIndex = appIndex - COUNT + 1;
        } else if (dir === 'down') {
            focusIndex = appIndex % COUNT;
        } else if (dir === 'left') {
            // Last row is not full.
            if (appIndex + COUNT > appsLength - 1) {
                focusIndex = appsLength - 1;
            } else {
                focusIndex = appIndex + COUNT - 1;
            }
        }

        SpatialNavigation.focus(document.getElementById('focusable-' + focusIndex));
    });

    return function(builder) {
        builder.start('homepage.html');

        builder.z('type', 'root');
        builder.z('title', gettext('Hello World!'));
    };
});
