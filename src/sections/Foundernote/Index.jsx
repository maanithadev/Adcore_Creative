import React from "react"

const FounderNote = React.memo(() => {
    return (
        <div id="foundernote" className="w-full h-fit py-24 flex justify-center bg-[#0a0a0a] relative overflow-hidden">
            {/* Ambient Dark Mode Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div id="sides" className="container mx-auto px-6 lg:px-10 max-w-7xl flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">
                
                {/* Image Section */}
                <div id="founderimg" className="w-full lg:w-5/12 relative group normalTextReveal">
                    {/* Decorative background cards behind image */}
                    <div className="absolute inset-0 bg-white/5 rounded-[2.5rem] -rotate-3 scale-[1.03] -z-10 group-hover:-rotate-2 transition-transform duration-700 ease-out"></div>
                    <div className="absolute inset-0 bg-blue-500/10 rounded-[2.5rem] rotate-3 scale-[1.03] -z-10 group-hover:rotate-1 transition-transform duration-700 ease-out"></div>
                    
                    {/* Main Image Container */}
                    <div className="relative w-full aspect-square sm:aspect-[4/5] lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
                        <img src="./assets/comapny specific/founder.png" alt="Founder"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                        {/* Overlay gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60"></div>
                    </div>
                </div>

                {/* Text Section */}
                <div id="foundernotebody" className="w-full lg:w-7/12 relative flex flex-col justify-center text-left normalTextReveal">
                    
                    {/* Massive background quote mark */}
                    <div className="absolute -top-16 -left-8 sm:-left-12 text-[12rem] sm:text-[18rem] leading-none font-serif text-white/5 select-none pointer-events-none -z-10">
                        "
                    </div>

                    <h2 id="heading"
                        className="cormorant-garamond text-5xl sm:text-6xl lg:text-6xl leading-tight text-white mb-10">
                        Founder's <span className="italic font-light text-gray-200">Note</span>
                    </h2>

                    <div
                        className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 lg:from-blue-400 to-transparent mx-auto lg:mx-0 mb-10"></div>
                    
                    <div className="space-y-6 relative z-10">
                        <p className="cormorant-garamond text-4xl sm:text-4xl lg:text-4xl xl:text-4xl leading-tight text-gray-100 italic mb-8">
                            "I founded Adcore with a simple belief: that creativity should be thoughtful, disciplined, and meaningful."
                        </p>

                        <p className="inter text-lg sm:text-xl leading-relaxed font-medium text-gray-400">
                            In an industry often driven by speed and noise, we chose a quieter path — one that values insight, refinement, and long-term relevance.
                        </p>
                        
                        <p className="inter text-lg sm:text-xl leading-relaxed font-medium text-gray-400">
                            Over the years, Adcore has had the privilege of collaborating with some of Sri Lanka's finest advertising minds and agencies. Each project reinforces our commitment to quality, discretion, and creative integrity.
                        </p>
                        
                        <p className="inter text-lg sm:text-xl leading-relaxed font-medium text-blue-400 mt-6">
                            At Adcore, we do not chase trends. We focus on work that lasts.
                        </p>
                    </div>

                    {/* Signature Block */}
                    <div className="mt-14 pt-8 border-t border-white/10">
                        <h4 className="cormorant-garamond text-3xl font-medium text-white mb-1">
                            Kumara Jayakantha
                        </h4>
                        <p className="inter text-sm font-medium tracking-widest text-gray-500 uppercase">
                            Founder | Adcore Creative (Pvt) Ltd
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
})

export default FounderNote
