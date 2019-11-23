import React from 'react';
import ReleaseListItem from './ReleaseListItem'

class FilmReleaseList extends React.Component {
  render() {

    const listNodes = this.props.data.map(list => {
      return(
        <ReleaseListItem name={list.name} key={list.id}></ReleaseListItem>
      )
    })

    return (
      <div className="film-release-list">
        {listNodes}
      </div>
    )
  }
}

export default FilmReleaseList;
