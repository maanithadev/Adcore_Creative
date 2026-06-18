import React, {useState} from "react"
import Popup_Images_Gallery from "../../components/popup_images_gallery/Index"
import WhatdoCards from "../../components/WhatdoCards/Index"

const Whatdo = React.memo(() => {

    const boxContents = [
        {
            id: 1,
            title: "Creative Concept Development",
            description: "Thoughtful ideas rooted in insight and strategy.",
            clickState: true
        },
        {
            id: 2,
            title: "Advertising Campaigns",
            description: "Integrated ATL, BTL, and digital communication with coherence and purpose.",
            clickState: true
        },
        {
            id: 3,
            title: "Branding & Visual Identity",
            description: "Distinctive brand systems with timeless appeal.",
            clickState: true
        },
        {
            id: 4,
            title: "Copywriting & Content Creation",
            description: "Language that is refined, persuasive, and culturally resonant.",
            clickState: false
        },
        {
            id: 5,
            title: "Design & Artwork",
            description: "Elegant visuals executed with precision and attention to detail.",
            clickState: true
        },
        {
            id: 6,
            title: "Agency Creative Support",
            description: "Confidential, dependable collaboration for leading agencies across Sri Lanka.",
            clickState: true
        },
    ]

    const [isOpen, setIsOpen] = useState(false)
    const [index, setIndex] = useState(null)

    function handleClick(id) {
        setIndex(id)
        setIsOpen(true)
    }

    return (
        <>
            <div id="whatdo"
                 className="w-full h-fit px-6 lg:px-15 py-24 flex justify-center bg-[#0a0a0a] relative overflow-hidden">
                {/* Ambient Dark Mode Glows */}
                <div
                    className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none"></div>
                <div
                    className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div id="whatdobody"
                     className="container mx-auto w-full relative flex flex-col justify-center gap-13 z-10">
                    <div className="text-center normalTextReveal">
                        <h2 id="heading"
                            className="cormorant-garamond text-5xl sm:text-6xl lg:text-6xl leading-tight text-white mb-10">
                            What We <span className="italic font-light text-gray-200">Do</span>
                        </h2>
                        <div
                            className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-10"></div>
                        <p id="para"
                           className="inter text-xl font-medium text-gray-400 leading-relaxed lg:w-[55%] mx-auto">
                            We offer carefully considered creative services designed to strengthen brands and enhance
                            campaigns.
                        </p>
                    </div>

                    <div id="boxes"
                         className="relative w-full px-6 lg:px-15 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        {boxContents.map((item, idx) => (
                            <WhatdoCards key={idx} id={item.id} title={item.title} description={item.description}
                                         clickState={item.clickState} handleClick={handleClick}/>
                        ))}
                    </div>
                </div>
            </div>

            {isOpen && <Popup_Images_Gallery index={index} setIsOpen={setIsOpen}/>}
        </>
    )
})

export default Whatdo
