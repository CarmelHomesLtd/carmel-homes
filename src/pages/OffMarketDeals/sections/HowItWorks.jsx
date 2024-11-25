import { useEffect, useRef, useState } from "react";

export const HowItWorksSection = () => {

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
          <h2 className="[font-size:2rem] font-bold">How It Works</h2>
          <p className="text-lg text-gray-600">Our Simple, Stress-Free Process to Sell Your Property</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-screen-2xl">
          <div className={`flex items-start text-lg [line-height:1] font-semibold gap-6 ${isIntersecting ? "motion-safe:animate-[fadeUp_1s_ease]" : "opacity-0"}`}>
            <div className="grid gap-4 flex-1">
              <div className="flex items-center gap-2">
                <div className={`w-5 h-7 bg-[url('whatisrenttoown/brown-bullet.svg')] bg-contain bg-no-repeat bg-center`} role="img" aria-roledescription="icon" />
                <h3 className="text-xl"> Step 1</h3>
              </div>
              <p className="text-lg font-normal text-gray-600">Tell us about your property – It’s quick, easy, and completely free!</p>
            </div>
          </div>
          <div className={`flex items-start text-lg [line-height:1] font-semibold gap-6 ${isIntersecting ? "motion-safe:animate-[fadeUp_1s_ease]" : "opacity-0"}`}>
            <div className="grid gap-4 flex-1">
              <div className="flex items-center gap-2">
                <div className={`w-5 h-7 bg-[url('whatisrenttoown/brown-bullet.svg')] bg-contain bg-no-repeat bg-center`} role="img" aria-roledescription="icon" />
                <h3 className="text-xl"> Step 2</h3>
              </div>
              <p className="text-lg font-normal text-gray-600">Once we review the details, if your property meets our criteria, we’ll reach out to schedule a
convenient appointment.</p>
            </div>
          </div>
          <div className={`flex items-start text-lg [line-height:1] font-semibold gap-6 ${isIntersecting ? "motion-safe:animate-[fadeUp_1s_ease]" : "opacity-0"}`}>
            <div className="grid gap-4 flex-1">
              <div className="flex items-center gap-2">
                <div className={`w-5 h-7 bg-[url('whatisrenttoown/brown-bullet.svg')] bg-contain bg-no-repeat bg-center`} role="img" aria-roledescription="icon" />
                <h3 className="text-xl"> Step 3</h3>
              </div>
              <p className="text-lg font-normal text-gray-600">Receive a fair, no-obligation offer from us in writing. We guarantee an offer within 72 hours of
receiving your information.</p>
            </div>
          </div>
          <div className={`flex items-start text-lg [line-height:1] font-semibold gap-6 ${isIntersecting ? "motion-safe:animate-[fadeUp_1s_ease]" : "opacity-0"}`}>
            <div className="grid gap-4 flex-1">
              <div className="flex items-center gap-2">
                <div className={`w-5 h-7 bg-[url('whatisrenttoown/brown-bullet.svg')] bg-contain bg-no-repeat bg-center`} role="img" aria-roledescription="icon" />
                <h3 className="text-xl"> Step 4</h3>
              </div>
              <p className="text-lg font-normal text-gray-600">Once you agree, we’ll manage the entire process and close the deal at a trusted local lawyer’s
office. You’ll receive your payment, or we can adjust to a closing date that fits your needs.</p>
            </div>
          </div>
        </div>
        <div className="grid gap-2 justify-items-center text-center">
          <h2 className="text-2xl font-bold">Time Frame</h2>
          <p className="text-lg text-gray-600 lg:w-1/2 text-center">From the moment we receive your property information, expect a <strong>no-obligation cash offer
within 72 hours</strong>. We can close as quickly as <strong>3 weeks</strong>, or we can accommodate your preferred
schedule.</p>
        </div>
      </section>
    )
}