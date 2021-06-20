import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//
class IndexRow extends Component {
  render() {
    return (
    <div>
      <Link to={`/article_show/${this.props.obj.id}`} >
          <h3>{this.props.obj.title}</h3>
      </Link>      
      ID : {this.props.obj.id}
      <hr />
    </div>
    )
  }
}

export default IndexRow;