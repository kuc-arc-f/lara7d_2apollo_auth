
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from "@apollo/client";
import client from '../apollo-client'

import Home from './Home';
import Test from './TestSession';
import Navbar from './layout/Navbar';
/* todos */
import todos from './todos/Index';
import todoCreate from './todos/Create';
import todoShow from './todos/Show';
import todoEdit from './todos/Edit';
/* user */
import userCreate from './user/Create';
import userLogin from './user/Login';
import userLogout from './user/Logout';
/* articles */
import articles from './articles/Index';
import articleCreate from './articles/Create';
import articleShow from './articles/Show';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Router>
        <div>
        <ApolloProvider client={client}>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/test' component={Test} />
          {/* users */}
          <Route path='/user_create' component={userCreate} />
          <Route path='/login' component={userLogin} />
          <Route path='/logout' component={userLogout} />
          {/* todos */}
          <Route path='/todos' component={todos} />
          <Route path='/todo_show/:id' component={todoShow}/>
          <Route path='/todos_create' component={todoCreate} />
          <Route path='/todo_edit/:id' component={todoEdit} /> 
          {/* articles */}
          <Route path='/articles' component={articles} />
          <Route path='/article_crate' component={articleCreate} />
          <Route path='/article_show/:id' component={articleShow}/>

        </ApolloProvider>
        </div>
      </Router>
    </div>
    );
  }
}
export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}