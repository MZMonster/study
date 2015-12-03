'use strict';

import React from 'react';

require('styles//Home.less');

class HomeComponent extends React.Component {
  render() {
    return (
      <div className="home-component">
        welcome!
      </div>
    );
  }
}

HomeComponent.displayName = 'HomeComponent';

// Uncomment properties you need
// HomeComponent.propTypes = {};
// HomeComponent.defaultProps = {};

export default HomeComponent;
