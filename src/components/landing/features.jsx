import { LandingData } from "../../constants"

const Features = () => {
    return (
            <section className="my-10 max-w-7xl w-full mx-auto px-8 py-6">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center">
                    <div>
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-8">
                            {LandingData.features.heading}
                        </div>
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
                    </div>
                    <div className="">
                        <img src={LandingData.features.image} alt="features"/>
                    </div>
                </div>
            </section>
    )
}

export default Features
