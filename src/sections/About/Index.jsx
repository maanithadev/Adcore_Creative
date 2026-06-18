import React from "react"

const About = React.memo(() => {
    return (
        <div id="about" className="w-full h-fit py-24 flex justify-center bg-[#0a0a0a] relative overflow-hidden">
            {/* Ambient Dark Mode Glows matching the theme */}
            <div
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none"></div>
            <div
                className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div id="aboutbody"
                 className="container mx-auto px-6 lg:px-15 relative z-10 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16 lg:gap-10">

                {/* Left Side: Heading and Text */}
                <div id="left"
                     className="w-full lg:w-7/12 lg:pl-15 flex flex-col justify-center text-center lg:text-left normalTextReveal">

                    <h2 id="heading"
                        className="cormorant-garamond text-5xl sm:text-6xl lg:text-6xl leading-tight text-white mb-10">
                        About <span className="italic font-light text-gray-200">Adcore Creative</span>
                    </h2>

                    <div
                        className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 lg:from-blue-400 to-transparent mx-auto lg:mx-0 mb-10"></div>

                    <p className="inter text-xl text-gray-400 leading-relaxed font-medium mb-8 max-w-2xl mx-auto lg:mx-0">
                        Founded in 2009 by Kumara Jayakantha, Adcore (Private) Limited is an advertising agency shaped
                        by refined thinking, creative discipline, and a profound understanding of brand communication.
                    </p>

                    <p className="inter text-xl text-gray-400 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                        Over the years, Adcore has become a trusted creative partner to several of Sri Lanka's leading
                        advertising agencies, delivering work that is <span className="text-gray-200">intelligent, tasteful, and effective.</span> We
                        believe true creativity lies not in noise, but in <span className="text-blue-400 font-medium">clarity, relevance, and executional excellence.</span>
                    </p>
                </div>

                {/* Vertical Divider for Desktop */}
                {/*<div*/}
                {/*    className="hidden lg:block w-[1px] h-auto min-h-[350px] bg-gradient-to-b from-transparent via-white/10 to-transparent self-stretch mx-4 mt-8"></div>*/}

                {/* Right Side: Metadata List */}
                <div id="right"
                     className="w-full lg:w-4/12 flex flex-col justify-center mt-8 lg:mt-12 normalTextReveal text-left">

                    <div className="flex flex-col gap-8 sm:gap-10">

                        {/* Data Box 1 */}
                        <div className="group relative pl-8 py-2">
                            <div
                                className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 group-hover:bg-blue-400 transition-colors duration-500"></div>
                            <h3 className="cormorant-garamond text-lg font-black! tracking-widest uppercase text-blue-400 mb-1">Established</h3>
                            <p className="inter text-xl lg:text-2xl text-gray-200 group-hover:text-blue-400 transition-colors duration-300">2009</p>
                        </div>

                        {/* Data Box 2 */}
                        <div className="group relative pl-8 py-2">
                            <div
                                className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 group-hover:bg-blue-400 transition-colors duration-500"></div>
                            <h3 className="cormorant-garamond text-lg font-black! tracking-widest uppercase text-blue-400 mb-1">Founder</h3>
                            <p className="inter text-2xl text-gray-200 group-hover:text-blue-400 transition-colors duration-300">Kumara
                                Jayakantha</p>
                        </div>

                        {/* Data Box 3 */}
                        <div className="group relative pl-8 py-2">
                            <div
                                className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 group-hover:bg-blue-400 transition-colors duration-500"></div>
                            <h3 className="cormorant-garamond text-lg font-black! tracking-widest uppercase text-blue-400 mb-1">Positioning</h3>
                            <p className="inter text-2xl text-gray-200 group-hover:text-blue-400 transition-colors duration-300">Creative
                                Consultancy</p>
                        </div>

                        {/* Data Box 4 */}
                        <div className="group relative pl-8 py-2">
                            <div
                                className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 group-hover:bg-blue-400 transition-colors duration-500"></div>
                            <h3 className="cormorant-garamond text-lg font-black! tracking-widest uppercase text-blue-400 mb-1">Approach</h3>
                            <p className="inter text-2xl text-gray-200 group-hover:text-blue-400 transition-colors duration-300">Refined
                                & Strategic</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
})

export default About
