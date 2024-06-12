// src/component/DarkModeProvider/DarkModeProvider.component.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DarkModeContext } from '../../context/DarkModeContext';

class DarkModeProvider extends Component {
    static contextType = DarkModeContext;

    render() {
        const { children } = this.props;
        const { isDarkModeEnabled } = this.context;

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
