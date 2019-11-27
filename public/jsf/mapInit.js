function initMap (lats=39.7545059,long=-104.9909703) {
    let denver = {lat:lats, lng:long};
    let stEllie = {
        lat:39.7573238,
        lng:-105.0084705
    };
    let cartDriver = {
        lat:39.7575582,
        lng:-104.9861768
    };
    let brothersBar = {
        lat:39.7512209,
        lng:-105.01631739999999
    };
    let marcos = {
        lat:39.7545059,
        lng:-104.9909703
    };
    let tupelo = {
        lat:39.7538861,
        lng:-105.0015675
    };
    let postino = {
        lat:39.7614559,
        lng:-105.0106897
    };
    let blackBird = {
        lat:39.7107988,
        lng:-104.9737295
    }
    let theHornet = {
        lat:39.7181014,
        lng:-104.987201
    };
    let tacosTequila = {
        lat:39.7619687,
        lng:-105.0300841
    };




    const map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: denver});
    let marker = new google.maps.Marker({position: stEllie, map: map, title:'Ste. Ellie'});
    let marker2 = new google.maps.Marker({position: cartDriver, map: map, title:'Cart Driver'});
    let marker3 = new google.maps.Marker({position: brothersBar, map: map, title:`Brother's Bar`});
    let marker4 = new google.maps.Marker({position: marcos, map: map, title:`Marco's`});
    let marker5 = new google.maps.Marker({position: tupelo, map: map, title:'Tupelo Honey'});
    let marker6 = new google.maps.Marker({position: postino, map: map, title:'Il Postino'});
    let marker7 = new google.maps.Marker({position: blackBird, map: map, title:'Blackbird Public House'});
    let marker8 = new google.maps.Marker({position: theHornet, map: map, title:'The Hornet'});
    let marker9 = new google.maps.Marker({position: tacosTequila, map: map, title:'Tacos Tequila Whiskey'});

};

// function initMap (arr) {
//     const markers = {};
//      let uluru = {lat:lats, lng:long};
//     const map = new google.maps.Map(
//          document.getElementById('map'), {zoom: 4, center: uluru});
//      let marker = new google.maps.Marker({position: uluru, map: map});
//      arr.forEach((xy, index)=>{
//        markers[index] = google.maps.Marker({position: {lat:xy.lat, long:xy.long}, map: map});
//    }
//   };