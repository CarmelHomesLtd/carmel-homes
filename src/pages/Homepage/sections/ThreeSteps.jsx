import { useState, useRef, useEffect } from "react";

function ThreeSteps() {
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
    <section ref={howWeWorkRef} className="flex flex-col gap-12 items-center py-24 px-[clamp(1.25rem,7%,2.5rem)] bg-white">
      <div className="grid gap-1">
        <h2 className="text-[1.75rem] text-center font-bold">Build Your Dream Space in 3 Simple Steps</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-screen-xl">
        <div className={`grid content-start gap-12 rounded-3xl p-4 ${isIntersecting ? "motion-safe:animate-[fadeUp_1s_ease]" : "opacity-0"}`}>
            <div className="grid gap-4 md:gap-8">
                <div className="text-gray-700 text-base font-medium w-fit">1</div>
                <div className="grid gap-2">
                    <div className="text-gray-900 font-semibold text-xl md:text-2xl tracking-wide w-fit">Initial Consultation &amp; Planning</div>
                    <div className="text-gray-500 font-medium text-sm md:text-base tracking-wide max-w-fit">Our project manager will meet with you on-site to discuss your construction goals, assess the project scope, and create a comprehensive plan tailored to your needs. We’ll provide a transparent estimate and finalize your design, materials, and finishes to bring your vision to life.</div>
                </div>
            </div>
        </div>
        <div className={`grid content-start gap-12 rounded-3xl p-4 ${isIntersecting ? "motion-safe:animate-[fadeUp_1.3s_ease]" : "opacity-0"}`}>
            <div className="grid gap-4 md:gap-8">
                <div className="text-gray-700 text-base font-medium w-fit">2</div>
                <div className="grid gap-2">
                    <div className="text-gray-900 font-semibold text-xl md:text-2xl tracking-wide w-fit">Construction Phase</div>
                    <div className="text-gray-500 font-medium text-sm md:text-base tracking-wide max-w-fit">This is where the transformation begins. Our skilled construction team will start building according to the plan, ensuring the highest standards of safety and craftsmanship. Throughout the process, your dedicated project manager will keep you informed and address any questions or concerns.</div>
                </div>
            </div>
        </div>
        <div className={`grid content-start gap-12 rounded-3xl p-4 ${isIntersecting ? "motion-safe:animate-[fadeUp_1.5s_ease]" : "opacity-0"}`}>
            <div className="grid gap-4 md:gap-8">
                <div className="text-gray-700 text-base font-medium w-fit">3</div>
                <div className="grid gap-2">
                    <div className="text-gray-900 font-semibold text-xl md:text-2xl tracking-wide w-fit">Final Walkthrough &amp; Handover</div>
                    <div className="text-gray-500 font-medium text-sm md:text-base tracking-wide max-w-fit">Once construction is complete, we’ll conduct a detailed walkthrough with you to ensure every detail meets your expectations. Our team will address any final adjustments, and we’ll officially hand over your newly built or renovated space for you to enjoy!</div>
                </div>
            </div>
        </div>
      </div>
      <div className="text-[1.25rem] text-center font-semibold">Your dream project starts here—let’s build it together.</div>
    </section>
  )
}

export default ThreeSteps