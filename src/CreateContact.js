import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class CreateContact extends Component {
  static propTypes = {
    onCreateContact: PropTypes.func.isRequired
  };
  state = {
    toList: false
  };
  handleSubmit = user => {
    this.props.onCreateContact(user).then(() =>
      this.setState(() => ({
        toList: true
      }))
    );
    // console.log('why is this NOT WORKING!!!😡😩');
  };
  render() {
    if (this.state.toList === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        Create Contact
        <br />
        <button
          onClick={() => {
            this.handleSubmit({
              id: 'james',
              name: 'James Priest',
              handle: '@james',
              avatarURL: '/james.jpg'
            });
          }}
        >
          Add Contact
        </button>
      </div>
    );
  }
}

export default CreateContact;
