import React from 'react';

class ReleaseListItem extends React.Component {
  render() {
    return (
      <div className="release-list-item">
        <ul>
          <li><a href={this.props.url}>{this.props.name}</a></li>
        </ul>
      </div>
    )
  }
}

export default ReleaseListItem;
