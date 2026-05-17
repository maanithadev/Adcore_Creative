import React from "react"

const Whyadcore = React.memo(() => {
    return (
        <div id="whyadcore" className="background2 w-full h-fit px-10 lg:px-15 py-20 flex justify-center">
            <div id="whyadcorebody"
                className="container mx-auto w-full h-full relative flex flex-col justify-center items-center text-center">
                <h2 className="cormorant-garamond heading-color normalTextReveal text-4xl lg:text-5xl mb-7">Why Adcore?</h2>
                <div id="list"
                    className="w-full relative flex flex-col justify-center items-center gap-5 text-left">
                    <div id="item" className="normalTextReveal w-[90%] lg:w-[70%] xl:w-[60%] px-3 lg:px-8 py-3 lg:py-2 flex items-center justify-center gap-5 border-2 bg-[#ECECEC]">
                        <div className="w-20 p-1 rounded-2xl bg-white"><img src="./assets/icons/Why Adcore/Icon_1.png" alt="" className="w-full rounded-2xl" /></div>
                        <p className="inter text-lg">Established in 2009 with enduring industry presence</p>
                    </div>
                    <div id="item" className="normalTextReveal w-[90%] lg:w-[70%] xl:w-[60%] px-3 lg:px-8 py-3 lg:py-2 flex items-center justify-center gap-5 border-2 bg-[#ECECEC]">
                        <div className="w-20 p-1 rounded-2xl bg-white"><img src="./assets/icons/Why Adcore/Icon_2.png" alt="" className="w-full rounded-2xl" /></div>
                        <p className="inter text-lg">Trusted by top-tier advertising agencies</p>
                    </div>
                    <div id="item" className="normalTextReveal w-[90%] lg:w-[70%] xl:w-[60%] px-3 lg:px-8 py-3 lg:py-2 flex items-center justify-center gap-5 border-2 bg-[#ECECEC]">
                        <div className="w-20 p-1 rounded-2xl bg-white"><img src="./assets/icons/Why Adcore/Icon_3.png" alt="" className="w-full rounded-2xl" /></div>
                        <p className="inter text-lg">Elegant creative thinking with strategic depth</p>
                    </div>
                    <div id="item" className="normalTextReveal w-[90%] lg:w-[70%] xl:w-[60%] px-3 lg:px-8 py-3 lg:py-2 flex items-center justify-center gap-5 border-2 bg-[#ECECEC]">
                        <div className="w-20 p-1 rounded-2xl bg-white"><img src="./assets/icons/Why Adcore/Icon_4.png" alt="" className="w-full rounded-2xl" /></div>
                        <p className="inter text-lg">Professional, discreet, and dependable</p>
                    </div>
                    <div id="item" className="normalTextReveal w-[90%] lg:w-[70%] xl:w-[60%] px-3 lg:px-8 py-3 lg:py-2 flex items-center justify-center gap-5 border-2 bg-[#ECECEC]">
                        <div className="w-20 p-1 rounded-2xl bg-white"><img src="./assets/icons/Why Adcore/Icon_5.png" alt="" className="w-full rounded-2xl" /></div>
                        <p className="inter text-lg">Commitment to quality over quantity</p>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Whyadcore
