import React from 'react'
import About from './components/About'
import Navbar from './components/Navbar'
import Vault from './components/Vault'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/hero'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Vault />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App

