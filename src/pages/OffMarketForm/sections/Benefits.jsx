
function OffMarketBenefits() {
  const benefits = [
    {
      icon: "bg-[url('applynow/apply-1.svg')]",
      title: "Response in 24 hours",
      details: "We aim to get back to you and start the process as soon as possible",
    },
    {
      icon: "bg-[url('applynow/apply-2.svg')]",
      title: "No commitment",
      details: "You’re not committing to anything by completing this application",
    },
    {
      icon: "bg-[url('applynow/apply-3.svg')]",
      title: "Creating a win-win situation",
      details: "We aim to make our process fast in order to finalize the sale on time",
    },
  ]
  
  return (
    <div className="sticky top-0 flex flex-col w-full lg:w-[clamp(25rem,30%,35rem)] gap-6 py-32">
      {/* <h2 className="text-[2rem] font-bold text-center">Apply Now</h2> */}
      <div className="hidden lg:flex flex-col gap-5">
        {
          benefits.map((item, index) => (
            <div className="flex gap-2" key={index}>
              <div className={`${item.icon} bg-center bg-cover bg-no-repeat w-12 h-12`} />
              <div className="w-[clamp(16rem,70%,27rem)]">
                <p className="font-bold">{item.title}</p>
                <p>{item.details}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OffMarketBenefits