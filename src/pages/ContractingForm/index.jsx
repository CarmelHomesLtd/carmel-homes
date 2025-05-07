import { Helmet } from "react-helmet";

import FormSteps from "./sections/FUGFormSteps";
import OffMarketBenefits from "./sections/Benefits";
import PixelTracker from "global/PixelTracker";

function ContractingForm() {
  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments)}
  // gtag('js', new Date());

  // gtag('config', 'G-YT7M87W0RE');
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center p-0 sm:p-5 md:p-10 2xl:py-32 bg-[url('applynow/hero.webp')] bg-center bg-cover bg-no-repeat">
      <Helmet>
        <title>Carmel Homes Ltd - Off Market Form</title>
        <meta name="description" content="Apply Now · Response in 24 hours · No commitment · No effect on your credit card rating." />
        <script src="https://link.msgsndr.com/js/form_embed.js"></script>

        {/*Google tag (gtag.js)
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YT7M87W0RE"></script>
        <script src="/public/gtag.js"></script>*/}
      </Helmet>
      <PixelTracker />
      <div className="relative flex items-start lg:gap-40 w-full max-w-screen-2xl">
        <OffMarketBenefits />
        <FormSteps />
      </div>
      <noscript>
          <img height="1" width="1"
          src="https://www.facebook.com/tr?id=953413813614575&ev=PageView
          &noscript=1"/>
          </noscript>
    </div>
  )
}

export default ContractingForm
