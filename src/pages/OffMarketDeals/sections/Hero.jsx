import oldHouse from "./../../../assets/old-house.jpg"
import Button from "global/Button";

export const HeroSection = () => {
    return (
      <section className="relative flex w-full h-[900px]">
        <img className="w-full h-full object-cover object-center brightness-75" src={oldHouse} aria-roledescription="front-facing brown duplex house"/>
        <div className="absolute grid content-center inset-0 text-center p-5">
          <div className="grid gap-2">
            <h1 className="text-white text-5xl [letter-spacing:0.15rem] font-extrabold">A Quick and Stress-Free Way to Sell Your Property in Ontario, Canada</h1>
            <p className="text-white text-2xl">Get a FREE, no-obligation offer in just 72 hours or less. Simply enter your property details, and we’ll handle the rest!</p>
          </div>
          <div className="flex flex-col gap-3 mt-5 w-full max-w-screen-sm mx-auto">
            <input className="block flex-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-300
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 transition-all duration-500 ease" type="text" placeholder="Enter property address" />

            <Button theme="primary" className="w-fit mx-auto shadow-slate-600 shadow-sm">
              Get Your Offer Now
            </Button>
          </div>
        </div>
      </section>

    )
}