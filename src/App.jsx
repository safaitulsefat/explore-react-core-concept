import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singers from './Singers'
import Handleevent from './handleevent'
function App() {
  const actors = ['Sakib','Shoriful Raj','Rishad']

  const singers = [{
    name:'dr mahfuz',age:20
  },
  {name:'hasan',age:30}
]
  return (
    <>
     <h1>VITE + REACT</h1>
     <Person></Person>
     <Person></Person>
     <Student name='rakib' ></Student>
     <Devolper name='sefat'></Devolper>
     <Todo name='study' isdone={true}></Todo>
     <Todo name='sports' isdone={false}></Todo>
     {
       actors.map(actor=> <Actor name={actor}></Actor>)
     }
     {
      singers.map(singer=><Singers singer={singer}></Singers>)
     }
     <Handleevent></Handleevent>
    </>
  )
}
function Person(){
  const age=20;
  const person = {name:'sakib'}
  return <h3>I am  A {person.name}  age is {age}</h3>
}
function Student({name}){
  return(
    <div className='student'>
      <h3>this is student {name}</h3>
       
    </div>
  )
}
function Devolper(props){
  const devloperStyle = {
    margin:'20px',
    padding:'20px',
    border: '2px solid blue'

  }
  return(
    <div style={devloperStyle}>
      <h5>DEVOLPER {props.name}</h5>
    </div>
  )
}
export default App
