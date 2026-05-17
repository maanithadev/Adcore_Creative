import React from "react"

const About = React.memo(() => {
    return (
        <div id="about" className="background1 w-full h-fit px-10 lg:px-15 py-15 flex justify-center ">
            <div id="aboutbody" className="container mx-auto relative w-full h-full">
                <h2 id="heading" className="cormorant-garamond heading-color normalTextReveal mb-7 text-center text-4xl lg:text-5xl font-light">
                    About Adcore Creative</h2>
                <div id="sides" className="flex max-lg:flex-col justify-center">
                    <div id="left" className="lg:w-[64%] w-full h-fit">
                        <p className="inter normalTextReveal text-justify text-xl leading-relaxed">Founded in 2009 by
                            Kumara Jayakantha, Adcore
                            (Private) Limited
                            is an advertising agency shaped by refined thinking, creative discipline, and a
                            profound understanding of brand communication<br /><br />

                            Over the years, Adcore has become a trusted creative partner to several of
                            Sri Lanka's leading advertising agencies, delivering work that is intelligent
                            tasteful, and effective. We believe true creativity lies not in noise, but in
                            clarity, relevance, and executional excellence.
                        </p>
                    </div>
                    <div id="right" className="lg:w-[30%] w-full h-fit mt-8 lg:mt-0 lg:ml-18 flex flex-col gap-7">
                        <div id="box" className="border-l-3 pl-3">
                            <h3 className="cormorant-garamond heading-color normalTextReveal text-xl leading-relaxed">
                                ESTABLISHED</h3>
                            <p className="inter normalTextReveal text-lg">2009</p>
                        </div>
                        <div id="box" className="border-l-3 pl-3">
                            <h3 className="cormorant-garamond heading-color normalTextReveal text-xl leading-relaxed">
                                FOUNDER</h3>
                            <p className="inter normalTextReveal text-lg">Kumara Jayakantha</p>
                        </div>
                        <div id="box" className="border-l-3 pl-3">
                            <h3 className="cormorant-garamond heading-color normalTextReveal text-xl leading-relaxed">
                                POSITIONING</h3>
                            <p className="inter normalTextReveal text-lg">Creative Consultancy</p>
                        </div>
                        <div id="box" className="border-l-3 pl-3">
                            <h3 className="cormorant-garamond heading-color normalTextReveal text-xl leading-relaxed">
                                APPROACH</h3>
                            <p className="inter normalTextReveal text-lg">Refined & Strategic</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default About
