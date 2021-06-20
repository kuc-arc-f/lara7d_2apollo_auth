import React ,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import LibAuth from '../../lib/LibAuth'
import LibPagenate from '../../lib/LibPagenate'
import IndexRow from './IndexRow';
import { useQuery } from "@apollo/client";
import { GET_ARTICLES } from '../../graphql/articles';

function ArticlesIndex(props) {
  LibPagenate.init()
  const [page, setPage] = useState(1);
//  LibAuth.valid_auth(props)
  const { loading, error, data } = useQuery(GET_ARTICLES, {
    variables: {page}, fetchPolicy: "network-only"
  })
  if (loading) return <p>Loading...</p>;
console.log(data)
  const get_page_disp = function(){
    var display = LibPagenate.is_paging_display(data.articles.length)
    return display
  } 
  const firstPageHandler= async function(){
    setPage(1)
  } 
  const pageHandler= async function(){
    setPage(page + 1)
  }
  return (
    <div className="container py-2 mb-4">
      <h3>Articles - index</h3>
      <hr />
      <Link to={`/article_crate`} >
          <button>Create</button>
      </Link>      
      <hr />
      {data.articles.map((item ,index) => (
      <IndexRow obj={item} key={index} />
      ))}
      {(get_page_disp()==1) ? 
      (<div>
        <button onClick={() => {firstPageHandler()}}>1st
        </button>           
        <button onClick={() => {pageHandler()}}>next
        </button>           
      </div>
      ) 
      : ""}  
    </div>
  );
}
export default ArticlesIndex;