import React from 'react'

import { Link, Element } from 'react-scroll';


function Test() {
  return (
    <>  <div>
    {/* Navbar */}
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link
            to="home"  // Target section
            smooth={true} // Smooth scroll effect
            duration={500} // Duration of the scroll
            className="text-white"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"  // Target section
            smooth={true}
            duration={500}
            className="text-white"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>

    {/* Sections */}
    <Element name="home" className="h-screen bg-blue-200 flex items-center justify-center">
      <h1 className="text-4xl">Home Section</h1>
    </Element>

    <Element name="about" className="h-screen bg-green-200 flex items-center justify-center">
      <h1 className="text-4xl">About Section</h1>
    </Element>
  </div>
  </>
  )
}

export default Test