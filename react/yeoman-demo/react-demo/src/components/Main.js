require('normalize.css');
require('styles/App.css');

import React from 'react';
import { Link } from 'react-router';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="main">
        <nav>
          <Link to="/posts" activeClassName="active">文章</Link>
          <Link to="/about" activeClassName="active">关于</Link>
          <Link to="/user" activeClassName="active">hh88</Link>
        </nav>
        <div className="content">
          <section>
            {this.props.children}
          </section>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};



export default AppComponent;
