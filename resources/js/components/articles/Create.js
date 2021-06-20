import React  from 'react';
// import { useState ,useEffect  } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ARTICLES } from '../../graphql/articles'
import LibAuth from '../../lib/LibAuth';

function ArticlesCreate(props) {
  LibAuth.valid_auth(props)
  const [AddArticle ] = useMutation(ADD_ARTICLES);
  const clickHandler= async function(){
    var title = document.getElementById('title');
// console.log("clickHandler: " + title.value)
    await AddArticle({ 
      variables: { title: title.value ,author_id: 1 } 
    });
//    title.value= ''
//    props.history.push("/todos");
  }

  return (
  <div className="container py-2">

    <h3>Articles - Create</h3>
    <hr />
    <input type="text" name="title" id="title" />
    <button onClick={() => {clickHandler()}}>
      Add
    </button>      
    <hr />
  </div>
  );
}
export default ArticlesCreate;
