import { faqs, offMarketFaqs } from "../faqs";
import FaqCard from "../components/FaqCard";
import { useState } from "react";

function Faqs() {
  const [active, setActive] = useState("rent-to-own")
  return (
    <section className="flex flex-col justify-center items-center gap-6 md:gap-10 px-5 py-10">
      <div className="flex items-center gap-3 bg-gray-100 px-1.5 py-1 rounded">
        <button type="button" onClick={() => setActive("rent-to-own")} className={`text-lg font-semibold px-3 py-1 rounded ${active === "rent-to-own" ? "bg-white" : "bg-transparent"}`}>Rent To Own FAQs</button>
        <button type="button" onClick={() => setActive("off-market")} className={`text-lg font-semibold px-3 py-1 rounded ${active === "off-market" ? "bg-white" : "bg-transparent"}`}>Off Market FAQs</button>
      </div>
      {
        active === "rent-to-own" ? (
        <div className="h-max flex flex-col md:flex-row md:flex-wrap justify-center items-center md:items-start gap-6 md:gap-10">
          {
            faqs.map((faq, index) => (
              <div key={index}>
                <FaqCard faq={faq} />
              </div>
            ))
          }
        </div>
        ): (
        <div className="h-max flex flex-col md:flex-row md:flex-wrap justify-center items-center md:items-start gap-6 md:gap-10">
          {
            offMarketFaqs.map((faq, index) => (
              <div key={index}>
                <FaqCard faq={faq} />
              </div>
            ))
          }
        </div>
        )
      }
    </section>
  )
}

export default Faqs