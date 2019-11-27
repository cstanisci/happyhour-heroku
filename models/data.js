const mongoose = require('mongoose');

const seedHappyHour =
    [
      {
        name: 'Ste. Ellie',
        days: 'Mon Tues Weds Thurs Fri',
        hours: '6:00pm to 8:00pm',
        deals: '$5 Old Fashioned',
        website: 'https://www.saintellie.com',
        yelp: 'https://www.yelp.com/biz/ste-ellie-denver',
        img: 'https://cdn.vox-cdn.com/thumbor/knSpn4dw0Qh2XImQKFhRmp5JfTg=/36x0:462x320/920x613/filters:focal(36x0:462x320):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/44342306/ste._ellie.0.0.jpg',
        location:{
            lat:39.7573238,
            lng:-105.0084705
        },
        address:'1553 Platte Street, Denver, CO 80202'
      }, {
        name: 'Cart Driver',
        days: 'Mon Tues Weds Thurs Sat Sun',
        hours: '10:00pm to Midnight',
        deals: '$5 Margerita Pizza and $5 glasses of wine',
        website: 'https://cart-driver.com',
        yelp: 'https://www.yelp.com/biz/cart-driver-denver?start=40',
        img: 'http://diningout.com/denverboulder/wp-content/uploads/sites/13/2016/10/10523754_947509788609148_431989533936032839_o.jpg',
        location:{
            lat:39.7575582,
            lng:-104.9861768
        },
        address:'2500 Larimer Street, Denver, CO 80205'
      },
      {
        name: `Brother's Bar`,
        days: 'Thurs',
        hours: '4:00pm to 10:00pm',
        deals: '$2 Burgers',
        website: 'https://www.brothersbar.com/denver',
        yelp: 'https://www.yelp.com/biz/brothers-bar-and-grill-denver-4',
        img: 'https://static.wixstatic.com/media/841d05_0c387a5562b24ab7941b47174c69d120~mv2.png/v1/fill/w_165,h_48,al_c,q_80,usm_0.66_1.00_0.01/BrothersLogo.webp',
        location:{
            lat:39.7512209,
            lng:-105.01631739999999
        },
        address:'1920 Market Street, Denver, CO 80202'
      },
      {
        name: `Marco's`,
        days: 'Sat Sun',
        hours: '10:00am to 2:00pm',
        deals: '$2 Bloody Marys',
        website: 'https://www.marcoscfp.com/',
        yelp: 'https://www.yelp.com/biz/marcos-coal-fired-ballpark-denver',
        img: 'https://images.squarespace-cdn.com/content/v1/5633d111e4b0fa2506ec5c68/1558570844131-4RRWEE7TUED7GVAXZM02/ke17ZwdGBToddI8pDm48kI94E3tjMI6b1Bfa4n-BZ2FZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7dBUeh7tVDxQci3gUes7eqDA6uwJeIMKL8cnMvqlPIUvpGgJnr9EporDzjzRsKGF0Q/logo+200x.png?format=300w',
        location:{
            lat:39.7545059,
            lng:-104.9909703
        },
        address:'2129 Larimer Street, Denver, CO 80205'
      },
      {
        name: `Tupelo Honey`,
        days: 'Tues Wed',
        hours: 'All day',
        deals: `Tues - Half off salads
                Wed - Half off shrimp and grits`,
        website: 'https://tupelohoneycafe.com',
        yelp: 'https://www.yelp.com/biz/tupelo-honey-denver-2?start=20',
        img: 'https://tupelohoneycafe.com/wp-content/themes/tupelohoney/assets/images/tupelo-honey-restaurant-logo.png',
        location:{
            lat:39.7538861,
            lng:-105.0015675
        },
        address:'1650 Wewatta Street, Denver, CO 80202'
      },
      {
        name: `Postino`,
        days: 'Mon Tues Weds Thurs Fri',
        hours: '12:00pm to 5:00pm',
        deals: `$5 glasses of wine`,
        website: 'https://www.postinowinecafe.com/',
        yelp: 'https://www.yelp.com/biz/postino-lohi-denver-7',
        img: 'https://images1.westword.com/imager/u/745xauto/10995034/postinooutside.jpg',
        location:{
            lat:39.7614559,
            lng:-105.0106897
        },
        address:'2715 17th Street, Denver, CO 80202'
      },
      {
        name: `Blackbird Public House`,
        days: 'Tues Sun',
        hours: '12:00pm to Close',
        deals: `$1 oysters`,
        website: 'https://www.blackbirdpublichouse.com',
        yelp: 'https://www.yelp.com/biz/blackbird-public-house-denver-2',
        img: 'https://www.blackbirdpublichouse.com/wp-content/uploads/Blackbird-logo-web-header.png',
        location:{
            lat:39.7107988,
            lng:-104.9737295
        },
        address:'305 S Downing Street, Denver, CO 80209'
      },
      {
        name: `The Hornet`,
        days: 'Sat Sun',
        hours: '10:00am to 3:00pm',
        deals: `$2 Bloody Marys and $3 Mimosas`,
        website: 'https://hornetrestaurant.com/',
        yelp: 'https://www.yelp.com/biz/the-hornet-denver-2',
        img: 'https://hornetrestaurant.com/wp-content/uploads/logo-hornet-text-black_small.png',
        location:{
            lat:39.7181014,
            lng:-104.987201
        },
        address:'76 Broadway, Denver, CO 80203'
      },
      {
        name: `Tacos Tequila Whiskey`,
        days: 'Mon Tues Wed Thurs Fri',
        hours: '3:00pm to 6:00pm',
        deals: `$1 Tacos and $5 Margaritas`,
        website: 'https://www.tacostequilawhiskey.com/',
        yelp: 'https://www.yelp.com/biz/tacos-tequila-whiskey-denver-3',
        img: 'https://tacostequilawhiskey.com/wp-content/uploads/2015/06/logo24.png',
        location:{
            lat:39.7619687,
            lng:-105.0300841
        },
        address:'3300 W 32nd Ave, Denver, CO 80211'
      }
    ]

      module.exports = seedHappyHour;