import React from "react"
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const FounderNote = React.memo(() => {
    return (
        <div id="foundernote" className="background2 w-full h-fit px-10 lg:px-15 py-20 flex justify-center">
            <div id="sides" className="container mx-auto w-full h-full flex max-lg:flex-col justify-center items-center ">
                <div id="founderimg" className="lg:w-[35%] sm:w-[55%] max-sm:w-[85%] h-full flex justify-center">
                    <img src="./assets/comapny specific/founder.png" alt=""
                        className="normalTextReveal w-[80%] h-[80%] rounded-[50%] max-lg:mb-5" />
                </div>
                <div id="foundernotebody"
                    className="lg:w-[65%] w-full h-full relative flex flex-col justify-center text-left gap[30px]">
                    <div className="normalTextReveal flex justify-center items-top gap-3">
                        <BiSolidQuoteAltLeft className="text-4xl mt-1 lg:mt-2" />
                        <h2 className="cormorant-garamond heading-color text-center mb-3 text-4xl lg:text-5xl">Founder's Note</h2>
                    </div>
                    <p className="inter normalTextReveal message text-justify lg:text-left text-lg">I founded Adcore with a simple belief: that creativity should be thoughtful, disciplined, and meaningful. In an industry often driven by speed and noise, we chose a quieter path- one that values insight, refinement, and long-term relevance.
                        <br /><br />
                        Over the years, Adcore has had the privilege of collaborating with some of Sri Lanka's finest advertising minds and agencies. Each project reinforces our commitment to quality, discretion, and creative integrity.
                        <br /><br />
                        At Adcore, we do not chase trends. We focus on work that lasts.
                    </p>
                    <div className="normalTextReveal w-full h-1 bg-black my-3"></div>
                    <p className="inter subheading-color normalTextReveal text-lg">- Kumara Jayakantha</p>
                    <p className="inter subheading-color normalTextReveal text-lg">Founder | ADCORE CREATIVE (PVT) Ltd</p>
                </div>
            </div>
        </div>
    )
})

export default FounderNote
