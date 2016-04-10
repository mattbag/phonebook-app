var React = require('react');
var ContactDisplay = require('./ContactDisplay.jsx');

var contactsDB = require('./ContactsDatabase.jsx');



var ContactList = React.createClass({
    getInitialState: function () {
     return {
       contact: contactsDB,
     }
  },
    handleClick: function(contact){
        this.setState({contact:contact});
        console.log('clicked')
    },
    render: function() {
        return (
            <div className='row'>
                <div className='small-6 columns text-center contact-display'>
                <h3>Details</h3>
                <ContactDisplay contact={this.state.contact}/>
                </div>
                <div className='small-6 columns text-center contact-list'>
                <h3>Contacts</h3>
                <div>
                {contactsDB.map(function(i){
                    
                    
                    return (
                            <div className="row list-item" key={i.id}
                                onClick={this.handleClick.bind(this,i)}
                            >
                                <div className='small-4 columns'>
                                    
                                    <img src={i.picture}/>
                                </div>
                                <div className='small-8 columns text-left'>
                                    <h2>{i.name}</h2>
                                </div>
                            </div>    
                        );
                    },this)
                }
            </div>
                </div>
            </div>
        );
    }
});


module.exports = ContactList;

