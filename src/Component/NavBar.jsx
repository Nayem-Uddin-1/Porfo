import React, { useState } from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll';



function NavBar() {

    const [showHide, setShowHide] = useState(false)


    return (
        <>
            <nav className=" ">
                <div className="mx-auto border-b border-gray-500 max-w-7xl px-2  sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <button onClick={() => setShowHide(!showHide)
                            }
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-green-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-green-500 focus:outline-hidden focus:ring-inset"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                {/*
        Icon when menu is closed.
  
        Menu open: "hidden", Menu closed: "block"
      */}
                                <svg
                                    className="block size-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                                {/*
        Icon when menu is open.
  
        Menu open: "block", Menu closed: "hidden"
      */}
                                <svg
                                    className="hidden size-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <h1 className='text-white text-2xl text-center logo-nayem'>Nayem Uddin</h1>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                                    <a
                                        href="#"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Home
                                    </a>
                                    <a
                                        href="#"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        <Link
                                            to="skills"  // Target section
                                            smooth={true} // Smooth scroll effect
                                            duration={500} // Duration of the scroll
                                            className="text-white"
                                        >
                                            Skills
                                        </Link>


                                    </a>
                                    <a
                                        href="#"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >

<Link
                                            to="project"  // Target section
                                            smooth={true} // Smooth scroll effect
                                            duration={500} // Duration of the scroll
                                            className="text-white"
                                        >
                                             Projects
                                        </Link>
                                       
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="flex items-center gap-4">
                                <div className="flex logos gap-2">
                                    <Link to="/">  <FaFacebook className="  text-[25px] text-white hover:text-blue-500 transition" />
                                    </Link>
                                    <FaTwitter className="text-[25px] text-white hover:text-blue-500 transition" />
                                    <FaLinkedin className="text-[25px] text-white hover:text-blue-500 transition" />
                                </div>

                                <button className="border border-green-500 px-4 py-2  text-white hover:border-gray-700 hover:bg-green-500 font-bold transition">
                                    Contact
                                </button>
                            </div>


                        </div>
                    </div>
                </div>

                {/* Mobile menu, show/hide based on menu state. */}
                <div className="sm:hidden " id="mobile-menu">


                    {
                        showHide && <div className="space-y-1 px-2 pt-2 pb-3">
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                            <a
                                href="#"
                                className="block  px-3 py-2 text-base font-medium text-white hover:bg-green-500  "
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-green-500 hover:text-white"
                            >
                                Skills
                            </a>
                            <a
                                href="#"
                                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-green-500 hover:text-white"
                            >
                                Projects
                            </a>


                        </div>

                    }



                </div>


            </nav>
        </>
    )
}

export default NavBar