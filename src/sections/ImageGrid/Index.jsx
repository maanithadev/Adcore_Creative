import React from "react"

const ImageGrid = React.memo(() => {
    return (
        <div id="imageGrid" className="w-full h-fit max-lg:hidden">
            <div className="w-full h-full grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-4">
                <div className="w-full h-full">
                    <img src="./assets/images/photo-1761839258657-457dda39b5cc.jpg" alt=""
                            className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-full grid lg:grid-cols-2 lg:grid-rows-2">
                    <div className="w-full h-full">
                        <img src="./assets/images/photo-1761839258657-457dda39b5cc.jpg" alt=""
                            className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-full">
                        <img src="./assets/images/photo-1761839258657-457dda39b5cc.jpg" alt=""
                            className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-full">
                        <img src="./assets/images/photo-1761839258657-457dda39b5cc.jpg" alt=""
                            className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-full">
                        <img src="./assets/images/photo-1761839258657-457dda39b5cc.jpg" alt=""
                            className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="w-full h-full grid grid-cols-2 grid-rows-2">
                    <div className="w-full h-full"><img src="./assets/images/photo-1761839258657-457dda39b5cc.jpg" alt=""
                        className="w-full h-full object-cover" /></div>
                    <div className="w-full h-full"><img src="./assets/images/photo-1761839258657-457dda39b5cc.jpg" alt=""
                        className="w-full h-full object-cover" /></div>
                    <div className="w-full h-full"><img src="./assets/images/photo-1761839258657-457dda39b5cc.jpg" alt=""
                        className="w-full h-full object-cover" /></div>
                    <div className="w-full h-full"><img src="./assets/images/photo-1761839258657-457dda39b5cc.jpg" alt=""
                        className="w-full h-full object-cover" /></div>
                </div>
                <div className="w-full h-full">
                    <img src="./assets/images/photo-1761839258657-457dda39b5cc.jpg" alt=""
                        className="w-full h-full object-cover" />
                </div>
                <div></div>
            </div>
        </div>
    )
})

export default ImageGrid
