import { Link } from "react-router-dom";
import oldHouse from "./../../../assets/old-house.jpg"
import Button from "global/Button";

export const HeroSection = () => {
    return (
      <section className="relative flex w-full h-[900px]">
        <img className="w-full h-full object-cover object-center brightness-75" src={oldHouse} aria-roledescription="front-facing brown duplex house"/>
        <div className="absolute grid gap-10 content-center inset-0 text-center p-5">
          <div className="grid gap-2">
            <h1 className="text-white text-5xl [letter-spacing:0.15rem] font-extrabold">A Quick and Stress-Free Way to Sell Your Property in Ontario, Canada</h1>
            <p className="text-white text-2xl">Get a FREE, no-obligation offer in just 72 hours or less. Simply enter your property details, and we’ll handle the rest!</p>
          </div>
          <Link to="/off-market-form">
            <Button theme="primary" attributes={{ type: "button" }} className="w-fit mx-auto shadow-slate-600 shadow-sm">
              Get Your Offer Now
            </Button>
          </Link>
        </div>
      </section>

    )
}