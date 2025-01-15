import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchExample from './ChiamateHttp/wp'
import FetchExampl from './ChiamateHttp/assenza'

function App() {

  return (
    <>
      <FetchExample></FetchExample>
      <FetchExampl></FetchExampl>
    </>
  )
}

export default App
