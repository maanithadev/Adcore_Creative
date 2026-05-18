import React, { useState } from "react"
import { FiMenu } from "react-icons/fi";

const Header = React.memo(() => {

  const [mobile, setMobile] = useState(false)

  return (
    <>
      <div id="header" className="container w-full mx-auto bg-white relative top-0 z-30">
        <div id="headerbody" className="w-full flex justify-between items-center px-4">
          <div id="left">
            <a href="#">
              <img src="./assets/comapny specific/Adcore_Logo_page-0002-removebg-preview.png" alt=""
                className="w-22" />
            </a>
          </div>
          <div id="right" className="gap-10 hidden sm:inline-flex">
            <a href="#about" className="text-base font-normal hover:underline underline-offset-8">
              <p>About</p>
            </a>
            <a href="#whatdo" className="text-base font-normal hover:underline underline-offset-8">
              <p>Services</p>
            </a>
            <a href="#philosophy" className="text-base font-normal hover:underline underline-offset-8">
              <p>Philosophy</p>
            </a>
            <a href="#foundernote" className="text-base font-normal hover:underline underline-offset-8">
              <p>Founder</p>
            </a>
            <a href="#worktogether" className="text-base font-normal hover:underline underline-offset-8">
              <p>Contact</p>
            </a>
          </div>
          <FiMenu className="cursor-pointer block sm:hidden text-2xl" onClick={() => setMobile(!mobile)} />
        </div>
      </div>
      {mobile &&
        <div id="mobilemenumain" className="box-border w-full bg-[#002944] px-[40px] py-[20px] absolute top-20 z-50">
          <div id="mobilemenubody">
            <div id="menulinks" className="flex flex-col gap-6 justify-center items-center text-white">
              <a href="#about" className="menulink" className="hover:underline underline-offset-8" onClick={() => setMobile(!mobile)}>About</a>
              <a href="#whatdo" className="menulink" className="hover:underline underline-offset-8" onClick={() => setMobile(!mobile)}>Services</a>
              <a href="#philosophy" className="menulink" className="hover:underline underline-offset-8" onClick={() => setMobile(!mobile)}>Philosophy</a>
              <a href="#foundernote" className="menulink" className="hover:underline underline-offset-8" onClick={() => setMobile(!mobile)}>Founder</a>
              <a href="#worktogether" className="menulink" className="hover:underline underline-offset-8" onClick={() => setMobile(!mobile)}>Contact</a>
            </div>
          </div>
        </div>
      }
    </>
  )
})

export default Header
