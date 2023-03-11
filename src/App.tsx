import React from 'react';
import css from './App.module.scss';
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";

function App() {
  return (
    <div className={css.App}>
        <Nav/>
        <Main/>
    </div>
  );
}

export default App;
