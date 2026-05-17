import React from "react"

const Howwork = React.memo(() => {
    return (
        <div id="howwork" className="background1 w-full h-fit px-10 lg:px-15 py-20 flex justify-center items-center">
            <div id="howworkbody"
                className="container mx-auto w-full h-full relative flex flex-col justify-center items-center text-center">
                <h2 className="cormorant-garamond heading-color normalTextReveal text-4xl lg:text-5xl">How We Work</h2>
                <p className="inter normalTextReveal mt-2 mb-5 text-gray-600 mx-auto text-lg">Our approach is measured, collaborative, and respectful of
                    both
                    brand and
                    process.</p>
                <div id="boxes" className="w-full h-fit mt-5 grid grid-cols-1 md:grid-cols-4 items-start gap-10 md:gap-0">
                    <div className="box flex flex-col justify-center items-center gap-2 md:gap-4">
                        <div className="normalTextReveal w-[20%] md:w-[40%] p-2 bg-white flex justify-center items-center rounded-full">
                            <img src="./assets/icons/How We Work/1st_Icon.jpeg" alt="" className="w-full rounded-full" />
                        </div>
                        <p className="inter subheading-color normalTextReveal text-lg px-3 lg:w-60">We listen with intent.</p>
                    </div>
                    <div className="box flex flex-col justify-center items-center gap-2 md:gap-4">
                        <div className="normalTextReveal w-[20%] md:w-[40%] p-2 bg-white flex justify-center items-center rounded-full">
                            <img src="./assets/icons/How We Work/2nd_Icon.png" alt="" className="w-full rounded-full" />
                        </div>
                        <p className="inter subheading-color normalTextReveal text-lg px-3 lg:w-60">We think before we create.</p>
                    </div>
                    <div className="box flex flex-col justify-center items-center gap-2 md:gap-4">
                        <div className="normalTextReveal w-[20%] md:w-[40%] p-2 bg-white flex justify-center items-center rounded-full">
                            <img src="./assets/icons/How We Work/3rd_icon.png" alt="" className="w-full rounded-full" />
                        </div>
                        <p className="inter subheading-color normalTextReveal text-lg px-3 lg:w-60">We value consistency and quality.</p>
                    </div>
                    <div className="box flex flex-col justify-center items-center gap-2 md:gap-4">
                        <div className="normalTextReveal w-[20%] md:w-[40%] p-2 bg-white flex justify-center items-center rounded-full">
                            <img src="./assets/icons/How We Work/4th_icon.png" alt="" className="w-full rounded-full" />
                        </div>
                        <p className="inter subheading-color normalTextReveal text-lg px-3 lg:w-60">We deliver with reliability and care.</p>
                    </div>
                </div>
                <p id="outboxp" className="cormorant-garamond normalTextReveal lg:w-[70%] mt-7 text-2xl">This philosophy allows us to integrate smoothly into agency environments while maintaining our own creative standards.</p>
            </div>
        </div>
    )
})

export default Howwork
