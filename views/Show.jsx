const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx');

class Show extends React.Component {
    render(){
        return (
            <AppLayout title={this.props.happy.name} className="headings">
                <nav>
                <a class="float-left show" href="/happy">
                        Back
                    </a>
                </nav>
                <div class="img-container show">
                    <img id="show-img show" src={this.props.happy.img}/>
                </div>
                <div class="content-container show">
                    <div class="show">
                        Days: {this.props.happy.days} <br/>
                        Hours: {this.props.happy.hours}
                    </div>
                    <div class="show">Specifics: <br/>
                        {this.props.happy.deals}
                        </div>
                        <a class="show" href={this.props.happy.website}>Website</a>|<a href={this.props.happy.yelp}><img src="/css/yelp.png"></img>Yelp</a><br/>
                    <a href={`/happy/${this.props.happy._id}/edit`}>
                        <button class="btn btn-primary">Edit {this.props.happy.name} Happy Hour</button>
                    </a>
                    <form action={`/happy/${this.props.happy._id}?_method=DELETE`} method="POST">
                        <input class="btn btn-danger" type="submit" value="Remove Happy Hour"/>
                    </form> 
                </div>
                
        </AppLayout>
        )
    }
}
module.exports = Show;