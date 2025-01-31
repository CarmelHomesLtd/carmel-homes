
function Founder() {
  return (
    <>
    <section className="flex flex-col md:flex-row p-8 items-center md:justify-center gap-10">
      <div className="flex flex-col gap-5 sm:w-full md:max-w-[50%] lg:w-[min(30rem,55%)] [line-height:1.5rem]">
        <h2 className="text-[1.25rem] font-extrabold">About Dammy</h2>
        <p>Over the years, Dammy has been transforming real estate challenges into opportunities, helping homeowners sell their properties quickly and stress-free. Dammy has purchased, renovated, and resold homes across Ontario, always focusing on creating win-win outcomes. Whether it’s helping someone avoid foreclosure, managing probate sales, or purchasing properties as-is, Dammy understands the importance of making the process as smooth and rewarding as possible for everyone involved.</p>
      </div>
      <div className="bg-[url('aboutus/damilare.png')] bg-center bg-cover bg-no-repeat h-[clamp(8rem,30vw,19rem)] w-[clamp(15rem,50%,30rem)] rounded-lg" role="img" aria-roledescription="Carmel Homes founder, Oluwadamilare" />
    </section>
    <section className="flex flex-col md:flex-row p-8 items-center md:justify-center gap-10">
      <div className="flex flex-col gap-5 sm:w-full md:max-w-[50%] lg:w-[min(30rem,55%)] [line-height:1.5rem]">
        <p>Dammy offers a range of solutions to fit your needs, including:</p>
        <ul className="list-disc list-inside">
          <li>Fast cash offers for quick sales</li>
          <li>Flexible timelines to match your situation</li>
          <li>Assistance with complex situations like foreclosure or inherited properties</li>
          <li>Purchasing homes in any condition, so you don’t need to worry about repairs</li>
        </ul>
      </div>
    </section>
    <section className="flex flex-col md:flex-row p-8 items-center md:justify-center gap-10">
      <div className="flex gap-5 sm:w-full md:max-w-[50%] lg:w-[min(30rem,55%)] [line-height:1.5rem]">
    <p>If you’re looking for an experienced real estate investor who prioritizes your needs and delivers
reliable, straightforward solutions, Dammy and his team are here to help. Let’s work together to
make selling your property an easy and positive experience.</p>
      </div>
    </section>
    </>
  )
}

export default Founder