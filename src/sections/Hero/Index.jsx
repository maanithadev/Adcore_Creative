import React from "react"
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Hero = React.memo(() => {

    const bgVideoURL = "./assets/videos/hero_background_video.mp4"

    return (
        <div className="relative mt-27">
            <video id="herovideo" className="relative z-0 w-full h-screen object-cover" src={bgVideoURL} autoPlay loop muted></video>

            <div id="herobody" className="container w-full md:w-full absolute z-10 top-[50%] left-[50%] md:top-[45%] md:left-[65%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8 text-center text-white">
                <p className="inter heroTextReveal text-2xl sm:text-3xl">ADCORE CREATIVE (PVT) Ltd</p>
                <h2 className="cormorant-garamond heroTextReveal text-4xl sm:text-6xl">Elegant Ideas.</h2>
                <h2 className="cormorant-garamond heroTextReveal text-4xl sm:text-6xl">Enduring Impact.</h2>
                <p className="inter heroTextReveal max-md:w-80 max-lg:w-100 text-xl sm:text-2xl font-light">Advertising & Creative Consultancy | Since 2009</p>
                <a href="#about" id="btn"
                    className="group relative inline-flex items-center justify-center px-8 py-4 mt-5 overflow-hidden font-medium tracking-tighter text-white bg-transparent border border-white rounded-lg transition-all duration-300 ease-out heroTextReveal">
                    <span
                        className="absolute inset-0 w-full h-full px-5 py-5 rounded-lg bg-white transition-all duration-500 ease-out -translate-x-full group-hover:translate-x-0"></span>
                    <span
                        className="inter relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-black text-lg sm:text-xl">Discover Our Approach</span>
                </a>
                <div id="scroll">
                    <a href="#video" className="flex gap-1">
                        <p className="inter">SCROLL</p>
                        <MdOutlineKeyboardDoubleArrowDown className="text-2xl" />
                    </a>
                </div>
            </div>
        </div>
    )
})

export default Hero
