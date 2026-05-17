import React, { useState } from "react"
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
            <div id="whatdo" className="background2 w-full h-fit px-6 lg:px-15 py-24 flex justify-center">
                <div id="whatdobody" className="container mx-auto w-full relative flex flex-col justify-center gap-12">
                    <div className="space-y-4 text-center">
                        <h2 className="cormorant-garamond heading-color normalTextReveal text-4xl lg:text-5xl">What We Do
                        </h2>
                        <div className="w-16 h-1 bg-[gold] mx-auto rounded-full"></div>
                        <p id="para" className="inter normalTextReveal text-gray-600 mx-auto lg:w-[55%] text-lg">
                            We offer carefully considered creative services designed to strengthen brands and enhance campaigns.
                        </p>
                    </div>

                    <div id="boxes"
                        className="relative w-full px-6 lg:px-15 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        {boxContents.map((item, idx) => (
                            <WhatdoCards key={idx} id={item.id} title={item.title} description={item.description} clickState={item.clickState} handleClick={handleClick} />
                        ))}
                    </div>
                </div>
            </div>

            {isOpen && <Popup_Images_Gallery index={index} setIsOpen={setIsOpen} />}
        </>
    )
})

export default Whatdo
