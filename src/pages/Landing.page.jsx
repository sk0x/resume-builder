import { Features, Hero, Pricing, Templates, Testimonials } from "../components/landing";

const LandingPage = () => {
  return (
        <div className="w-full">
            <Hero/>
            <Templates/>
            <Features/>
            <Testimonials/>
            <Pricing/>
        </div>
  )
}

export default LandingPage
