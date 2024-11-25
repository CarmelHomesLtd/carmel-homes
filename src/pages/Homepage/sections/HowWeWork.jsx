import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "global/Button";
import sellAHome from "./../../../assets/sell-a-home.jpg"
import oldHouse from "./../../../assets/old-house.jpg"
import partnership from "./../../../assets/partnership.jpg"

function HowWeWork() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const howWeWorkRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      rootMargin: "-100px"
    });
    observer.observe(howWeWorkRef.current);
  
    return () => {
      observer.disconnect();
    }
  }, [])    

  return (
    <section ref={howWeWorkRef} className="flex flex-col gap-28 items-center py-24 px-[clamp(1.25rem,7%,2.5rem)] bg-gradient-to-br from-[#D3EAFF] via-white to-[#FFEED4]">
      <div className="grid gap-1">
        <h2 className="text-[1.75rem] text-center font-bold">Feel empowered to make your next move</h2>
        <p className="text-lg text-gray-600 text-center">Our range of services can help you make confident, informed decisions.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-screen-lg">
        <div className={`flex flex-col gap-3 h-full justify-between ${isIntersecting ? "motion-safe:animate-[fadeUp_1s_ease]" : "opacity-0"}`}>
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden">
              <img className="w-full h-full object-cover object-center" src={sellAHome} aria-roledescription="front-facing brown duplex house"/>
            </div>
            <h2 className="text-lg font-semibold">Begin your home ownership journey</h2>
            <p className="text-left">We work with you to repair what has been holding you back from qualifying for a traditional mortgage. This is done while you are living in your future home with our Rent-to-own scheme.</p>
          </div>
          <Link to="/apply-now">
            <Button theme="primary" className="text-[1.25rem] font-semibold">
              Find out more
            </Button>
          </Link>
        </div>
        <div className={`flex flex-col gap-3 h-full justify-between ${isIntersecting ? "motion-safe:animate-[fadeUp_1.3s_ease]" : "opacity-0"}`}>
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden">
              <img className="w-full h-full object-cover object-center" src={oldHouse} aria-roledescription="old-house-that-needs-renovation"/>
            </div>
            <h2 className="text-lg font-semibold">Sell your property</h2>
            <p className="text-left">Whether you're selling a house, condo, townhouse or vacant land in Ontario, we're here to serve you with ease and speed. Carmel Homes Ltd is committed to making the process fast and stress-free.</p>
          </div>
          <Link to="/what-is-rent-to-own">
            <Button theme="primary" className="text-[1.25rem] font-semibold">
              Find out more
            </Button>
          </Link>
        </div>
        <div className={`flex flex-col gap-3 h-full justify-between ${isIntersecting ? "motion-safe:animate-[fadeUp_1.5s_ease]" : "opacity-0"}`}>
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden">
              <img className="w-full h-full object-cover object-center" src={partnership} aria-roledescription="two-men-shaking-hands"/>
            </div>
            <h2 className="text-lg font-semibold">Investment opportunities or real estate partner</h2>
            <p className="text-left">Investing in real estate is an option we offer for individuals with financial capacity. We also support real estate agents, brokers and other home buying professionals with client housing requirements.</p>
          </div>
          <Link to="/partner-with-us">
            <Button theme="primary" className="text-[1.25rem] font-semibold">
              Find out more
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork