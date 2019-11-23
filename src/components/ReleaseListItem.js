import React from 'react';

class ReleaseListItem extends React.Component {
  render() {
    return (
      <div className="release-list-item">
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default ReleaseListItem;
