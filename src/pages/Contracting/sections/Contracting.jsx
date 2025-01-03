import { useState, useRef, useEffect } from "react";

function CarmelHomesContracting() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const whatIsRTORef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      rootMargin: "-100px"
    });
    observer.observe(whatIsRTORef.current);
  
    return () => {
      observer.disconnect();
    }
  }, []);

  return (
    <section ref={whatIsRTORef} className="flex flex-col text-center lg:flex-row items-center justify-center gap-12 lg:gap-20 2xl:gap-32 px-8 lg:px-20 py-12 lg:py-32 [background-image:linear-gradient(to_bottom,black,transparent),url('homepage/what-is-rto.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className={`flex flex-col text-white text-[1rem] gap-8 lg:max-w-[40%]  ${isIntersecting ? "motion-safe:animate-fade-up" : "opacity-0"}`}>
        <h2 className="text-[2rem] font-bold">Carmel Homes Contracting</h2>
        <p>
          At Carmel Homes Contracting, we’re committed to turning your vision into reality. With a focus on exceptional craftsmanship, timely delivery, and clear communication, we ensure that every project meets and exceeds your expectations.
        </p>
        <p>
          Let’s build something incredible together!
        </p>
      </div>
    </section>
  )
}

export default CarmelHomesContracting