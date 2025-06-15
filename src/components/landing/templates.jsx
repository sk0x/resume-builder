import { LandingData } from "../../constants";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { useState } from "react";
import { Link } from "react-router-dom";


const TemplateCarousel = () => {
    const tempList = LandingData.templates.templateList
    const totalTemp = tempList.length;
    const [activeIndex, setActiveIndex] = useState(1);

    const goToPrevious = () => activeIndex > 1 ? setActiveIndex(activeIndex-1): setActiveIndex(5)
    const goToNext = () => activeIndex != totalTemp ? setActiveIndex(activeIndex+1): setActiveIndex(1)

    const getVisibleItems = () => {
        if(tempList.length === 0) []
        const visibleInd = [];
        const offset = Math.floor(totalTemp / 2);
        for(let i = -offset; i <= offset; i++){
            let index = (activeIndex -1 + i) % totalTemp;
            if(index < 0){
                index = totalTemp + index;
            }else if(index > totalTemp){
                index = index - totalTemp
            }
            visibleInd.push({
                id: index +1,
                position: i,
                img: tempList[index].img
            })
        }
        console.log({...visibleInd})
        return visibleInd
    }

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
                                            ? `scale(${0.9 - absPosition * 0.05}) translateX(-${absPosition * 90}%) translateZ(-100px)`
                                            : `scale(${0.9 - absPosition * 0.05}) translateX(${absPosition * 90}%) translateZ(-100px)`,
                                }}
                            >
                                <img className={`w-64 h-80 object-contain md:w-96 md:h-[36rem] rounded-2xl ${isActive ? "": 'brightness-50'}`}
                                    src={temp.img}
                                    alt={`Template ${temp.id}`}/>
                            </div>
                        )
                    })}
                    </div>
                    <div className="w-full absolute top-[50%] z-100">
                        <div className="flex items-center justify-between">
                        <button className="px-2 py-2 rounded-full bg-white" onClick={goToPrevious}>
                            <FaAngleLeft className="w-8 h-8"/>
                        </button>
                        <button className="px-2 py-2 rounded-full bg-white" onClick={goToNext}>
                            <FaAngleRight className="w-8 h-8"/>
                        </button>
                        </div>
                    </div>
                </div>
            <div className="flex items-center justify-center">
                <Link to={`/resume/${activeIndex}`} className="font-semibold px-4 py-3 rounded bg-blue-700 text-white">
                    Use this template
                </Link>
            </div>
      </div>
    );
}

const Templates =() => {
    return (
            <section className="bg-neutral-800 w-full">
                <div className="py-8 px-8 max-w-7xl mx-auto w-full h-full">
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
    )
}

export default Templates
