import React from 'react';

class StrictAccess extends React.Component {
  render() {
    const { user } = this.props;
    return(
      <div>
          <p>{user.username === 'joao' ? `Welcome ${ user.username } ` : alert('Access denied')}</p>
      </div>
    )
  }
}

export default StrictAccess;