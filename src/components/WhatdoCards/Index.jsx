import { FaArrowRightLong } from "react-icons/fa6";

const WhatdoCards = (props) => {

    const { id, title, description, clickState, handleClick } = props

    return (
        <div
            id="box1"
            className="group relative bg-white/5 border border-white/10 p-8 lg:p-10 rounded-2xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer overflow-hidden normalTextReveal"
            onClick={clickState ? () => handleClick(id) : null}
        >
            {/* Blue glow on hover */}
            <div
                className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors duration-500">
            </div>
            {/* Bottom left accent */}
            <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-gradient-to-t from-blue-400 to-transparent group-hover:h-full transition-all duration-500 ease-out"></div>

            <div className="relative z-10 flex flex-col h-full gap-4">
                <h3 className="cormorant-garamond text-white group-hover:text-blue-300 transition-colors duration-300 text-3xl">{title}</h3>
                <p className="inter text-gray-400 leading-relaxed font-medium">{description}</p>
                {clickState &&
                    <div className="mt-auto pt-4">
                        <p
                            className="inter text-blue-400 font-semibold tracking-wide inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                            View Details
                            <FaArrowRightLong />
                        </p>
                    </div>
                }
            </div>
        </div>
    )
}

export default WhatdoCards
