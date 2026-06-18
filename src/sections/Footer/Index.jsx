import React from "react"

const Footer = React.memo(() => {

    return (
        <div id="footer" className="w-full h-fit px-10 pt-15 pb-7 flex justify-center bg-black relative">
            <div id="footerbody"
                className="container mx-auto w-full h-full relative flex flex-col justify-center lg:gap-y-8 max-lg:gap-y-5">
                <div className="grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 max-lg:gap-y-5">
                    <div className="w-full h-fit flex flex-col justify-center items-center flex-wrap">
                        <img src="./assets/comapny specific/Adcore_Logo_page-0002-removebg-preview.png" alt=""
                            className="hoverScaleElements w-[50%] sm:w-[35%] lg:w-[50%] h-auto" />
                        <div id="icons" className="flex justify-center items-center gap-4 mt-3 mb-10 flex-wrap">
                            <a href="https://wa.me/0772210022?text=testing" target="_blank">
                                <img src="./assets/icons/Social Media/whatsapp.png" alt="whatsapp"
                                    className="hoverScaleElements w-10" />
                            </a>
                            <a href="https://www.google.com" target="_blank">
                                <img src="./assets/icons/Social Media/facebook.png" alt="facebook"
                                    className="hoverScaleElements w-10" />
                            </a>
                            <a href="https://www.google.com" target="_blank">
                                <img src="./assets/icons/Social Media/instagram.png" alt="instagram"
                                    className="hoverScaleElements w-10" />
                            </a>
                            <a href="https://www.google.com" target="_blank">
                                <img src="./assets/icons/Social Media/tiktok.png" alt="tiktok"
                                    className="hoverScaleElements border-2 border-solid border-gray-500 rounded-[50%] p-1 w-10" />
                            </a>
                        </div>
                    </div>
                    <div
                        className="w-full h-fit p-8 lg:border-r-1 lg:border-l-1 max-lg:border-t-1 max-lg:border-b-1 border-solid border-white">
                        <div id="links" className="w-full h-full text-white text-center flex flex-col justify-center gap-y-5">
                            <span className="font-bold text-3xl underline underline-offset-8">Links</span>
                            <a href="#about" className="inter text-base font-medium hoverScaleElements text-gray-400 hover:text-blue-400">
                                <p>About</p>
                            </a>
                            <a href="#whatdo" className="inter text-base font-medium hoverScaleElements text-gray-400 hover:text-blue-400">
                                <p>Services</p>
                            </a>
                            <a href="#philosophy" className="inter text-base font-medium hoverScaleElements text-gray-400 hover:text-blue-400">
                                <p>Philosophy</p>
                            </a>
                            <a href="#foundernote" className="inter text-base font-medium hoverScaleElements text-gray-400 hover:text-blue-400">
                                <p>Founder</p>
                            </a>
                            <a href="#worktogether" className="inter text-base font-medium hoverScaleElements text-gray-400 hover:text-blue-400">
                                <p>Contact</p>
                            </a>
                        </div>
                    </div>
                    <div
                        className="w-full h-fit p-8 text-white text-left flex flex-col justify-center gap-y-5 max-lg:text-center">
                        <span className="font-bold underline underline-offset-8 inter">Contact,</span>
                        <p className="inter text-base font-bold -mt-2 hoverScaleElements cursor-pointer text-gray-400 hover:text-blue-400">+94 772 210022 / +94 112 769350</p>
                        <span className="font-bold underline underline-offset-8 inter">Email Address,</span>
                        <p className="inter text-base font-bold -mt-2 hoverScaleElements cursor-pointer text-gray-400 hover:text-blue-400">kumara.jayakantha@gmail.com</p>
                        <span className="font-bold underline underline-offset-8 inter">Address,</span>
                        <p className="inter text-base font-bold -mt-2 hoverScaleElements cursor-pointer text-gray-400 hover:text-blue-400">126C1/1, High Level Road, Nugegoda,
                            Sri Lanka</p>
                    </div>
                </div>
                <div className="w-full h-1 bg-[gold]"></div>
                <h2 className="text-base font-semibold text-center text-white">Copyrights © {new Date().getFullYear()} All Rights Reserved.</h2>
            </div>
        </div>
    )
})

export default Footer
