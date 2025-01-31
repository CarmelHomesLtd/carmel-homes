
function Hero() {
  return (
    <section className="bg-[url('aboutus/hero.webp')] bg-right md:bg-center bg-cover bg-no-repeat p-10 lg:p-20 flex flex-col items-center md:flex-row-reverse md:justify-center gap-10">
      <div className="flex flex-col gap-5 sm:w-full md:max-w-[50%] lg:w-[min(30rem,55%)] [line-height:1.5rem]">
        <h2 className="text-[1.25rem] font-extrabold">About Us</h2>
        <p>At Carmel Homes Ltd, we are your trusted solution when it comes to real estate services. We are passionate about helping homeowners or first time home buyers across Ontario with their property needs.</p>
        <p>Our approach is built on transparency, trust, and genuine care for our clients. We believe in building strong, lasting relationships and putting your needs first, ensuring a smooth and stress-free process from start to finish. Whether you&#39;re facing financial challenges, navigating a life transition, or simply looking for a quick, hassle-free sale, we are here to help.</p>
        <p>With a deep understanding of the real estate market and a commitment to staying ahead of industry trends, we make it simple, straightforward, and rewarding.</p>
      </div>
      <div className="bg-[url('aboutus/vision.webp')] bg-center bg-cover bg-no-repeat w-60 sm:w-64 md:w-72 lg:w-[30rem] h-40 md:h-80 lg-[20rem] rounded-md" role="img" />
    </section>
  )
}

export default Hero