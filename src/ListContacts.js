import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired,
        avatarURL: PropTypes.string.isRequired
      })
    ),
    onDeleteContact: PropTypes.func.isRequired
  };
  state = {
    query: ''
  };
  updateQuery = e => {
    const query = e.target.value;
    this.setState(() => ({
      query: query.trim()
    }));
  };
  render() {
    const { query } = this.state;
    const { contacts, onDeleteContact } = this.props;

    // const showingContacts = contacts.filter(
    //   contact => contact.name.toLowerCase().indexOf(query.toLowerCase()) > -1
    // );

    // const showingContacts =
    //   query === ''
    //     ? contacts
    //     : contacts.filter(contact =>
    //         contact.name.toLowerCase().includes(query.toLowerCase())
    //       );

    const showingContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );

    console.log('showingContacts', showingContacts);
    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Contacts"
            value={query}
            onChange={this.updateQuery}
          />
        </div>
        <ol className="contact-list">
          {showingContacts.map(contact => (
            <li key={contact.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{
                  backgroundImage: `url(${contact.avatarURL})`
                }}
              />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <button
                className="contact-remove"
                onClick={() => onDeleteContact(contact)}
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContacts;
