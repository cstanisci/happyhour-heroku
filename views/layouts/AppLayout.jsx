const React = require('react');

class AppLayout extends React.Component{
  render() {
    return (
      <html lang="en" dir="ltr">
        <head>
            <meta charSet="utf-8"/>
            <title>{this.props.title}</title>
            <link rel="stylesheet" type="text/css" href="/css/style.css"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/css/bootstrap.min.css" integrity="sha384-SI27wrMjH3ZZ89r4o+fGIJtnzkAnFs3E4qz9DIYioCQ5l9Rd/7UAa8DHcaL8jkWt" crossorigin="anonymous"></link>
            
        </head>
        <body>
        <h1 class="headings"
>{this.props.title}</h1>
       {/* This is where our other components will be injected */}
          {this.props.children}
          <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAh9s0vi2SVmoC5S9B67Q0d-xoL43p4QRE&callback=initMap">
          </script>
        </body>
    </html>
    )
  }
}
module.exports= AppLayout;


// AIzaSyD-hiHb8PaSDXxZATvzSK4pU0KPlUnbAEY