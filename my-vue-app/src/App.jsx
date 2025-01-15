import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Persona from './ChiamateHttp/persona'
import Assenza from './ChiamateHttp/assenza'
import Wp from './ChiamateHttp/wp'

function App() {

  return (
    <>
     <Wp></Wp>
     <Assenza></Assenza>
     <Persona></Persona>
    </>
  )
}

export default App
