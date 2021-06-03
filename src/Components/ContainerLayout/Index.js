import React, { useContext } from 'react';

import './ContainerLayout.css';

import ThemeContext from '../../Styles/Themes/ContextTheme';

export default function ContainerLayout() {
    const theme = useContext(ThemeContext);
    return (
        <div style={theme} id="Container">
            <p>Background: {JSON.stringify(theme.background)}</p>
        </div>
    )
}
