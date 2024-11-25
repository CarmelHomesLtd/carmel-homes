import { useState } from "react"
import oldHouse from "./../../../assets/old-house.jpg"
import Button from "global/Button";

export const HeroSection = () => {
  const [propertyAddress, setPropertyAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
    return (
      <section className="relative flex w-full h-[900px]">
        <img className="w-full h-full object-cover object-center brightness-75" src={oldHouse} aria-roledescription="front-facing brown duplex house"/>
        <div className="absolute grid content-center inset-0 text-center p-5">
          <div className="grid gap-2">
            <h1 className="text-white text-5xl [letter-spacing:0.15rem] font-extrabold">A Quick and Stress-Free Way to Sell Your Property in Ontario, Canada</h1>
            <p className="text-white text-2xl">Get a FREE, no-obligation offer in just 72 hours or less. Simply enter your property details, and we’ll handle the rest!</p>
          </div>
          <form name="off-market-deal" method="post" className="flex flex-col gap-3 mt-5 w-full max-w-screen-sm mx-auto">
            <input type="hidden" name="form-name" value="off-market-deal" />
            <input
              className="carmel-input"
              type="text"
              id="property-address"
              name="property-address"
              placeholder="Enter property address"
              value={propertyAddress}
              onChange={(e) => setPropertyAddress(e.target.value)}
            />
            <input
              className="carmel-input"
              type="text"
              id="phone-number"
              name="phone-number"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              className="carmel-input"
              type="text"
              id="email-address"
              name="email-address"
              placeholder="Enter email address"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <Button theme="primary" attributes={{ type: "submit" }} className="w-fit mx-auto shadow-slate-600 shadow-sm">
              Get Your Offer Now
            </Button>
          </form>
        </div>
      </section>

    )
}