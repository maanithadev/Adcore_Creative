import React from "react"

const Whyadcore = React.memo(() => {
    const items = [
        {icon: "Icon_1.png", text: "Established in 2009 with enduring industry presence"},
        {icon: "Icon_2.png", text: "Trusted by top-tier advertising agencies"},
        {icon: "Icon_3.png", text: "Elegant creative thinking with strategic depth"},
        {icon: "Icon_4.png", text: "Professional, discreet, and dependable"},
        {icon: "Icon_5.png", text: "Commitment to quality over quantity"},
    ]

    return (
        <div id="whyadcore"
             className="w-full h-fit px-6 lg:px-15 py-24 flex justify-center bg-[#0a0a0a] relative overflow-hidden">
            {/* Ambient Dark Mode Glows */}
            <div
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none"></div>
            <div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div id="whyadcorebody"
                 className="container mx-auto w-full h-full relative flex flex-col justify-center items-center text-center z-10">

                <h2 id="heading"
                    className="cormorant-garamond text-5xl sm:text-6xl lg:text-6xl leading-tight text-white mb-10">
                    Why <span className="italic font-light text-gray-200">Adcore?</span>
                </h2>

                <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-14"></div>

                <div id="list"
                     className="w-full relative flex flex-col justify-center items-center gap-6 text-left z-10">
                    {items.map((item, index) => (
                        <div key={index}
                             className="normalTextReveal group w-full sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[55%] px-6 sm:px-8 py-5 sm:py-6 flex items-center gap-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300 cursor-default relative overflow-hidden">

                            {/* Decorative hover gradient blob inside card */}
                            <div
                                className="absolute -right-16 -top-16 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            {/* Left edge blue accent line */}
                            <div
                                className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/5 group-hover:bg-blue-400 transition-colors duration-500"></div>

                            {/* Icon Container */}
                            <div
                                className="w-16 h-16 sm:w-20 sm:h-20 p-3 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 relative z-10 hidden sm:flex border border-white/10">
                                <img src={`./assets/icons/Why Adcore/${item.icon}`} alt=""
                                     className="w-full h-full object-contain drop-shadow-sm"/>
                            </div>

                            {/* Text */}
                            <p className="inter text-lg sm:text-xl font-medium text-gray-300 text-center sm:text-left w-full relative z-10 leading-relaxed group-hover:text-white transition-colors duration-300">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
})

export default Whyadcore
