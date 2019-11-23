import React, {Fragment} from 'react';
import FilmReleaseList from '../components/FilmReleaseList';

class FilmReleaseBox extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <FilmReleaseList />
        <button>See More Upcomming Releases</button>
      </Fragment>
    );
  }
}

export default FilmReleaseBox;
