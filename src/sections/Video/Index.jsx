import React, {useRef} from "react"
import {FaRegPlayCircle} from "react-icons/fa";
import {FaRegPauseCircle} from "react-icons/fa";

const Video = React.memo(() => {

    const videoURL = "./assets/videos/video.mp4"

    const whitePlayRef = useRef(null)
    const playRef = useRef(null)
    const pauseRef = useRef(null)
    const videoRef = useRef(null)

    function handlewhitePlay() {
        whitePlayRef.current.style.display = 'none';
        playRef.current.style.display = 'none';
        pauseRef.current.style.display = 'block';
        videoRef.current.play();
    }

    function handlePlay() {
        playRef.current.style.display = 'none';
        pauseRef.current.style.display = 'block';
        videoRef.current.play();
    }

    function handlePause() {
        pauseRef.current.style.display = 'none';
        playRef.current.style.display = 'block';
        videoRef.current.pause();
    }

    return (
        <div id="video" className="relative w-full h-screen p-3">
            <video src={videoURL} ref={videoRef} className="w-full h-full object-cover mx-auto rounded-2xl" loop
                   muted></video>
            <div id="icons" className="absolute z-20 flex justify-center left-10 bottom-10 lg:left-15 lg:bottom-15">
                <div ref={whitePlayRef} onClick={handlewhitePlay}>
                    <FaRegPlayCircle className="text-7xl text-white"/>
                </div>
                <div ref={playRef} onClick={handlePlay}>
                    <FaRegPlayCircle className="text-7xl"/>
                </div>
                <div ref={pauseRef} onClick={handlePause} className="hidden">
                    <FaRegPauseCircle className="text-7xl"/>
                </div>
            </div>
        </div>
    )
})

export default Video
