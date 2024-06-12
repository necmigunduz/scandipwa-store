// src/component/DarkModeProvider/DarkModeProvider.component.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DarkModeProvider.style';

class DarkModeProvider extends Component {
    render() {
        const { children, isDarkModeEnabled } = this.props;
        console.log("PROPS", this.props)
        return (
          <div block="DarkModeProvider" mods={{ isEnabled: isDarkModeEnabled }}>
            {children}
          </div>
        );
      }
}

DarkModeProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default DarkModeProvider;
