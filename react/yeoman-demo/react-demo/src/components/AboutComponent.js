'use strict';

import React from 'react';

require('styles//About.less');

class AboutComponent extends React.Component {
  render() {
    return (
      <div className="about-component">
        About
      </div>
    );
  }
}

AboutComponent.displayName = 'AboutComponent';
AboutComponent.title = 'About';
AboutComponent.path = '/about';

// Uncomment properties you need
// AboutComponent.propTypes = {};
// AboutComponent.defaultProps = {};

export default AboutComponent;
