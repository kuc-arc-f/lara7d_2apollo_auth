//import React ,{useState, useEffect } from 'react';
import React  from 'react';
import { Link } from 'react-router-dom';
import LibAuth from '../../lib/LibAuth'
import IndexRow from './IndexRow';
//import LibTodo from '../../libs/LibTodo';
import { useQuery } from "@apollo/client";
import { GET_TODOS } from '../../graphql/todo';

function TodosIndex(props) {
  LibAuth.valid_auth(props)
  const { loading, error, data } = useQuery(GET_TODOS, {
    fetchPolicy: "network-only"
  })  
  if (loading) return <p>Loading...</p>;

  return (
    <div className="container py-2">
      <h3>Todos - index</h3>
      <hr />
      <Link to={`/todos_create`} >
          <button>Create</button>
      </Link>      
      <hr />
      {data.todos.map((item ,index) => (
      <IndexRow obj={item} key={index} />
      ))}
    </div>
  );
}
export default TodosIndex;