import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateContact extends Component {
  static propTypes = {
    onCreateContact: PropTypes.func.isRequired
  };
  render() {
    const { onCreateContact } = this.props;
    return (
      <div>
        Create Contact
        <button
          onClick={() => {
            onCreateContact({
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
