import React from "react"
import { ImPointRight } from "react-icons/im";

const Philosophy = React.memo(() => {
    return (
        <div id="philosophy" className="background1 w-full h-fit px-10 lg:px-15 py-20 flex justify-center">
            <div id="philosophybody"
                className="container mx-auto w-full h-full relative flex flex-col justify-center items-center text-center gap-[30px]">
                <h2 className="cormorant-garamond heading-color normalTextReveal text-4xl lg:text-5xl">Our Philosophy</h2>
                <p id="para1" className="cormorant-garamond normalTextReveal text-4xl" style={{ fontStyle: "italic" }}>"True creativity does not demand attention-it
                    <br />
                    earns respect."
                </p>
                <p id="para2" className="inter normalTextReveal text-xl">At Adcore, success is measured by impact, longevity, and the
                    quiet
                    confidence of work done
                    well.</p>
                <div id="line" className="normalTextReveal w-[100px] h-[3px] bg-amber-400"></div>
                {/*  flex flex-col items-center justify-center */}
                <div id="mainboxes" className="w-full lg:w-[80%] h-full flex flex-col items-center mx-auto">
                    <h2 className="cormorant-garamond heading-color normalTextReveal text-4xl lg:text-5xl">Our Promise</h2>
                    <div id="boxes"
                        className="w-full h-full grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-1 gap-x-[20px] gap-y-[20px] mt-[20px]">
                        <div id="box" className="normalTextReveal border-2 py-4 flex justify-center items-center gap-3">
                            <ImPointRight className="text-lg hidden sm:block" />
                            <p className="inter text-xl">Creative Concept Development</p>
                        </div>
                        <div id="box" className="normalTextReveal border-2 py-4 flex justify-center items-center gap-3">
                            <ImPointRight className="text-lg hidden sm:block" />
                            <p className="inter text-xl">Advertising Campaigns</p>
                        </div>
                        <div id="box" className="normalTextReveal border-2 py-4 flex justify-center items-center gap-3">
                            <ImPointRight className="text-lg hidden sm:block" />
                            <p className="inter text-xl">Branding & Visual Identity</p>
                        </div>
                        <div id="box" className="normalTextReveal border-2 py-4 flex justify-center items-center gap-3">
                            <ImPointRight className="text-lg hidden sm:block" />
                            <p className="inter text-xl">Copywriting & Content Creation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Philosophy
