import React from 'react';
import { render } from 'react-dom';
import App from './Main';
import About from './AboutComponent';
import Home from './HomeComponent';
import Posts from './post/PostsComponent';
import Post from './post/PostComponent';
import User from './UserComponent';
import { Router, Route, IndexRoute } from 'react-router';


// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('app'));

var routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path={About.path} component={About}/>
      <Route path="/posts" component={Posts}>
        <Route path="/post/:postID" component={Post}/>
      </Route>
      <Route path="/user" component={User}></Route>
    </Route>
  </Router>
);

var content = document.getElementById('app');


render(routes, content);

