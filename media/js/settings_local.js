define('settings_local',
    [],
    function() {
    return {
        // Remove to have data fetched from CDN rather than API.
        api_cdn_whitelist: {},
        api_url: 'https://marketplace.allizom.org',
        media_url: 'https://marketplace-stage.cdn.mozilla.net/media/',
    };
});
