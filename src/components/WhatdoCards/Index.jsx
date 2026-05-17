import { FaArrowRightLong } from "react-icons/fa6";

const WhatdoCards = (props) => {

    const { id, title, description, clickState, handleClick } = props

    return (
        <div
            id="box1"
            className="group relative bg-white border border-gray-100 p-8 lg:p-10 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer overflow-hidden normalTextReveal"
            onClick={clickState ? () => handleClick(id) : null}
        >
            <div
                className="absolute -top-4 -right-4 w-24 h-24 bg-[#0072BC]/5 rounded-full blur-2xl group-hover:bg-[#0072BC]/10 transition-colors duration-500">
            </div>
            <div className="relative z-10 flex flex-col h-full gap-4">
                <h3 className="cormorant-garamond subheading-color text-3xl">{title}</h3>
                <p className="inter text-gray-500 leading-relaxed">{description}</p>
                {clickState &&
                    <div className="mt-auto pt-4">
                        <p
                            className="inter font-semibold tracking-wide inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
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
