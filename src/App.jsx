import About from "./sections/About/Index"
import Essence from "./sections/Eessence/Index"
import Header from "./sections/Header/Index"
import Hero from "./sections/Hero/Index"
import Howwork from "./sections/Howwork/Index"
import Video from "./sections/Video/Index"
import Whatdo from "./sections/Whatdo/Index"
import Whyadcore from "./sections/Whyadcore/Index"
import Philosophy from "./sections/Philosophy/Index"
import FounderNote from "./sections/Foundernote/Index"
import Worktogether from "./sections/Worktogether/Index"
import Footer from "./sections/Footer/Index"
import ImageGrid from "./sections/ImageGrid/Index"
import HoveringIcons from "./components/hoveringIcons/Index"
import SliderContainer from "./sections/SliderContainer/Index"
import {useEffect, useState} from "react";

const App = () => {

    const [scrolled, setScrolled] = useState(null);
    const [headerScrolled, setHeaderScrolled] = useState(true);

    useEffect(() => {
        const handleScroll = () => window.scrollY > 700 ? setScrolled(true) : setScrolled(false);
        window.addEventListener("scroll", handleScroll)

        const handleHeaderScroll = () => window.scrollY < 40 ? setHeaderScrolled(true) : setHeaderScrolled(false)
        window.addEventListener("scroll", handleHeaderScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("scroll", handleHeaderScroll)
        }
    }, []);

    return (
        <div className="mx-auto relative z-0 overflow-x-hidden cursor-default">
            <Header headerScrolled={headerScrolled}/>
            <Hero/>
            <Video/>
            <About/>
            <SliderContainer/>
            <Essence/>
            <Whatdo/>
            <ImageGrid/>
            <Howwork/>
            <Whyadcore/>
            <Philosophy/>
            <FounderNote/>
            <Worktogether/>
            <Footer/>

            <HoveringIcons scrolled={scrolled} />
        </div>
    )
}

export default App
