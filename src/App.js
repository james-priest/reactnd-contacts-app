import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    contacts: []
  };
  componentDidMount() {
    ContactsAPI.getAll().then(contacts => {
      this.setState(() => ({
        contacts
      }));
    });
  }
  removeContact = contact => {
    this.setState(currentState => ({
      contacts: currentState.contacts.filter(c => {
        return c.id !== contact.id;
      })
    }));

    ContactsAPI.remove(contact).then(contact => {
      console.log(contact); // <- removed contact
    });
  };
  createContact = contact => {
    // console.log('serlialized', contact);
    ContactsAPI.create(contact).then(contact => {
      // console.log('returned', contact);
      this.setState(prevContacts => ({
        // contacts: [...prevContacts.contacts, contact]
        contacts: prevContacts.contacts.concat(contact)
      }));
    });
  };
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <ListContacts
              contacts={this.state.contacts}
              onDeleteContact={this.removeContact}
            />
          )}
        />
        <Route
          path="/create"
          render={({ history }) => (
            <CreateContact
              onCreateContact={contact => {
                this.createContact(contact);
                history.push('/');
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
