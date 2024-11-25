import { useEffect, useRef, useState } from "react";

export const HowToSellSection = () => {

  const [isIntersecting, setIsIntersecting] = useState(false);
  const howWeWorkRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      rootMargin: "-100px"
    });
    observer.observe(howWeWorkRef?.current);
  
    return () => {
      observer.disconnect();
    }
  }, [])  
    return (
      <section ref={howWeWorkRef} className="flex flex-col gap-20 items-center py-12 lg:py-24 px-[clamp(1.25rem,7%,2.5rem)] bg-gradient-to-br from-[#D3EAFF] via-white to-[#FFEED4]">
        <div className="grid gap-2 text-center">
          <h2 className="[font-size:2rem] font-bold">How to Sell Your Property Off-Market</h2>
          <p className="text-lg text-gray-600">Selling your property off-market can be a straightforward and efficient process. Here’s a step-by-step guide to help you understand what to expect:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-screen-2xl">
          <div className={`flex items-start text-lg [line-height:1] font-semibold gap-6 ${isIntersecting ? "motion-safe:animate-[fadeUp_1s_ease]" : "opacity-0"}`}>
            <div className="grid gap-4 flex-1">
              <div className="flex items-center gap-2">
                <div className={`w-5 h-7 bg-[url('whatisrenttoown/brown-bullet.svg')] bg-contain bg-no-repeat bg-center`} role="img" aria-roledescription="icon" />
                <h3 className="">Evaluate Your Situation</h3>
              </div>
              <ul className="space-y-3 list-disc list-inside">
                <li>
                  Assess Your Needs: <span className="font-normal">Determine why you want to sell your property off-market. Whether it’s for privacy, a quick sale, or avoiding market listing hassles, your motivation will guide the process.</span>
                </li>
                <li>
                  Set Expectations: <span className="font-normal">Understand that selling off-market might mean less visibility and potentially a lower offer compared to a traditional sale.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={`flex items-start text-lg [line-height:1] font-semibold gap-6 ${isIntersecting ? "motion-safe:animate-[fadeUp_1s_ease]" : "opacity-0"}`}>
            <div className="grid gap-4 flex-1">
              <div className="flex items-center gap-2">
                <div className={`w-5 h-7 bg-[url('whatisrenttoown/brown-bullet.svg')] bg-contain bg-no-repeat bg-center`} role="img" aria-roledescription="icon" />
                <h3 className="">Find a Trusted Buyer</h3>
              </div>
              <ul className="space-y-3 list-disc list-inside">
                <li>
                  Research Buyers: <span className="font-normal">Look for reputable companies or investors who specialize in off-market properties. Ensure they are known for fair, transparent transactions.</span>
                </li>
                <li>
                  Verify Credibility: <span className="font-normal">Check reviews and ask for references to confirm that the buyer is reliable and experienced.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={`flex items-start text-lg [line-height:1] font-semibold gap-6 ${isIntersecting ? "motion-safe:animate-[fadeUp_1s_ease]" : "opacity-0"}`}>
            <div className="grid gap-4 flex-1">
              <div className="flex items-center gap-2">
                <div className={`w-5 h-7 bg-[url('whatisrenttoown/brown-bullet.svg')] bg-contain bg-no-repeat bg-center`} role="img" aria-roledescription="icon" />
                <h3 className="">Prepare Your Property</h3>
              </div>
              <ul className="space-y-3 list-disc list-inside">
                <li>
                  Present It Well: <span className="font-normal">While you won’t need to make major renovations, ensure your property is clean
and well-maintained. Small touch-ups can make a big difference.</span>
                </li>
                <li>
                  Gather Documents: <span className="font-normal">Have essential documents ready, such as the property deed, recent utility
bills, and tax receipts.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={`flex items-start text-lg [line-height:1] font-semibold gap-6 ${isIntersecting ? "motion-safe:animate-[fadeUp_1s_ease]" : "opacity-0"}`}>
            <div className="grid gap-4 flex-1">
              <div className="flex items-center gap-2">
                <div className={`w-5 h-7 bg-[url('whatisrenttoown/brown-bullet.svg')] bg-contain bg-no-repeat bg-center`} role="img" aria-roledescription="icon" />
                <h3 className="">Receive and Review Offers</h3>
              </div>
              <ul className="space-y-3 list-disc list-inside">
                <li>
                  Get a Fair Offer: <span className="font-normal">A legitimate off-market buyer will present you with a no-obligation offer based
on your property’s condition and market value.</span>
                </li>
                <li>
                  Understand the Details: <span className="font-normal">Carefully review the offer and ask questions if anything is unclear. Make
sure you understand the terms and the offer’s basis.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={`flex items-start text-lg [line-height:1] font-semibold gap-6 ${isIntersecting ? "motion-safe:animate-[fadeUp_1s_ease]" : "opacity-0"}`}>
            <div className="grid gap-4 flex-1">
              <div className="flex items-center gap-2">
                <div className={`w-5 h-7 bg-[url('whatisrenttoown/brown-bullet.svg')] bg-contain bg-no-repeat bg-center`} role="img" aria-roledescription="icon" />
                <h3 className="">Close the Deal</h3>
              </div>
              <ul className="space-y-3 list-disc list-inside">
                <li>
                  Streamlined Process: <span className="font-normal">Closing on an off-market sale is often quicker and simpler. Ensure you have
all necessary paperwork in order, including title deeds and any existing liens or mortgages.</span>
                </li>
                <li>
                  Know the Costs: <span className="font-normal">Clarify who will cover any closing costs. Some buyers may handle these costs as
part of their offer.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={`flex items-start text-lg [line-height:1] font-semibold gap-6 ${isIntersecting ? "motion-safe:animate-[fadeUp_1s_ease]" : "opacity-0"}`}>
            <div className="grid gap-4 flex-1">
              <div className="flex items-center gap-2">
                <div className={`w-5 h-7 bg-[url('whatisrenttoown/brown-bullet.svg')] bg-contain bg-no-repeat bg-center`} role="img" aria-roledescription="icon" />
                <h3 className="">Complete the Sale and Move On</h3>
              </div>
              <ul className="space-y-3 list-disc list-inside">
                <li>
                  Final Steps: <span className="font-normal">Once the sale is complete, be prepared to move out by the agreed date. Plan your
next steps, whether it’s relocating, settling financial matters, or starting anew.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}