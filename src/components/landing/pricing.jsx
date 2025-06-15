import { IoIosCheckmark } from "react-icons/io"
import { PriceData } from "../../constants"
import { FaHeart} from "react-icons/fa"
import { BsStars } from "react-icons/bs"

const Pricing =() => {
    return (
        <section className="max-w-7xl w-full mx-auto my-10 px-8 py-8">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex items-center justify-center flex-col text-center max-w-xl gap-y-4 mb-10">
                    <span className="rounded-3xl px-5 py-2 ring flex items-center justify-center gap-2">
                        <FaHeart className="fill-blue-700"/>
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
                            ${plan.isPopular ? "ring ring-offset-2 ring-offset-blue-900" : ""}`}>
                            {plan.isPopular && (
                                <span className="absolute bg-blue-900 text-white px-2 py-2 rounded-b-2xl right-3 -top-1 flex items-center justify-center gap-2">
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
                            ${plan.isPopular ? "bg-blue-500 text-white hover:bg-blue-700" : "text-neutral-800 bg-gray-200 hover:bg-gray-300"}`}>
                                {plan.ctaButton}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing

