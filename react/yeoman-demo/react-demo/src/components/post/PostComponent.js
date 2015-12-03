'use strict';

import React from 'react';

require('styles/post/Post.less');

class PostComponent extends React.Component {
  render() {
    const { postID } = this.props.params;

    return (
      <div className="post-component">
       hhhhh postID: {postID}
      </div>
    );
  }
}

PostComponent.displayName = 'PostPostComponent';

// Uncomment properties you need
// PostComponent.propTypes = {};
// PostComponent.defaultProps = {};

export default PostComponent;
