import { useState, useRef, useEffect } from "react";
import budget from "./../../../assets/budget.jpg"
import feedBack from "./../../../assets/feedback.jpg"
import projectManagement from "./../../../assets/project-management.jpg"
import expertise from "./../../../assets/expertise.jpg"
import consulting from "./../../../assets/consulting.jpg"

function WhyChooseUs() {
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
        <h2 className="text-[1.75rem] text-center font-bold">Why Choose Carmel Homes?</h2>
        <p className="text-lg text-gray-600 text-center">Transforming Your Space, One Room at a Time.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 w-full max-w-screen-2xl">
        <div className={`flex flex-col gap-3 h-full justify-between ${isIntersecting ? "motion-safe:animate-[fadeUp_1s_ease]" : "opacity-0"}`}>
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden h-40">
              <img className="w-full h-full object-cover object-center" src={budget} aria-roledescription="front-facing brown duplex house"/>
            </div>
            <h2 className="text-lg font-semibold text-center">On Time &amp; Within Budget</h2>
          </div>
        </div>
        <div className={`flex flex-col gap-3 h-full justify-between ${isIntersecting ? "motion-safe:animate-[fadeUp_1.3s_ease]" : "opacity-0"}`}>
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden h-40">
              <img className="w-full h-full object-cover object-center" src={feedBack} aria-roledescription="old-house-that-needs-renovation"/>
            </div>
            <h2 className="text-lg font-semibold text-center">Exceptional Client Reviews</h2>
          </div>
        </div>
        <div className={`flex flex-col gap-3 h-full justify-between ${isIntersecting ? "motion-safe:animate-[fadeUp_1.5s_ease]" : "opacity-0"}`}>
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden h-40">
              <img className="w-full h-full object-cover object-center" src={projectManagement} aria-roledescription="two-men-shaking-hands"/>
            </div>
            <h2 className="text-lg font-semibold text-center">Dedicated Project Management</h2>
          </div>
        </div>
        <div className={`flex flex-col gap-3 h-full justify-between ${isIntersecting ? "motion-safe:animate-[fadeUp_1.8s_ease]" : "opacity-0"}`}>
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden h-40">
              <img className="w-full h-full object-cover object-center" src={expertise} aria-roledescription="two-men-shaking-hands"/>
            </div>
            <h2 className="text-lg font-semibold text-center">Over a Decade of Expertise</h2>
          </div>
        </div>
        <div className={`flex flex-col gap-3 h-full justify-between ${isIntersecting ? "motion-safe:animate-[fadeUp_2s_ease]" : "opacity-0"}`}>
          <div className="grid gap-4">
            <div className="rounded-lg overflow-hidden h-40">
              <img className="w-full h-full object-cover object-center" src={consulting} aria-roledescription="two-men-shaking-hands"/>
            </div>
            <h2 className="text-lg font-semibold text-center">Complimentary Consultations</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs