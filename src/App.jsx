import './App.css'


import NavBar from './Component/NavBar'
import Banner from './Component/Banner'
import Skills from './Component/Skills'
import Project from './Component/Project'

import { Element } from 'react-scroll';
import ContactMe from './Component/ContactMe'





function App() {


  return (
    <>

      <NavBar />
      <Banner />


      <Element name="skills" className="">
        <Skills />
      </Element>
      <Element name="project" className="">
        <Project />
      </Element>
      <ContactMe />




    </>
  )
}

export default App
