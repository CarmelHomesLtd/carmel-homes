import { useState, useEffect, useRef } from "react";

export const ChallengesSection = () => {
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
        <section ref={whatIsRTORef} className="[background-image:linear-gradient(to_bottom,black,transparent),url('homepage/what-is-rto.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
            <div className="mx-auto max-w-screen-2xl flex flex-col items-start justify-center gap-12 lg:gap-20 2xl:gap-32 px-8 lg:px-20 py-12 lg:py-32">
                <div className={`flex flex-col text-white text-[1rem] gap-8 ${isIntersecting ? "motion-safe:animate-fade-up" : "opacity-0"}`}>
                    <h2 className="text-[2rem] font-bold">Are You Experiencing Any of These Challenges?</h2>
                    <ul className="list-disc list-inside">
                        <li>Facing foreclosure?</li>
                        <li>Going through a divorce?</li>
                        <li>Struggling with problematic tenants?</li>
                        <li>Dealing with fire or water damage?</li>
                        <li>Simply unable to sell your property for any reason?</li>
                    </ul>
                </div>
                <div className={`flex flex-col text-white text-[1rem] gap-8 ${isIntersecting ? "motion-safe:animate-fade-up" : "opacity-0"}`}>
                    <h2 className="text-[2rem] font-bold">You Can Avoid:</h2>
                    <ul className="list-disc list-inside">
                        <li>Endless paperwork and legal hassles</li>
                        <li>Constant showings and walkthroughs</li>
                        <li>The frustration of delayed payments</li>
                        <li>The stress and complications of moving</li>
                    </ul>
                </div>
                <div className={`flex flex-col text-white text-[1rem] gap-8 ${isIntersecting ? "motion-safe:animate-fade-up" : "opacity-0"}`}>
                    <h2 className="text-[2rem] font-bold">Sell Your Property Without:</h2>
                    <ul className="list-disc list-inside">
                        <li>Spending on major repairs or renovations</li>
                        <li>Worrying about cleaning or decluttering</li>
                        <li>Removing junk or unwanted items</li>
                        <li>Handling pest problems</li>
                        <li>Doing any yard maintenance</li>
                    </ul>
                </div>
                <div className={`flex flex-col gap-3 ${isIntersecting ? "motion-safe:animate-fade-up" : "opacity-0"}`}>
                    <h3 className="text-xl font-semibold text-white">Want to speak with us? We’re just a call away!</h3>
                    <p className="text-lg text-white">Call us directly at <a href="tel:+12267050500" target="_blank" rel="noreferrer" className="font-bold text-amber-400">+1 (226) 7050500</a></p>
                    <p className="text-lg text-white">Or send us an email at: <a href="mailto:info@carmelhomesltd.com" target="_blank" rel="noreferrer" className="font-bold text-amber-400">info@carmelhomesltd.com</a></p>
                </div>
            </div>
        </section>

    )
}