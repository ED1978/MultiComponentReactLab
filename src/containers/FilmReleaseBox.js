import React from 'react';

class FilmReleaseBox extends React.Component {
  render() {
    return (
      <div className="film-release-box">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default FilmReleaseBox;
