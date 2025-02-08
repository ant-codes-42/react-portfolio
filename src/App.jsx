import { useState } from 'react'
import { Outlet } from 'react-router'
import { HeadProvider } from './components/HeadContext'

import Header from './components/Header'
import Footer from './components/Footer'
import HeaderToggle from './components/HeaderToggle'

import './App.css'

function App() {

  return (
    <HeadProvider>
      <Header />
      <Outlet />
      <HeaderToggle />
      <Footer />
    </HeadProvider>
  )
}

export default App
