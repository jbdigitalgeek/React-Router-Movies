import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class SavedList extends Component {
  constructor(props) {
    console.log(props)
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => {
          return (
            <Link to={`/movies/${movie.id}`} key={movie.id} activeClassName="saved-active">
              <span className="saved-movie">{movie.title}</span>
            </Link>
          )
        })}
        <Link to= "/"><div className="home-button">Home</div></Link>
      </div>
    );
  }
}