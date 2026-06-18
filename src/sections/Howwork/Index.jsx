import React from "react"

const Howwork = React.memo(() => {
    const steps = [
        { id: "01", icon: "1st_Icon.jpeg", text: "We listen with intent." },
        { id: "02", icon: "2nd_Icon.png", text: "We think before we create." },
        { id: "03", icon: "3rd_icon.png", text: "We value consistency and quality." },
        { id: "04", icon: "4th_icon.png", text: "We deliver with reliability and care." },
    ]

    return (
        <div id="howwork" className="w-full h-fit px-6 lg:px-15 py-24 flex justify-center items-center bg-[#0a0a0a] relative overflow-hidden">
            {/* Ambient Dark Mode Glows */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div id="howworkbody" className="container mx-auto w-full h-full relative flex flex-col items-center z-10 gap-14">
                
                {/* Header Section */}
                <div className="text-center">
                    <h2 id="heading"
                        className="cormorant-garamond text-5xl sm:text-6xl lg:text-6xl leading-tight text-white mb-10">
                        How We <span className="italic font-light text-gray-200">Work</span>
                    </h2>
                    <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-10"></div>
                    <p className="inter text-xl font-medium text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        Our approach is measured, collaborative, and respectful of both brand and process.
                    </p>
                </div>

                {/* Bento Grid Section */}
                <div id="boxes" className="w-full max-w-5xl mx-auto relative normalTextReveal">
                    {/* Subtle background glow behind the grid */}
                    <div className="absolute -inset-4 bg-blue-900/10 blur-3xl rounded-[4rem] -z-10 opacity-50 pointer-events-none"></div>
                    
                    {/* The Bento Box */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-blue-900/20 rounded-[2.5rem] overflow-hidden shadow-xl ring-4 ring-blue-500/10">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-[#0a0c10] p-12 sm:p-16 relative group hover:bg-blue-950/20 transition-colors duration-500 flex flex-col items-center justify-center text-center">
                                
                                {/* Top Left Phase Badge */}
                                <div className="absolute top-8 left-8 sm:top-10 sm:left-10">
                                        <span className="text-xs sm:text-sm font-extrabold tracking-widest text-white/20 group-hover:text-blue-400 transition-colors duration-300">
                                        PHASE {step.id}
                                    </span>
                                </div>
                                
                                {/* Icon */}
                                <div className="w-28 h-28 mb-10 relative group-hover:-translate-y-2 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                                    <div className="relative w-full h-full bg-white/10 rounded-full p-3 border border-white/10 flex items-center justify-center">
                                        <img src={`./assets/icons/How We Work/${step.icon}`} alt={step.text} className="w-full h-full object-cover rounded-full" />
                                    </div>
                                </div>
                                
                                {/* Text */}
                                <h3 className="inter text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                                    {step.text}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Quote */}
                <div className="normalTextReveal max-w-4xl mx-auto text-center relative">
                    <p id="outboxp" className="cormorant-garamond text-gray-200 text-3xl md:text-4xl lg:text-5xl font-medium leading-snug italic">
                        "This philosophy allows us to integrate smoothly into agency environments while maintaining our own creative standards."
                    </p>
                </div>

            </div>
        </div>
    )
})

export default Howwork
