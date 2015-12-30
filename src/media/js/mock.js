define('mock', function() {
    var apps = {
        'iHeartRadio': {
            doc_type: 'website',
            name: 'iHeartRadio',
            author: 'iHeartRadio',
            url: '',
            description: 'iHeartRadio lets you access the world of music and radio in one simple app. Download today to listen to top radio stations, music, news, podcasts, sports, talk, and comedy shows.',
            icons: {
                '128': 'media/img/ces-demo/iHeart Radio Icons & Screenshots/iHR_BOXART_336.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/iHeart Radio Icons & Screenshots/01_10ft_ProgramPivot_v6.jpg'
                }, {
                    image_url: 'media/img/ces-demo/iHeart Radio Icons & Screenshots/03_10ft_Screensaver_v6.jpg'
                }
            ]
        },

        'Vimeo': {
            doc_type: 'website',
            name: 'Vimeo',
            author: 'Vimeo',
            url: '',
            description: 'Watch, upload and share HD videos with no ads.',
            icons: {
                '128': 'media/img/ces-demo/Vimeo Assets/vimeo_icon_white_on_blue_rounded.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/Vimeo Assets/Vimeo Screenshot 1.png'
                }, {
                    image_url: 'media/img/ces-demo/Vimeo Assets/Vimeo Screenshot 2.png'
                }, {
                    image_url: 'media/img/ces-demo/Vimeo Assets/Vimeo Screenshot 3.png'
                }, {
                    image_url: 'media/img/ces-demo/Vimeo Assets/Vimeo Screenshot 4.png'
                }
            ]
        },

        'Atari': {
            doc_type: 'website',
            name: 'Atari',
            author: '',
            url: '',
            description: '',
            icons: {
                '128': 'media/img/ces-demo/Atari Icons/atari-icon.png'
            },
            previews:[
                {
                    image_url: ''
                }
            ]
        },

        'AOL On': {
            doc_type: 'website',
            name: 'AOL On',
            author: '',
            url: '',
            description: '',
            icons: {
                '128': 'media/img/ces-demo/AOL On/AOL_On_Official_336x336.png'
            },
            previews:[
                {
                    image_url: ''
                }
            ]
        },

        'Peliculasmaniac App': {
            doc_type: 'website',
            name: 'Peliculasmaniac App',
            author: '',
            url: '',
            description: '',
            icons: {
                '128': 'media/img/ces-demo/PelicualasManiac/PelicualasManiac.png'
            },
            previews:[
                {
                    image_url: ''
                }
            ]
        },

        'Giphy': {
            doc_type: 'website',
            name: 'Giphy',
            author: '',
            url: '',
            description: '',
            icons: {
                '128': 'media/img/ces-demo/Giphy/giphy_logo.png'
            },
            previews:[
                {
                    image_url: ''
                }
            ]
        },

        'Digital Trends': {
            doc_type: 'website',
            name: 'Digital Trends',
            author: '',
            url: '',
            description: '',
            icons: {
                '128': 'media/img/ces-demo/Digital Trends/Digital Trends firefoxoslogo.png'
            },
            previews:[
                {
                    image_url: ''
                }
            ]
        },

        'CraftSmart.tv': {
            doc_type: 'website',
            name: 'CraftSmart.tv',
            author: 'Future Today Inc.',
            url: 'http://craftsmart.fawesome.tv/?iptv=true',
            description: '1000s of new, interesting and easy to follow craft ideas for all ages, Holiday craft, Educational Craft, Seasonal craft, Decoration, Jewelry, Arts, Drawing, and more.',
            icons: {
                '128': 'media/img/ces-demo/CraftSmart.tv/icon-craftsmart.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/CraftSmart.tv/Screenshot-craftsmart.jpg'
                }
            ]
        },

        'FitYou.tv': {
            doc_type: 'website',
            name: 'FitYou.tv',
            author: 'Future Today Inc.',
            url: 'http://fityou.fawesome.tv/?iptv=true',
            description: 'Free Fitness Channel with Large collection of Expert Video Lessons on Yoga, Aerobics, Kickboxing and others. Improve your health and fitness, burn fat and build stamina.',
            icons: {
                '128': 'media/img/ces-demo/FitYou.tv/icon-fityou.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/FitYou.tv/Screenshot-fityou.jpg'
                }
            ]
        },

        'HappyKids.tv': {
            doc_type: 'website',
            name: 'HappyKids.tv',
            author: 'Future Today Inc.',
            url: 'http://www.happykids.tv/?iptv=true',
            description: 'Happykids entertains and educates kids of all ages with music, stories and activity guides. Download this free channel and make your kids happy.',
            icons: {
                '128': 'media/img/ces-demo/Happykids.tv/icon-happykids.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/Happykids.tv/Screenshot-happykids.jpg'
                }
            ]
        },

        'HealthSmart.tv': {
            doc_type: 'website',
            name: 'HealthSmart.tv',
            author: 'Future Today Inc.',
            url: 'http://healthsmart.fawesome.tv/?iptv=true',
            description: 'Healthsmart.tv provides detailed information on health conditions, human anatomy, medical news and alternative medicine. Stay healthy and live better with HealthSmart.tv.',
            icons: {
                '128': 'media/img/ces-demo/HealthSmart/icon-healthsmart.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/HealthSmart/Screenshot-healthsmart.jpg'
                }
            ]
        },

        'Healthy Recipes': {
            doc_type: 'website',
            name: 'Healthy Recipes',
            author: 'Future Today Inc.',
            url: 'http://healthy.ifood.tv/?iptv=true',
            description: 'Healthy Food by ifood.tv brings over 6,000 trustworthy food videos to help you in living healthy. We have recipes for all diets, tastes and needs including Low Calorie, Low Carb, Low Fat, Diabetic, Healthy Holiday Food, Healthy Cooking shows and more. Eat Healthy Be Happy.',
            icons: {
                '128': 'media/img/ces-demo/HealthyRecipes/icon-healthyrecipes.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/HealthyRecipes/Screenshot-healthyrecipes.jpg'
                }
            ]
        },

        'Home Channel by Fawesome.tv': {
            doc_type: 'website',
            name: 'Home Channel by Fawesome.tv',
            author: 'Future Today Inc.',
            url: 'http://home.fawesome.tv/?iptv=true',
            description: 'Enjoy the basics of home organization, design and decoration for all of your great ideas.',
            icons: {
                '128': 'media/img/ces-demo/HomeChannel/icon-homechannel.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/HomeChannel/Screenshot-homechannel.jpg'
                }
            ]
        },

        'iComedy.tv': {
            doc_type: 'website',
            name: 'iComedy.tv',
            author: 'Future Today Inc.',
            url: 'http://icomedy.fawesome.tv/?iptv=true',
            description: 'iComedy.tv is going to make you laugh. Best collection of satire, spoofs, funny home videos, stunts, pranks and jokes.',
            icons: {
                '128': 'media/img/ces-demo/iComedy/icon-icomedy.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/iComedy/Screenshot-icomedy.jpg'
                }
            ]
        },

        'iEducation.tv': {
            doc_type: 'website',
            name: 'iEducation.tv',
            author: 'Future Today Inc.',
            url: 'http://ieducation.fawesome.tv/?iptv=true',
            description: 'Easy to follow video lessons covering Mathematics, Physics, Chemistry, Biology, History, Geography, Civics, Economics and other subjects. Learn and have fun at your own time and place with iEducation.tv.',
            icons: {
                '128': 'media/img/ces-demo/iEducation/icon-ieducation.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/iEducation/Screenshot-ieducation.jpg'
                }
            ]
        },

        'iFood.tv': {
            doc_type: 'website',
            name: 'iFood.tv',
            author: 'Future Today Inc.',
            url: 'http://iptv.ifood.tv/?iptv=true',
            description: 'iFood.tv has over 40,000 trustworthy and practical food videos for all tastes. Enjoy recipes for Holidays,  Desserts, Drinks, Appetizers, Entrees, Kids, Healthy, Easy, Vegetarian, Cake, Salad, Pizza, Pasta, Indian, Chinese, Mexican, Italian, Thai, Gourmet and many other foods you will love.',
            icons: {
                '128': 'media/img/ces-demo/iFood.tv/icon-ifood.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/iFood.tv/Screenshot-ifood.jpg'
                }
            ]
        },

        'Indian Recipes': {
            doc_type: 'website',
            name: 'Indian Recipes',
            author: 'Future Today Inc.',
            url: 'http://indian.ifood.tv/?iptv=true',
            description: 'Indian Food has over 5000 trustworthy and practical food videos from top chefs like Vikas Khanna, Hari Nayak, Vibs, Sanjay Thumma. Enjoy recipes for Indian Desserts, Drinks, Holi, Diwali, Pongal, Eid, Kids, Healthy, Easy, Vegetarian, Punjabi, Gujarati and other foods you will love.',
            icons: {
                '128': 'media/img/ces-demo/IndianRecipes/icon-indian.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/IndianRecipes/Screenshot-indian.jpg'
                }
            ]
        },

        'iStyle.tv': {
            doc_type: 'website',
            name: 'iStyle.tv',
            author: 'Future Today Inc.',
            url: 'http://istyle.fawesome.tv/?iptv=true',
            description: 'Free Beauty and Style Channel with large collection of trustworthy videos. Watch Beauty guide, Style tips, Fashion news and shows.',
            icons: {
                '128': 'media/img/ces-demo/iStyle/icon-istyle.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/iStyle/Screenshot-istyle.jpg'
                }
            ]
        },

        'Pranks': {
            doc_type: 'website',
            name: 'Pranks',
            author: 'Future Today Inc.',
            url: 'http://pranks.fawesome.tv/?iptv=true',
            description: 'Hilarious and Unbelievable pranks to lighten your day anytime. You will have to see it to believe what these daring pranksters are up to.',
            icons: {
                '128': 'media/img/ces-demo/Pranks/icon-pranks.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/Pranks/Screenshot-pranks.jpg'
                }
            ]
        },

        'SmartMan': {
            doc_type: 'website',
            name: 'SmartMan',
            author: 'Future Today Inc.',
            url: 'http://smartman.fawesome.tv/?iptv=true',
            description: 'SmartMan is a channel made for smart men to entertain, inform and educate them on topics of their interest such as comedy, hot girls, workouts, health, home improvement, love, career, travel and more.',
            icons: {
                '128': 'media/img/ces-demo/Smartman/icon-smartman.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/Smartman/Screenshot-smartman.jpg'
                }
            ]
        },

        'TechSmart.tv': {
            doc_type: 'website',
            name: 'TechSmart.tv',
            author: 'Future Today Inc.',
            url: 'http://techsmart.fawesome.tv/?iptv=true',
            description: 'TechSmart helps you get smarter with technology. Product Usage Tips, Technology News, Gadget Reviews and more, all personalised to your taste. Covering Mobile, Smart TV, Start-ups, Conferences, Home Entertainment, Internet etc.',
            icons: {
                '128': 'media/img/ces-demo/TechSmart/icon-techsmart.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/TechSmart/Screenshot-techsmart.jpg'
                }
            ]
        },

        'TripSmart.tv': {
            doc_type: 'website',
            name: 'TripSmart.tv',
            author: 'Future Today Inc.',
            url: 'http://tripsmart.fawesome.tv/?iptv=true',
            description: 'Travel channel to match your taste. Free Travel shows, Virtual tours, Guides, Tips and more on All key destinations in US, Europe, Asia, Africa and the world.',
            icons: {
                '128': 'media/img/ces-demo/TripSmart/icon-tripsmart.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/TripSmart/Screenshot-tripsmart.jpg'
                }
            ]
        },

        'YOUZEEK Free Music': {
            doc_type: 'website',
            name: 'YOUZEEK Free Music',
            author: 'YOUZEEK LLC',
            url: 'http://youzeek.com/helixDesktop.v4.aspx?device=FFTV',
            description: 'YOUZEEK is a FREE Music video player with a VERY wide selection of songs<br>\
                          > 1 million Artists (Top songs, Albums, similar artists, ...)<br>\
                          > More than 1500 genres like pop, rock, techno, classic, electronic, indie, jazz, ...<br>\
                          > More than 200 countries like US, UK, French, Spain, Brazil, India, Japan, Italy, Russia,...<br>\
                          Do you need some help ? Please write us at help@youzeek.com and we will reply the same day!',
            icons: {
                '128': 'media/img/ces-demo/YouZeek/YouZeekIcon.png'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/YouZeek/YOUZEEK1.jpg'
                }, {
                    image_url: 'media/img/ces-demo/YouZeek/YOUZEEK2.jpg'
                }, {
                    image_url: 'media/img/ces-demo/YouZeek/YOUZEEK3.jpg'
                }
            ]
        },

        'Bust-A-Move': {
            doc_type: 'website',
            name: 'Bust-A-Move',
            author: 'TAITO Corporation',
            url: 'http://d3divlwnjap65x.cloudfront.net/',
            description: 'Bust-A-Move (also known as Puzzle Bobble) is the popular bubble-popping puzzle game, first released as an arcade game in 1994 and later optimized for multiple platforms in series.',
            icons: {
                '128': 'media/img/ces-demo/Bust-A-Move/Bust-A-Move 336_336 icon.jpg'
            },
            previews:[
                {
                    image_url: 'media/img/ces-demo/Bust-A-Move/Bust-a-Move Screenshot.png'
                }
            ]
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
