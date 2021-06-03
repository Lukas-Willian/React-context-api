import React from 'react'

export const themes = {
    dark: {
        color: "white",
        background : "#292929",
        borderRadius: "25px",

    },
    light: {
        color: "black",
        background: "#ececec",
        borderRadius: "25px"
    }
};

const ThemeContext = React.createContext(themes.dark);//Definir valor da variavel global

export default ThemeContext;
