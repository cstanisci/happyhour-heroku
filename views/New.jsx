const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx');

class New extends React.Component {
    render() {
        return (
            <AppLayout title="New Happy Hour" className="headings">
                
                <form class="show" id="new-hh" action="/happy" method="POST">
                    <div class="form-group">
                        <label>Name</label>
                        <input class="form-control" type="text" name="name"/>
                    </div>
                    <div class="form-group">
                        <label>Days</label>
                        <input type="text" name="days" class="form-control"/><br/>
                    </div>
                    <div class="form-group">
                        <label>Hours</label>
                        <input type="text" name="hours" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Deals</label>
                        <input type="textarea" name="deals" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Website</label> 
                        <input type="text" name="website" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Yelp Link</label>
                        <input type="text" name="yelp" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Image</label>
                        <input type="text" name="img" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Address</label>
                        <input type="text" name="address" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label>Google Map Location</label>
                        <input type="text" name="location.lat" placeholder="latitude" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <input type="text" name="location.lng" placeholder="longitude" class="form-control"/>
                    </div>
            <input class="btn btn-outline-primary form-button" type="submit" value="Add Happy Hour"/>
        </form>
        <nav>
                <a class="float-left show" href="/happy">
                        Back
                    </a>
                </nav>
                </AppLayout>
        )
    }
}

module.exports = New;