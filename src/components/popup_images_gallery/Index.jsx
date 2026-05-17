import { createPortal } from "react-dom"
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import data from "../../assets/popup_images_links/data.json"

const Popup_Images_Gallery = ({ index, setIsOpen }) => {

    const [colCount, setColCount] = useState(null)
    const [title, setTitle] = useState(null)
    const [itemData, setItemData] = useState([])

    useEffect(() => {
        function handleWidth() {
            if (window.innerWidth <= 640) {
                setColCount(1)
            } else if (window.innerWidth <= 768) {
                setColCount(2)
            } else if (window.innerWidth <= 1023) {
                setColCount(3)
            } else {
                setColCount(4)
            }
        }
        window.addEventListener("DOMContentLoaded", handleWidth())

        function fetchImages() {
            const foundArray = data.filter(item => item.id === index)
            setItemData(foundArray[0].images)
            setTitle(foundArray[0].title)
        }

        fetchImages()

        return () => window.removeEventListener("DOMContentLoaded", handleWidth)
    }, [])

    const popup_images_gallery = document.querySelector("#popup_images_gallery")

    return createPortal(
        <div id="crd-gallery-container">
            <div className="bg-black fixed z-50 w-full h-screen p-10 top-0 left-0">
                <div className="text-white mx-auto w-full h-full">
                    <div className="flex justify-between w-full h-fit">
                        <h1 className="cormorant-garamond underline underline-offset-8 text-3xl">{title}</h1>
                        <IoIosCloseCircleOutline className="text-4xl cursor-pointer" onClick={() => setIsOpen(false)} />
                    </div>
                    <div className="mt-7 w-full h-screen lg:h-[90%] max-lg:h-[80%] overflow-x-hidden">
                        <Box>
                            <ImageList variant="masonry" cols={colCount} gap={8}>
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${item.img}?w=248&fit=crop&auto=format`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Box>
                    </div>
                </div>
            </div>
        </div>,
        popup_images_gallery
    )
}

export default Popup_Images_Gallery
