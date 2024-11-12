import { Helmet } from "react-helmet";

import BeginJourney from "global/BeginJourney";
import WhoCanUseRTO from "./sections/WhoCanUseRTO";
import WhatIsRTO from "./sections/WhatIsRTO";
import HowDoesItWork from "./sections/HowDoesItWork";
import FindOutMore from "./sections/FindOutMore";
import WhatYouGet from "./sections/WhatYouGet";

function WhatIsRentToOwn() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-YT7M87W0RE');
  return (
    <div>
      <Helmet>
        <title>Carmel Homes Ltd - What is Rent to Own?</title>
        <meta name="description" content="Rent-to-own is a home ownership program designed to make your dream of home ownership a reality. To get more details on how it works, visit this page." />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YT7M87W0RE"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
        
          gtag('config', 'G-YT7M87W0RE');
        </script>
      </Helmet>
      <WhatIsRTO />
      <WhatYouGet />
      <WhoCanUseRTO />
      <div id="how-it-works">
        <HowDoesItWork />
      </div>
      <FindOutMore />
      <BeginJourney />
    </div>
  )
}

export default WhatIsRentToOwn
