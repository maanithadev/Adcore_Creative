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

const App = () => {

  return (
    <div className="mx-auto relative z-0">
      <Header />
      <Hero />
      <Video />
      <About />
      <SliderContainer />
      <Essence />
      <Whatdo />
      <ImageGrid />
      <Howwork />
      <Whyadcore />
      <Philosophy />
      <FounderNote />
      <Worktogether />
      <Footer />

      <HoveringIcons />
    </div>
  )
}

export default App
