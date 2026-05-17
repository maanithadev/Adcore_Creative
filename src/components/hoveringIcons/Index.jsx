import React from "react"
import { createPortal } from "react-dom"
import { FaArrowDownLong } from "react-icons/fa6";

const HoveringIcons = React.memo(() => {

    const Icons = document.querySelector("#hoveringIcons")

    return createPortal(
        <div id="hoveringIcons"
            className="fixed lg:bottom-13 lg:right-[3vw] bottom-10 right-15 max-sm:right-10 z-40 flex flex-row-reverse items-center gap-2">
            <div className="uparrow">
                <div className="flex justify-center items-center">
                    <a href="#" className="text-white border-3 rounded-3xl p-2">
                        <FaArrowDownLong className="rotate-180 text-3xl" />
                    </a>
                </div>
            </div>
            <div id="whatsapp">
                <div id="wrapper" className="rounded-[50%] flex justify-center items-center">
                    <a href="https://wa.me/0772210022?text=testing" target="_blank">
                        <img src="./assets/icons/Social Media/whatsapp.png" alt=""
                            className="hoverScaleElements w-[60px] h-[60px] rounded-[50%]" />
                    </a>
                </div>
            </div>
        </div>,
        Icons
    )
})

export default HoveringIcons
