import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(useGSAP, ScrollTrigger)

const SliderContainer = () => {

     useGSAP(() => {
          gsap.to("#images", {
               transform: "translateX(-200%)",
               repeat: -1,
               ease: "none",
               duration: 30,
               scrollTrigger: {
                    trigger: "#sliderContainer",
                    scroller: "body",
                    start: "top 60%"
               }
          })
     })

     return (
          <div id="sliderContainer" className="mx-auto w-full h-fit bg-white px-10 lg:px-15 py-15 overflow-x-hidden">
               <div className="container mx-auto overflow-x-hidden flex flex-col items-center justify-center gap-10">
                    <div id="images" className="relative flex items-center justify-start gap-10">
                         <img src="/assets/comapny specific/sliderLogos/17 x 17 logo.webp" alt="Mountain landscape"
                              className="w-40 h-fit" />
                         <img src="/assets/comapny specific/sliderLogos/Avenir  Logol.webp" alt="Forest path"
                              className="w-70 h-fit object-cover" />
                         <img src="/assets/comapny specific/sliderLogos/HAPPY CART_page-0001.webp" alt="Desert sunset"
                              className="w-70 h-fit object-cover" />
                         <img src="/assets/comapny specific/sliderLogos/James Taylor_page-0001.webp" alt="Lake view"
                              className="w-70 h-fit object-cover" />
                         <img src="/assets/comapny specific/sliderLogos/Jana Tea Logo.webp" alt="Ocean waves"
                              className="w-70 h-fit object-cover" />
                         <img src="/assets/comapny specific/sliderLogos/Kuru Gaga.webp" alt="Mountain landscape"
                              className="w-30 h-fit object-cover" />
                         <img src="/assets/comapny specific/sliderLogos/lankaora_page-0001.webp" alt="Forest path"
                              className="w-70 h-fit object-cover" />
                         <img src="/assets/comapny specific/sliderLogos/Orange Logo-1.webp" alt="Desert sunset"
                              className="w-70 h-fit object-cover" />
                         <img src="/assets/comapny specific/sliderLogos/Polychorme.webp" alt="Lake view"
                              className="w-70 h-fit object-cover" />
                         <img src="/assets/comapny specific/sliderLogos/Robialack (1).webp" alt="Ocean waves"
                              className="w-70 h-fit object-cover" />
                         <img src="/assets/comapny specific/sliderLogos/Royal Logo.webp" alt="Forest path"
                              className="w-70 h-fit object-cover" />
                         <img src="/assets/comapny specific/sliderLogos/SPAR LOGO 8 x 23.webp" alt="Desert sunset"
                              className="w-70 h-fit object-cover" />
                         <img src="/assets/comapny specific/sliderLogos/Sunny Feel Logo.webp" alt="Lake view"
                              className="w-70 h-fit object-cover" />
                         <img src="/assets/comapny specific/sliderLogos/Synergy Logo.webp" alt="Ocean waves"
                              className="w-70 h-fit object-cover" />
                    </div>
               </div>
          </div>
     )
}

export default SliderContainer
