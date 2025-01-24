import { faqs, offMarketFaqs } from "../faqs";
import FaqCard from "../components/FaqCard";
import { Link } from "react-router-dom";

function Faqs() {
  return (
    <section className="flex flex-col justify-center items-center gap-6 md:gap-10 px-5 py-10">
      <Link to="/what-is-rent-to-own" className="text-[1.25rem] md:text-[1.5rem] font-bold">Rent To Own FAQs</Link>
      <div className="h-max flex flex-col md:flex-row md:flex-wrap justify-center items-center md:items-start gap-6 md:gap-10">
        {
          faqs.map((faq, index) => (
            <div key={index}>
              <FaqCard faq={faq} />
            </div>
          ))
        }

      </div>
      <Link to="/off-market-deals" className="text-[1.25rem] md:text-[1.5rem] font-bold">Off Market FAQs</Link>
      <div className="h-max flex flex-col md:flex-row md:flex-wrap justify-center items-center md:items-start gap-6 md:gap-10">
        {
          offMarketFaqs.map((faq, index) => (
            <div key={index}>
              <FaqCard faq={faq} />
            </div>
          ))
        }

      </div>
      </section>
  )
}

export default Faqs