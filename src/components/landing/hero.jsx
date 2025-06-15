import { Link } from "react-router-dom"
import { LandingData } from "../../constants"

const Hero = () => {
    return (
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
                    <img src={LandingData.hero.image} alt="hero"/>
                </div>
            </div>
        </section>
    )
}

export default Hero
