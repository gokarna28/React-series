import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-md mb-4'>Tailwind</h1>
      <Card userName="Gokarna Chaudhary" />
      <Card userName="Rohan Shrestha" />
    </>
  )
}

export default App
