import React, { useContext, useEffect } from 'react';

import '../ContainerText/ContainerText.css'

import ThemeContext from '../../Styles/Themes/ContextTheme';
import UserContext from '../../Context/ContextUser';

export default function ContainerLayout() {
    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <div style={theme} id="ContainerTwo">
            <h3>Usuario : {user}</h3>
            <p className='little'>
                Esse é o {user}, nosso Usuario<br/>
                de context-api desenvolvida<br/>
                no react como estudo, para depois<br/>
                ser publicada no GITHUB.<br/>
            </p>
        </div>
    )
}
