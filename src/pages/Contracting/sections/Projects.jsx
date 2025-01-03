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
    return (
        <section className="grid gap-16 py-24">
            <div className="container mx-auto px-5 md:px-0">
                <h2 className="text-[1.75rem] text-center font-bold">Our Projects</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                {
                    projects.map((project, id) =>
                        <div key={id}>
                            <div className="relative w-full h-fit overflow-hidden">
                                <img src={project?.img} alt={project?.alt} className="brightness-75 w-full h-96 object-center object-cover hover:filter-none transition delay-200 ease-out" />
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default OurProjects;