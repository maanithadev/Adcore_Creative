import React from "react"

const Worktogether = React.memo(() => {
    return (
        <div id="worktogether" className="w-full h-fit px-6 lg:px-10 py-24 flex justify-center bg-[#0a0a0a] relative overflow-hidden">
            
            {/* Ambient Background Glow matching the dark theme */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-900/20 blur-[150px] pointer-events-none -z-10"></div>
            
            {/* Vibrant Floating Island Container */}
            <div id="worktogetherbody" className=" container mx-auto w-full max-w-6xl relative z-10 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-[3rem] p-10 sm:p-16 lg:p-24 text-center shadow-[0_20px_50px_rgba(37,99,235,0.25)] overflow-hidden flex flex-col items-center group">
                
                {/* Decorative Background Elements inside the island */}
                <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-white/10 blur-3xl rounded-full pointer-events-none group-hover:scale-105 transition-transform duration-1000 ease-out"></div>
                <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-blue-400/20 blur-3xl rounded-full pointer-events-none group-hover:scale-105 transition-transform duration-1000 ease-out"></div>

                <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
                    
                    <span className="uppercase tracking-[0.2em] text-sm sm:text-lg font-medium text-blue-200/80 mb-6 normalTextReveal">
                        Ready for the next step?
                    </span>
                    
                    <h2 className="cormorant-garamond normalTextReveal text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                        Let's Work Together
                    </h2>
                    
                    <p className="inter normalTextReveal text-lg sm:text-xl lg:text-xl text-blue-100 mb-14 font-normal leading-relaxed max-w-3xl">
                        For agencies seeking a refined creative partner or brands looking for thoughtful and enduring communication, Adcore offers clarity, creativity, and care.
                    </p>
                    
                    <a href="https://wa.me/0772210022?text=testing" target="_blank" rel="noopener noreferrer" 
                       className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-10 py-5 sm:px-14 sm:py-6 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] active:scale-95">
                        <span className="relative text-blue-700 font-bold tracking-widest text-base sm:text-base inter z-10">
                            START A CONVERSATION
                        </span>
                        {/* Hover glow effect for the button */}
                        {/*<div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-full"></div>*/}
                    </a>
                    
                    <p className="inter normalTextReveal text-base sm:text-base text-blue-200/70 mt-8 font-semibold tracking-wide">
                        Contact us to discuss your next project
                    </p>
                </div>

            </div>
        </div>
    )
})

export default Worktogether
