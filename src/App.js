import React, { useEffect, useState } from 'react';

import './Style.css';

import ThemeContext, {themes} from './Styles/Themes/ContextTheme';
import UserContext , {users} from './Context/ContextUser';

import ContainerLayout from './Components/ContainerLayout/Index';
import ContainerText from './Components/ContainerText/Index';

function App() {


  const [theme , setTheme] = useState(themes.dark);
  const [user , setUser] = useState(users.name);
  const [string , setString] = useState("")

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if(userStorage){
      setUser(JSON.parse(userStorage))
    }else{
      setUser("")
    }
} , [])


  const togleTheme = () => {
    theme == themes.dark
    ? setTheme(themes.light)
    : setTheme(themes.dark)
  };
  const handleStorageE = (e) => {
    setString(e.target.value)
    console.log(string);
  }
  const handleStorage = () => {
    setUser(string);
    localStorage.setItem("user" , JSON.stringify(string));
    console.log(user);
  }
  
  return (
    <div id="display">
      <ThemeContext.Provider value={theme}>
        <div className='inputs'>
          <button className='inputButtont' onClick={togleTheme}>Trocar o tema</button>
        </div>
        <div className='Containers'>
          <div className='Themes'>
            <ContainerLayout />
            <ContainerLayout />
            <ContainerLayout />
          </div>
        </div>
        <UserContext.Provider value={user}>
        <input className="InputText" type="text" maxLength="8" placeholder="Digite um usuário" onChange={handleStorageE}/>
        <button className="inputButton" onClick={handleStorage}>Cadastrar name</button>
        <div className="Themes">
          <ContainerText />
          <ContainerText />
          <ContainerText />
        </div>
      </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
