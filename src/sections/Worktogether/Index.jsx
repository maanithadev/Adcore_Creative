import React from "react"

const Worktogether = React.memo(() => {
    return (
        <div id="worktogether" className="background3 text-white w-full h-fit px-15 py-15 lg:py-30 flex justify-center bg-yellow-400">
            <div id="worktogetherbody"
                className="container mx-auto w-full h-full relative flex flex-col justify-center items-center text-center gap-[25px]">
                <h2 className="cormorant-garamond normalTextReveal text-4xl lg:text-5xl">Let's Work Together</h2>
                <p className="inter normalTextReveal lg:px-50 mb-5 text-2xl">For agencies seeking a refined creative partner or brands
                    looking
                    for
                    thoughtful and
                    enduring
                    communication, Adcore offers clarity, creativity, and care.</p>
                <a href="https://wa.me/0772210022?text=testing" target="_blank" id="btn"
                    className="decoration-0 text-white border-2 border-solid border-white px-8 py-4 rounded-lg w-fit">
                    <h2 className="inter normalTextReveal text-xl">START A CONVERSATION</h2>
                </a>
                <p className="inter normalTextReveal text-xl">Contact us to discuss your next project</p>
            </div>
        </div>
    )
})

export default Worktogether
