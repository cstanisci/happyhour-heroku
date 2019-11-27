const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx');
// const {withScriptjs,withGoogleMap,GoogleMap,Marker} = require('react-google-maps');

// const CustomSkinMap = withScriptjs(
//     withGoogleMap(props => (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 26.64, lng: -81.87 }}
//       defaultOptions={{
//         scrollwheel: false,
//         zoomControl: true,
//         styles: [
//           {
//             featureType: "water",
//             stylers: [
//               { saturation: 43 },
//               { lightness: -11 },
//               { hue: "#0088ff" }
//             ]
//           },
//           {
//             featureType: "road",
//             elementType: "geometry.fill",
//             stylers: [
//               { hue: "#ff0000" },
//               { saturation: -100 },
//               { lightness: 99 }
//             ]
//           },
//           {
//             featureType: "road",
//             elementType: "geometry.stroke",
//             stylers: [{ color: "#808080" }, { lightness: 54 }]
//           },
//           {
//             featureType: "landscape.man_made",
//             elementType: "geometry.fill",
//             stylers: [{ color: "#ece2d9" }]
//           },
//           {
//             featureType: "poi.park",
//             elementType: "geometry.fill",
//             stylers: [{ color: "#ccdca1" }]
//           },
//           {
//             featureType: "road",
//             elementType: "labels.text.fill",
//             stylers: [{ color: "#767676" }]
//           },
//           {
//             featureType: "road",
//             elementType: "labels.text.stroke",
//             stylers: [{ color: "#ffffff" }]
//           },
//           { featureType: "poi", stylers: [{ visibility: "off" }] },
//           {
//             featureType: "landscape.natural",
//             elementType: "geometry.fill",
//             stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
//           },
//           { featureType: "poi.park", stylers: [{ visibility: "on" }] },
//           {
//             featureType: "poi.sports_complex",
//             stylers: [{ visibility: "on" }]
//           },
//           { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
//           {
//             featureType: "poi.business",
//             stylers: [{ visibility: "simplified" }]
//           }
//         ]
//       }}
//     >
//       <Marker position={{ lat: 26.64353, lng: -81.873928 }} />
//     </GoogleMap>))
//     );

class Index extends React.Component {
    render() {
        let elementText = `\'map\'`
        return (
            <AppLayout id="index-title" className="headings" title="Happy Hour Haven">
                <h2 class="headings">Denver</h2>
                    <div class="row">
                    <div class="col-md-7">
                        <div id="map"></div>
                    </div>
                    <div class="col-md-5 panel panel-primary">
                        <h2 class="panel-heading headings">Your Nearby Happy Hours</h2>
                        <nav>
                    <a href="/happy/new">Add Happy Hour</a>
                </nav>
                        <div class="card" >
                            <div class="overflow-auto card-body scrollbar-primary any">
                {this.props.happy.map((data,i) => {
                    return (<div>
                                <a id="index-a" href={`/happy/${data.id}`}>
                                    <div class="idx-happy rounded btn btn-outline-primary btn-block">
                                        <h2 class="index-name">{data.name}</h2>
                                        <h4 class="index-add">{data.address}</h4>
                                        <h5 class="index-hours">{data.days}</h5>
                                        <h5 class="index-hours">{data.hours}</h5>
                        {/* <a href={`/happy/${data._id}/edit`}><button>EDIT</button></a>
                        <form action={`/happy/${data._id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/>
                      </form> */}
                                    </div>
                                </a>
                            </div>
                      )
                })}
                </div>
                </div>
                </div>
                </div>
                 <script src="/jsf/mapInit.js">
                 </script>
                 <script>
                    initMap()
                 </script>
            </AppLayout>
        )
    }
};

module.exports = Index;