import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
  return (<>
    <Header title={"This is HeaderTitle"}/>
    <Body titleForBody={"This is BodyTitle"}/>
    <Footer titleForFooter={"This is FooterTitle"}/>
  </>)
}

export default App;
