import React, { useState } from "react"
import { FiMenu } from "react-icons/fi";

const Header = React.memo(({headerScrolled}) => {

  const [mobile, setMobile] = useState(false)

  return (
    <>
      <div id="header" className="w-full mx-auto border-b border-white/5 fixed z-30 backdrop-blur-md">
        <div id="headerbody" className="container mx-auto w-full h-fit flex justify-between items-center px-10 py-3">
          <div id="left">
            <a href="#">
              <img src="./assets/comapny specific/Adcore_Logo_page-0002-removebg-preview.png" alt=""
                className="w-22" />
            </a>
          </div>
          <div id="right" className="gap-10 hidden sm:flex">
            <a href="#about" className={`text-sm font-medium hover:underline underline-offset-8 decoration-blue-500 transition-colors duration-200 ${headerScrolled ? 'text-black' : 'text-white'}`}>
              <p>About</p>
            </a>
            <a href="#whatdo" className={`text-sm font-medium hover:underline underline-offset-8 decoration-blue-500 transition-colors duration-200 ${headerScrolled ? 'text-black' : 'text-white'}`}>
              <p>Services</p>
            </a>
            <a href="#philosophy" className={`text-sm font-medium hover:underline underline-offset-8 decoration-blue-500 transition-colors duration-200 ${headerScrolled ? 'text-black' : 'text-white'}`}>
              <p>Philosophy</p>
            </a>
            <a href="#foundernote" className={`text-sm font-medium hover:underline underline-offset-8 decoration-blue-500 transition-colors duration-200 ${headerScrolled ? 'text-black' : 'text-white'}`}>
              <p>Founder</p>
            </a>
            <a href="#worktogether" className={`text-sm font-medium hover:underline underline-offset-8 decoration-blue-500 transition-colors duration-200 ${headerScrolled ? 'text-black' : 'text-white'}`}>
              <p>Contact</p>
            </a>
          </div>
          <FiMenu className={`cursor-pointer block sm:hidden text-2xl ${headerScrolled ? 'text-black' : 'text-white'}`} onClick={() => setMobile(!mobile)} />
        </div>
      </div>
      {mobile &&
        <div id="mobilemenumain" className="box-border w-full bg-[#002944] px-[40px] py-[20px] fixed top-27 z-50">
          <div id="mobilemenubody">
            <div id="menulinks" className="flex flex-col gap-6 justify-center items-center text-white">
              <a href="#about" className="hover:underline underline-offset-8" onClick={() => setMobile(!mobile)}>About</a>
              <a href="#whatdo" className="hover:underline underline-offset-8" onClick={() => setMobile(!mobile)}>Services</a>
              <a href="#philosophy" className="hover:underline underline-offset-8" onClick={() => setMobile(!mobile)}>Philosophy</a>
              <a href="#foundernote" className="hover:underline underline-offset-8" onClick={() => setMobile(!mobile)}>Founder</a>
              <a href="#worktogether" className="hover:underline underline-offset-8" onClick={() => setMobile(!mobile)}>Contact</a>
            </div>
          </div>
        </div>
      }
    </>
  )
})

export default Header
