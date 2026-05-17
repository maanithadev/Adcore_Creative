import React from "react"

const Essence = React.memo(() => {
    return (
        <div id="essence" className="background1 w-full h-fit px-10 lg:px-15 py-15 flex justify-center ">
            <div id="essencebody" className="container mx-auto lg:w-[80%] h-full relative flex flex-col justify-center items-center text-center gap-8">
                <h2 className="cormorant-garamond heading-color normalTextReveal text-4xl lg:text-5xl font-light">Our Essence</h2>
                <p id="firstpara" className="cormorant-garamond normalTextReveal xl:w-[90%] text-5xl leading-15" style={{ fontStyle: "italic" }}>
                    "Adcore is built on the belief that great communication should feel effortless yet be strategically
                    precise."
                </p>
                <div className="normalTextReveal w-20 h-1 bg-amber-400"></div>
                <p id="secondpara" className="inter normalTextReveal xl:w-[90%] text-xl font-normal leading-relaxed">
                    We operate with discretion, professionalism, and respect for the craft-working seamlessly alongside
                    agencies and brands to elevate ideas from concept to execution.
                </p>
                <p id="thirdpara" className="cormorant-garamond normalTextReveal text-5xl">
                    Creativity, for us, is not excess. It is balanced.
                </p>
            </div>
        </div>
    )
})

export default Essence
