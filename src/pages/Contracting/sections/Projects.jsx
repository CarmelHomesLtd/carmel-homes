import { useEffect, useState } from "react"
import before1 from "assets/before-1.webp"
import before2 from "assets/before-2.webp"
import before3 from "assets/before-3.webp"
import after1 from "assets/after-1.webp"
import after2 from "assets/after-2.webp"
import after3 from "assets/after-3.webp"

function OurProjects() {
    const projects = [
        {
            img: before1,
            alt: 'before1',
        },
        {
            img: after1,
            alt: 'after1',
        },
        {
            img: before2,
            alt: 'before2',
        },
        {
            img: after2,
            alt: 'after2',
        },
        {
            img: before3,
            alt: 'before3',
        },
        {
            img: after3,
            alt: 'after3',
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [projects.length]);
    return (
        <section className="grid gap-16 pt-24">
            <div className="container mx-auto px-5 md:px-0">
                <h2 className="text-[1.75rem] text-center font-bold">Our Projects</h2>
            </div>
            <div className="relative w-full overflow-hidden">
                <div className="flex w-full transition-transform duration-700" style={{ transform: `translateX(-${currentIndex * 100}%)`, }}>
                    {
                        projects.map((image, index) => (
                            <div key={index} className="min-w-full flex-shrink-0 flex-grow-0">
                                <img src={image.img} alt={`Slide ${index}`} className="w-full h-[900px] object-center object-cover hover:filter-none transition delay-200 ease-out" />
                            </div>
                        ))
                    }
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                        currentIndex === index ? "bg-white" : "bg-gray-400"
                        }`}
                    />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurProjects;