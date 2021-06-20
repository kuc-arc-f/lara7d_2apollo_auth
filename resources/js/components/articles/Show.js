import React  from 'react';
//import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ARTICLE } from '../../graphql/articles';

function ArticleShow(props) {
//  console.log(props.match.params.id)
    const id = parseInt(props.match.params.id)
    const { loading, error, data } = useQuery(GET_ARTICLE ,
      { variables: {id} , fetchPolicy: "network-only" }
    );    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
console.log(data.article)
    return (
      <div className="container py-2">
        <h3>Article- Show</h3>
        <hr />
        <h1>{data.article.title}</h1>
        ID : {data.article.id}
        <hr />
        <p>author : {data.article.author.name} </p>
      </div>
    );
  }
  export default ArticleShow;