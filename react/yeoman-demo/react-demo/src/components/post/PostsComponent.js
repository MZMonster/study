'use strict';

import React from 'react';
import { Link } from 'react-router';

require('styles//Posts.less');

class PostsComponent extends React.Component {
  render() {
    return (
      <div className="posts-component">
        <ul>
          <li><Link to='/post/123' activeClassName="active">哈哈</Link></li>
          <li><Link to='/post/456' activeClassName="active">哈哈2</Link></li>
        </ul>
        <section>
          {this.props.children}
        </section>
      </div>
    );
  }
}

PostsComponent.displayName = 'PostsComponent';

// Uncomment properties you need
// PostsComponent.propTypes = {};
// PostsComponent.defaultProps = {};

export default PostsComponent;
