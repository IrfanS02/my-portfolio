import React from "react"
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Project from './components/project/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ThemeSwitcher from './components/theme/ThemeSwitcher'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Project />
      <Contact />
      <ThemeSwitcher />
      <Footer />
    </>
  )
}

export default App