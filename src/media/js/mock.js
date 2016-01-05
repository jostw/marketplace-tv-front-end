define('mock', function() {
    var apps = {
        'Facebook': {
            doc_type: 'webapp',
            name: 'Facebook',
            author: 'Facebook',
            manifest_url: 'https://m.facebook.com/openwebapp/manifest.webapp',
            description: 'Keeping up with friends is faster than ever.\n• See what friends are up to\n• Share updates, photos and videos\n• Get notified when friends like and comment on your posts\n• Text, chat and have group conversations\n\nFacebook is only available for users age 13 and over.\nOur Data Use Policy and EULA are available in the Privacy Policy section of our Marketplace description.',
            icons: {
                '128': 'https://marketplace.cdn.mozilla.net/img/uploads/addon_icons/421/421872-128.png?modified=cfc6a95f'
            },
            promo_imgs: {
                '640': 'https://marketplace.cdn.mozilla.net/img/uploads/previews/full/90/90836.png?modified=1420670724'
            }
        },

        'Drag Race 3D': {
            doc_type: 'webapp',
            name: 'Drag Race 3D',
            author: 'Softgames GmBH',
            manifest_url: 'http://drag-race.softgames.de/drag-race-3D/mozilla/manifest.webapp',
            description: 'For many years drag races have been the easiest  way to participate in an motor sport event. Two cars, two drivers and a bit of straight road is all it takes to experience this raw and simplistic competition. But of course street racing is not only a dangerous thing to do, it also isn\'t legal nearly everywhere in the world and setting up a car is everything but cheap.\nNow Drag Race brings you the thrill of realistic races right to your phone, tablet or desktop pc without having to think about money or the law. Buy a car, tune it, beat other drivers and work your way through different competitions to finally earn the privilege to race one of the bosses in this free online game!',
            icons: {
                '128': 'https://marketplace.cdn.mozilla.net/img/uploads/addon_icons/512/512680-128.png?modified=b11f027d'
            },
            promo_imgs: {
                '640': 'https://marketplace.cdn.mozilla.net/img/uploads/previews/full/174/174692.png?modified=1434371472'
            }
        },

        'Bubble Shoot': {
            doc_type: 'webapp',
            name: 'Bubble Shoot',
            author: 'Qliavi Team',
            manifest_url: 'http://bubble-shoot.qliavi.com/webapp-manifest/',
            description: 'Shoot bubbles. Break three or more of the same color.',
            icons: {
                '128': 'https://marketplace-stage.cdn.mozilla.net/img/uploads/addon_icons/503/503921-128.png?modified=a4e719ca'
            },
            promo_imgs: {
                '640': 'https://marketplace-stage.cdn.mozilla.net/img/uploads/previews/full/146/146089.png?modified=1447747393'
            }
        },

        'GeoWebapp': {
            doc_type: 'webapp',
            name: 'GeoWebapp',
            author: 'Tokyo President Lu',
            manifest_url: 'http://begeeben.github.io/hosted-app-test/manifest.webapp',
            description: 'This is a webapp.',
            icons: {
                '128': 'http://jostw.github.io/marketplace-tv-front-end/media/img/app-icons/appic_web_apps.png'
            },
            promo_imgs: {
                '640': ''
            }
        },

        'GeoWebsite': {
            doc_type: 'website',
            name: 'GeoWebsite',
            author: 'Tokyo President Lu',
            url: 'http://begeeben.github.io/hosted-app-test/',
            description: 'This is a website.',
            icons: {
                '128': 'http://jostw.github.io/marketplace-tv-front-end/media/img/app-icons/appic_web_apps.png'
            },
            promo_imgs: {
                '640': ''
            }
        }
    };

    function lookup(key) {
        return apps[key];
    }

    return {
        apps: apps,
        lookup: lookup
    };
});
