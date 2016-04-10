var React = require('react');

var ContactDisplay = React.createClass({
    render: function(){
        return(
                <div className='row'>
                    <div className='small-12 columns text-center big-user-pic'>
                     <img width='100%' height='auto' src={this.props.contact.picture}/>
                               
                    </div>
                    <div className='small-12 columns text-center'>
                        <h2>{this.props.contact.name}</h2>
                    </div>
                    <div className='small-12 columns text-center'>
                        <h2>{this.props.contact.mobile}</h2>
                    </div>
                    <div className='small-12 columns text-center'>
                        <h3>{this.props.contact.address}</h3>
                    </div>
                </div>
            );
    }
});
module.exports = ContactDisplay;