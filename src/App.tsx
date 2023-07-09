import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./LessonSprint01Week01Map/NewComponent";

function App() {
  let studentsList = [
    {id:1, name:"Gago", age: 18},
    {id:2, name:"Valod", age: 23},
    {id:3, name:"Serob", age: 43},
    {id:4, name:"Vazgen", age: 38},
    {id:5, name:"Gegham", age: 47},
    {id:6, name:"Hayk", age: 58},
    {id:7, name:"Tigran", age: 48}
  ]

  return (<>
    {/*Lesson: 01-Sprint, Week-1, Components*/}
    {/*<Header title={"This is HeaderTitle"}/>*/}
    {/*<Body titleForBody={"This is BodyTitle"}/>*/}
    {/*<Footer titleForFooter={"This is FooterTitle"}/>*/}

    {/*Lesson: 01-Sprint, Week-1, Map*/}
    <NewComponent students={studentsList}/>

  </>)
}

export default App;
