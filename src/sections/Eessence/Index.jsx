import React from "react"

const Essence = React.memo(() => {
    return (
        <div id="essence" className="w-full h-fit py-24 flex justify-center bg-[#0a0a0a] relative overflow-hidden">
            {/* Ambient Dark Mode Glows using Blue */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>

            {/*container mx-auto px-6 lg:px-15 relative z-10 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16 lg:gap-10*/}
            <div id="essencebody"
                 className="container mx-auto px-6 lg:px-15 relative z-10 flex flex-col lg:flex-row justify-between items-center lg:items-between">
            {/*<div id="essencebody"*/}
            {/*    className="container mx-auto w-full h-full px-6 lg:px-15 relative z-10 flex flex-col lg:flex-row justify-between items-center lg:items-between gap-20">*/}
                
                {/* Left Side: The Quote */}
                <div className="w-full lg:w-5/12 lg:pl-15 flex flex-col justify-center text-center lg:text-left normalTextReveal">
                    <div className="inline-flex items-center justify-center lg:justify-start space-x-4 mb-8">
                        <h2 id="heading"
                            className="cormorant-garamond text-5xl sm:text-6xl lg:text-6xl leading-tight text-white">
                            Our <span className="italic font-light text-gray-200">Essence</span>
                        </h2>
                    </div>

                    <div
                        className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 lg:from-blue-400 to-transparent mx-auto lg:mx-0 mb-10"></div>

                    <div className="relative mb-10">
                        {/* Decorative Large Quote */}
                        {/*<span className="absolute -top-12 -left-4 lg:-left-12 text-[8rem] lg:text-[12rem] text-white/5 font-serif leading-none select-none pointer-events-none">"</span>*/}
                        {/*text-xl lg:text-2xl*/}
                        <h3 id="firstpara" className="cormorant-garamond text-4xl sm:text-5xl lg:text-5xl xl:text-5xl leading-tight relative z-10 text-white">
                            <span className="italic font-light text-gray-200">Adcore is built on the belief that great communication should feel effortless —</span><br/>
                            <span className="font-medium text-blue-400 mt-3 block">yet be strategically precise.</span>
                        </h3>
                    </div>

                    {/*<div className="w-24 h-[2px] bg-gradient-to-r from-blue-400 to-transparent mx-auto lg:mx-0"></div>*/}
                </div>

                {/* Vertical Divider for Desktop */}
                {/*<div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>*/}

                {/* Right Side: Paragraphs */}
                <div className="w-full lg:w-6/12 lg:pr-25 flex flex-col justify-center mt-10 lg:mt-0 normalTextReveal text-center lg:text-left">
                    <p id="secondpara" className="inter text-xl text-gray-400 leading-relaxed font-medium mb-9 mx-auto lg:mx-0">
                        We operate with discretion, professionalism, and respect for the craft-working seamlessly alongside agencies and brands to elevate ideas from concept to execution.
                    </p>
                    
                    {/* Final Sentence with elegant left border */}
                    <div className="pl-0 lg:pl-6 border-l-0 lg:border-l-2 border-blue-500/50">
                        <p id="thirdpara" className="cormorant-garamond text-4xl sm:text-5xl lg:text-5xl xl:text-5xl text-white font-medium leading-snug">
                            Creativity, for us, is <span className="italic text-gray-400 font-black">not excess</span>.<br className="hidden sm:block mt-2"/>
                            It is <span className="text-blue-400 font-bold italic tracking-wider">balanced.</span>
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
})

export default Essence
