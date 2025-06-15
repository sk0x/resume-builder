import { Link } from "react-router-dom"
import { LandingData } from "../../constants"
import { FaStar, FaAngleLeft, FaAngleRight, FaHeart} from "react-icons/fa"


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
                                    <img src={testimonial.image} className="w-12 h-12 bg-gray-200 rounded-full object-cover"/>
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


const Testimonials =() => {
    return (
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
    )
}

export default Testimonials
