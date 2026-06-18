import React from "react"

const Philosophy = React.memo(() => {
    const promises = [
        "Creative Concept Development",
        "Advertising Campaigns",
        "Branding & Visual Identity",
        "Copywriting & Content Creation"
    ];

    return (
        <div id="philosophy" className="w-full h-fit py-24 flex justify-center bg-[#0a0a0a] relative overflow-hidden">
            {/* Ambient Dark Mode Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div id="philosophybody"
                className="container mx-auto w-full h-full px-6 lg:px-15 relative z-10 flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-20 lg:gap-10">
                
                {/* Left Side: Philosophy */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center text-center lg:text-left normalTextReveal">

                    <h2 id="heading"
                        className="cormorant-garamond text-5xl sm:text-6xl lg:text-6xl leading-tight text-white mb-10">
                        Our <span className="italic font-light text-gray-200">Philosophy</span>
                    </h2>

                    <div
                        className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 lg:from-blue-400 to-transparent mx-auto lg:mx-0 mb-10"></div>
                    
                    <div className="relative mb-10">
                        {/* Decorative Large Quote */}
                        {/*<span className="absolute -top-12 -left-4 lg:-left-12 text-[8rem] lg:text-[12rem] text-white/5 font-serif leading-none select-none pointer-events-none">"</span>*/}

                        <h3 className="cormorant-garamond text-4xl sm:text-5xl lg:text-5xl xl:text-5xl leading-tight relative z-10 text-white">
                            <span className="italic font-medium text-gray-200">True creativity does not demand attention —</span><br/>
                            <span className="font-medium text-blue-400 mt-3 block">it earns respect.</span>
                        </h3>
                    </div>
                    
                    {/*<div className="w-24 h-[2px] bg-gradient-to-r from-blue-400 to-transparent mb-10 mx-auto lg:mx-0"></div>*/}

                    <p id="para2" className="inter text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                        At Adcore, success is measured by impact, longevity, and the quiet confidence of work done well.
                    </p>
                </div>

                {/* Vertical Divider for Desktop */}
                <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

                {/* Right Side: Promise */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center mt-10 lg:mt-0 normalTextReveal">
                    <h2 id="heading"
                        className="cormorant-garamond text-5xl sm:text-6xl lg:text-6xl leading-tight text-white mb-10">
                        Our <span className="italic font-light text-gray-200">Promise</span>
                    </h2>

                    <div
                        className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 lg:from-blue-400 to-transparent mx-auto lg:mx-0 mb-14"></div>


                    <div id="boxes" className="flex flex-col gap-6 sm:gap-8">
                        {promises.map((promise, index) => (
                            <div key={index} className="group relative pl-8 sm:pl-12 py-4 cursor-default">
                                {/* Animated Minimalist Line Indicator instead of a box */}
                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 group-hover:bg-blue-400 transition-colors duration-500"></div>
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-white/10 group-hover:bg-blue-400 group-hover:w-8 transition-all duration-500"></div>

                                <span className="inter text-2xl sm:text-2xl text-gray-400 group-hover:text-white transition-colors duration-300 font-light tracking-wide">
                                    {promise}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
})

export default Philosophy
