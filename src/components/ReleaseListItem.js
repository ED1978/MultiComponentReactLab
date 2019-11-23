import React from 'react';

class ReleaseListItem extends React.Component {
  render() {
    return (
      <div className="release-list-item">
        <h4>{this.props.name}</h4>
      </div>
    )
  }
}

export default ReleaseListItem;
