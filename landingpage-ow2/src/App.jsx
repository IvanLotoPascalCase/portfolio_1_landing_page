import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MainDivisor from './components/MainDivisor.jsx'
import Heroes from './components/Heroes.jsx'

function App() {

  return (
    <div>
      <Header />
      <Hero />
      <MainDivisor />
      <Heroes />
    </div>
  )
}

export default App
