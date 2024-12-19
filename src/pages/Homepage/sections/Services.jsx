import { useState, useRef, useEffect } from "react";
import homeRemodel from "./../../../assets/home-remodel.jpg"
import basement from "./../../../assets/basement.jpg"
import homeAddition from "./../../../assets/home-addition.jpg"
import customHome from "./../../../assets/custom-home.jpg"

function Services() {
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
      <div className="grid gap-1 max-w-screen-xl">
        <h2 className="text-[1.75rem] text-center font-bold">Our Services</h2>
        <p className="text-base text-gray-600 text-center">Carmel Homes is a leading renovation company proudly serving Hamilton &amp; Niagara Region. With over 10 years of experience, we are committed to providing outstanding craftsmanship and exceptional customer service. Whether you’re looking to remodel your entire home, add new spaces, or build a custom home from scratch, our team has the expertise to bring your vision to life. Our services include;</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-screen-2xl">
        <div className={`flex flex-col gap-3 h-full justify-between ${isIntersecting ? "motion-safe:animate-[fadeUp_1s_ease]" : "opacity-0"}`}>
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden h-40">
              <img className="w-full h-full object-cover object-center" src={homeRemodel} aria-roledescription="front-facing brown duplex house"/>
            </div>
            <h2 className="text-lg font-semibold text-center">Full Home Remodeling</h2>
            <p className="text-base text-gray-600 text-center">Transform your existing space into the home of your dreams with our comprehensive remodeling services. From design to completion, we handle every detail.</p>
          </div>
        </div>
        <div className={`flex flex-col gap-3 h-full justify-between ${isIntersecting ? "motion-safe:animate-[fadeUp_1.3s_ease]" : "opacity-0"}`}>
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden h-40">
              <img className="w-full h-full object-cover object-center" src={basement} aria-roledescription="old-house-that-needs-renovation"/>
            </div>
            <h2 className="text-lg font-semibold text-center">Basement Renovation</h2>
            <p className="text-base text-gray-600 text-center">Maximize the potential of your basement by turning it into a functional, stylish living space that suits your lifestyle.</p>
          </div>
        </div>
        <div className={`flex flex-col gap-3 h-full justify-between ${isIntersecting ? "motion-safe:animate-[fadeUp_1.5s_ease]" : "opacity-0"}`}>
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden h-40">
              <img className="w-full h-full object-cover object-center" src={homeAddition} aria-roledescription="two-men-shaking-hands"/>
            </div>
            <h2 className="text-lg font-semibold text-center">Home Additions</h2>
            <p className="text-base text-gray-600 text-center">Need more space? We specialize in designing and constructing seamless home additions that integrate perfectly with your current layout.</p>
          </div>
        </div>
        <div className={`flex flex-col gap-3 h-full justify-between ${isIntersecting ? "motion-safe:animate-[fadeUp_1.8s_ease]" : "opacity-0"}`}>
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden h-40">
              <img className="w-full h-full object-cover object-center" src={customHome} aria-roledescription="two-men-shaking-hands"/>
            </div>
            <h2 className="text-lg font-semibold text-center">Custom Home Builds</h2>
            <p className="text-base text-gray-600 text-center">From concept to construction, we’ll help you design and build a custom home tailored to your unique needs and preferences.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services