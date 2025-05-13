import { Link } from "react-router-dom"
import { LandingData } from "../constants"
import { useEffect, useState } from "react"
import cn from "../utils/cn"

const TemplateCarousel = () => {
    const tempList = LandingData.templates.templateList
    const totalTemp = tempList.length;
    const [activeIndex, setActiveIndex] = useState(1);

    const goToPrevious = () => activeIndex > 1 ? setActiveIndex(activeIndex-1): setActiveIndex(5)
    const goToNext = () => activeIndex != totalTemp ? setActiveIndex(activeIndex+1): setActiveIndex(1)
    const goToSlide = (index) =>  setActiveIndex(index)
    const getVisibleItems = () => {
        if(tempList.length === 0) []
        const visibleInd = [];
        const offset = Math.floor(totalTemp / 2);
        for(let i = -offset; i <= offset; i++){
            let index = activeIndex + i % totalTemp;
            console.log(index)
            if(index < 0){
                index = totalTemp + index;
            }else if(index > totalTemp){
                index = index - totalTemp
            }
            visibleInd.push({
                id: index,
                position: i,
                img: tempList[index].img
            })
        }
        return visibleInd
    }
    useEffect(() => console.log(getVisibleItems()),[activeIndex])

  return (
    <div className="max-w-6xl mx-auto px-4 py-4 overflow-hidden">
      <div className="relative h-96 md:h-[42rem] py-8">
                <div className="flex items-center justify-center h-full">
                    {getVisibleItems().map((temp) => {
                        const distance = Math.abs(activeIndex - temp.id);
                        const isActive = temp.id === activeIndex
                        const absPosition = Math.abs(temp.position)
                        return (
                            <div key={temp.id}
                                className={`absolute transition-all duration-300 ease-in-out ${isActive ? 'z-20': distance === 1 ? 'z-10': 'z-0'}`}
                                style={{
                                    transform: isActive
                                        ? 'scale(1) translateZ(0px)'
                                        : temp.position < 0
                                            ? `scale(${0.9 - absPosition * 0.05}) translateX(-${absPosition * 60}%) translateZ(-100px)`
                                            : `scale(${0.9 - absPosition * 0.05}) translateX(${absPosition * 60}%) translateZ(-100px)`,
                                }}
                            >
                                <img className={cn("w-64 h-80 object-contain md:w-96 md:h-[36rem] rounded-2xl",
                                    isActive ? "ring-4 ring-blue-800": '')} src={temp.img} alt={`Template ${temp.id}`}/>
                            </div>
                        )
                    })}
                    </div>
                    <div className="bg-white w-full absolute bottom-0">
                        <button className="text-xl px-2 py-2" onClick={goToPrevious}>
                            -
                        </button>
                        <button className="text-xl py-2 px-2" onClick={goToNext}>
                            +
                        </button>
                    </div>
                </div>
      </div>
    );
}
const LandingPage = () => {
  return (
        <div className="w-full">
            <section className="my-10 max-w-7xl w-full mx-auto px-8 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="flex flex-col lg:w-full max-w-xl items-start justify-center gap-y-8">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-pretty tracking-wide font-extrabold lg:leading-14 md:leading-11 leading-8">
                            {LandingData.hero.headline}
                        </h3>
                        <p className="text-lg md:text-xl text-neutral-600">
                            {LandingData.hero.subheadline}
                        </p>
                        <div className="space-y-3">
                            <button className="px-7 py-4 bg-blue-700 text-white text-lg font-semibold rounded tracking-wide">
                                <Link to={LandingData.hero.ctaButton.url}>
                                    {LandingData.hero.ctaButton.text}
                                </Link>
                            </button>
                            <div className="flex items-center justify-center gap-2 bg-blue-100 px-3 py-2 rounded-4xl">
                                <img src={LandingData.hero.supportingInfo.img} alt="trust" className="w-6 h-6"/>
                                <span className="text-sm md:text-md lg:text-lg tracking-wide text-neutral-500">
                                    {LandingData.hero.supportingInfo.text}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </section>
            <section className="bg-neutral-800 w-full">
                <div className="py-8 px-8 max-w-7xl mx-auto w-full">
                    <div className="flex flex-col items-center justify-center gap-y-3 max-w-2xl mx-auto text-center">
                        <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white">
                            {LandingData.templates.heading}
                        </h3>
                        <p className="lg:text-lg xl:text-xl text-gray-300">
                            {LandingData.templates.subheading}
                        </p>
                    </div>
                    <div>
                        <TemplateCarousel/>
                    </div>
                </div>
            </section>
            <section className="my-10 max-w-7xl w-full mx-auto px-8 py-6">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-8">
                    {LandingData.features.heading}
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
                        {LandingData.features.featureList.map((feature) => (
                            <div className="flex flex-col items-start justify-center gap-3">
                                <h5 className="font-semibold tracking-wide">
                                    {feature.title}
                                </h5>
                                <p className="text-neutral-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div>
                        image here
                    </div>
                </div>
            </section>
            <section className="my-10 max-w-7xl w-full mx-auto px-8 py-6">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center">
                    <div>
                        {LandingData.testimonials.testimoinallist.map((temp) => (
                            <div>
                                {temp.quote}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-start justify-center gap-5">
                        <h4 className="text-xl md:text-2xl lg:text-3xl">
                            {LandingData.testimonials.heading}
                        </h4>
                        <p className="tracking-wide leading-tight text-neutral-500 max-w-lg">
                            {LandingData.testimonials.subheading}
                        </p>
                        <button className="px-4 py-3 bg-blue-700 text-white rounded tracking-wide">
                            <Link to={LandingData.hero.ctaButton.url}>
                                Create CV
                            </Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
  )
}

export default LandingPage
