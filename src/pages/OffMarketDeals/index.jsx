import { Helmet } from "react-helmet";

import Benefits from "./sections/Benefits";
// import FormSteps from "./sections/FormSteps";
import { HeroSection } from "./sections/Hero";
import { HowToSellSection } from "./sections/HowToSell";
import { ChallengesSection } from "./sections/Challenges";
import { HowItWorksSection } from "./sections/HowItWorks";
import BeginJourney from "global/BeginJourney";

function OffMarketDeals() {
  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments)}
  // gtag('js', new Date());

  // gtag('config', 'G-YT7M87W0RE');  
  return (
    <div className="flex flex-col bg-center bg-cover bg-no-repeat">
      <Helmet>
        <title>Carmel Homes Ltd - Off Market Deals</title>
        <meta name="description" content="Expand your addressable market instantly! Partnering with us can help convert reluctant renters into homeowners, increasing the chances of converting a sale." />
        {/*Google tag (gtag.js)*/}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-YT7M87W0RE"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
        
          gtag('config', 'G-YT7M87W0RE');
        </script> */}
      </Helmet>
      <HeroSection />
      <HowToSellSection />
      <ChallengesSection />
      <HowItWorksSection />
      <section className="flex flex-col w-full gap-20 p-0 sm:p-5 md:p-10 2xl:py-24 px-[clamp(1.25rem,7%,2.5rem)]">
        <Benefits />
        <BeginJourney text="Sell your property with us now" actionText="Get Your Offer Now" actionLink="/off-market-form" />
      </section>
    </div>
  )
}

export default OffMarketDeals
