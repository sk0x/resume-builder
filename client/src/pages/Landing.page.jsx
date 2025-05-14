import { Link } from "react-router-dom"
import { LandingData, PriceData } from "../constants"
import { useEffect, useState } from "react"
import { FaStar, FaAngleLeft, FaAngleRight, FaHeart} from "react-icons/fa"
import { BsStars } from "react-icons/bs";
import { IoIosCheckmark } from "react-icons/io";

const RatingStars = ({ stars }) => (
    <div className="flex items-center justify-center gap-1">
        {Array.from({ length: stars}, (_, index) => (
            <FaStar className="fill-yellow-400"/>
        ))}
    </div>
)

const TestimonialCarousel = () => {
    const testimonials = LandingData.testimonials.testimoinallist
    const activeTestimonial = 1
    return (
        <div className="relative md:my-0 my-30">
            <div className="flex flex-col items-center justify-center h-[20rem]">
                {testimonials.map((testimonial, index) => {
                    const isActive = activeTestimonial === index
                    const distance = Math.abs(activeTestimonial - index)
                    return (
                        <div className={`absolute transition-all w-full bg-white shadow-2xl rounded px-4
                                        ${isActive ? "shadow-blue-300 border border-blue-200" : "border border-gray-200"}`} key={index}
                            style={{
                                transform: isActive
                                    ? 'scale(1)'
                                    : index < activeTestimonial
                                        ? `scale(0.85) translateY(-${distance * 130}%)`
                                        : `scale(0.85) translateY(${distance * 130}%)`,
                                }}
                        >
                            <div className="flex items-center justify-between border-b-gray-300 border-b py-4">
                                <div className="flex items-center justify-start gap-2">
                                    <img src={testimonial.image} className="w-12 h-12 bg-gray-200 rounded-full"/>
                                    <div className="flex flex-col items-start justify-start">
                                        <h4 className="text-lg font-semibold">
                                            {testimonial.author}
                                        </h4>
                                        <span className="text-xs tracking-normal text-blue-600">
                                            {testimonial.position}
                                        </span>
                                    </div>
                                </div>
                                <RatingStars stars={testimonial.rating}/>
                            </div>
                            <p className="text-sm py-3 text-neutral-500">
                                {testimonial.quote}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

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
            <section className="my-10 max-w-7xl w-full mx-auto px-8 py-28">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
                    <TestimonialCarousel/>
                    <div className="flex flex-col items-start justify-start gap-5 ml-10 h-full">
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
            <section className="max-w-7xl w-full mx-auto my-10 px-8 py-8">
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex items-center justify-center flex-col text-center max-w-xl gap-y-4 mb-10">
                        <span className="border rounded-3xl px-5 py-2 ring ring-offset-2 ring-offset-blue-500 flex items-center justify-center gap-2">
                            <FaHeart className="fill-gray-700"/>
                            Pricing
                        </span>
                        <h3 className="lg:text-4xl md:text-3xl text-2xl font-semibold tracking-wide">
                            {PriceData.heading}
                        </h3>
                        <p className="lg:text-lg text-md text-neutral-600">
                            {PriceData.subHeading}
                        </p>
                    </div>
                    <div className="w-full grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 place-items-center">
                        {PriceData.pricePlans.map((plan) => (
                            <div className={`relative w-96 h-full rounded-2xl px-4 py-4 flex flex-col shadow-xl items-start justify-start border border-gray-200
                                        ${plan.isPopular ? "ring ring-offset-2 ring-offset-neutral-900" : ""}`}>
                                {plan.isPopular && (
                                    <span className="absolute bg-neutral-900 text-white px-2 py-2 rounded-b-2xl right-3 -top-1 flex items-center justify-center gap-2">
                                        <BsStars/>
                                        Recommeded
                                    </span>
                                )}
                                <div className="flex flex-col items-start justify-center">
                                    <span className="capitalize tracking-wider text-gray-500 text-sm mb-2">
                                        {plan.id}
                                    </span>
                                    <h4 className="text-4xl font-bold">
                                        ${plan.price}
                                    </h4>
                                    <span className="text-neutral-500">
                                       Per user/month, billed monthly
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2 items-start justify-center py-10 text-gray-500">
                                    {plan.features.map((feature) => (
                                        <div className="flex items-center justify-center gap-2">
                                            <IoIosCheckmark className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full"/>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                                <button className={`py-3 text-sm px-8 w-full mt-auto rounded-4xl tracking-wide cursor-pointer
                                    ${plan.isPopular ? "bg-neutral-950 text-white hover:bg-neutral-700" : "text-neutral-800 bg-gray-200 hover:bg-gray-300"}`}>
                                    {plan.ctaButton}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
  )
}

export default LandingPage
