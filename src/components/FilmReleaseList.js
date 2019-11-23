import React from 'react';
import ReleaseListItem from './ReleaseListItem'

class FilmReleaseList extends React.Component {
  render() {
    return (
      <div className="film-release-list">
        <ReleaseListItem name="Spiderman: Into the Spiderverse" url="https://www.imdb.com/title/tt4633694/?ref_=rlm"/>
        <ReleaseListItem />
        <ReleaseListItem />
      </div>
    )
  }
}

export default FilmReleaseList;
