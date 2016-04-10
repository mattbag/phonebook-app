var React = require('react');
var ContactDisplay = require('./ContactDisplay.jsx');

var contactsDB = require('./ContactsDatabase.jsx');



var ContactList = React.createClass({
    getInitialState: function () {
     return {
       contactToShow: '',
       searchString: '',
     }
  },
    handleClick: function(contact){
        this.setState({contactToShow:contact});
        console.log('clicked')
    },
    handleChange: function(e){
        this.setState({searchString:e.target.value});
    },

    render: function() {

            var contacts = contactsDB,
            searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.

            contacts = contacts.filter(function(c){
                return c.name.toLowerCase().match( searchString );
            });

        }

        return (
            <div className='row'>
                <div className='small-6 columns text-center contact-display'>
                <h3>Details</h3>
                <ContactDisplay contact={this.state.contactToShow}/>
                </div>
                <div className='small-6 columns text-center contact-list'>
                <h3>Contacts</h3>
                <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search" />
                <div className='right-side'>
                {contacts.map(function(i){
                    
                    
                    return (
                            <div className="row list-item" key={i.id}
                                onClick={this.handleClick.bind(this,i)}
                            >
                                
                                <div className='small-8 columns text-left'>
                                    <h3>{i.name}</h3>
                                </div>
                                <div className='small-4 columns'>
                                    
                                    <img src={i.picture}/>
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

