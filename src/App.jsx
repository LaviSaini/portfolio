import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/header'
import Home from './components/Home/home'
import Layout from './components/Layout'
import SocialLinks from './components/Social/SocialLinks'
function App() {

  return (
    <>
      {/* <Header /> */}
      <SocialLinks/>
      <Layout />
    </>
  )
}

export default App
