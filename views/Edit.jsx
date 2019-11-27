const React = require('react');
// As you can see we are using the app layout
const AppLayout = require('./layouts/AppLayout.jsx');

class Edit extends React.Component{
    render() {
      return (
        <AppLayout title="Edit Happy Hour" class="headings">      
       {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
            {/* form is not complet we will do that below*/}
        <form class="show" action={`/happy/${this.props.happy._id}?_method=PUT`} method="POST">
        <div class="form-group">
                        <label>Name</label>
                        <input class="form-control" type="text" name="name" defaultValue={this.props.happy.name}/>
                    </div>
                    <div class="form-group">
                        <label>Days</label>
                        <input type="text" name="days" class="form-control" defaultValue={this.props.happy.days}/><br/>
                    </div>
                    <div class="form-group">
                        <label>Hours</label>
                        <input type="text" name="hours" class="form-control" defaultValue={this.props.happy.hours}/>
                    </div>
                    <div class="form-group">
                        <label>Deals</label>
                        <input type="textarea" name="deals" class="form-control" defaultValue={this.props.happy.deals}/>
                    </div>
                    <div class="form-group">
                        <label>Website</label> 
                        <input type="text" name="website" class="form-control" defaultValue={this.props.happy.website}/>
                    </div>
                    <div class="form-group">
                        <label>Yelp Link</label>
                        <input type="text" name="yelp" class="form-control" defaultValue={this.props.happy.yelp}/>
                    </div>
                    <div class="form-group">
                        <label>Image</label>
                        <input type="text" name="img" class="form-control" defaultValue={this.props.happy.img}/>
                    </div>
                    <div class="form-group">
                        <label>Address</label>
                        <input type="text" name="address" class="form-control" defaultValue={this.props.happy.address}/>
                    </div>
                    <div class="form-group">
                        <label>Google Map Location</label>
                        <input type="text" name="location.lat" placeholder="latitude" class="form-control" defaultValue={this.props.happy.location.lat}/>
                    </div>
                    <div class="form-group">
                        <input type="text" name="location.lng" placeholder="longitude" class="form-control" defaultValue={this.props.happy.location.lng}/>
                    </div>
            <input class="form-button btn btn-outline-primary" type="submit" value="Submit Changes"/>
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
  module.exports= Edit;