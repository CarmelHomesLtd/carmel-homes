
function Benefits() {
  const benefits = [
    {
      icon: "bg-[url('applynow/apply-1.svg')]",
      title: "No Hidden Fees or Commissions",
      details: "You won’t pay any real estate commissions or fees. We handle everything directly, with no agents or middlemen involved. No fees. No surprises.",
    },
    {
      icon: "bg-[url('applynow/apply-2.svg')]",
      title: "Close on Your Terms",
      details: "Whether you need to close quickly or take a little more time, we work on your schedule. You choose the closing date that works best for you, and we’ll make it happen.",
    },
    {
      icon: "bg-[url('applynow/apply-3.svg')]",
      title: "Cash Offers, Fair and Competitive",
      details: "We provide a competitive cash offer based on the value of similar homes in your area. No low-ball offers—just a fair price for your property in its current condition.",
    },
    {
      icon: "bg-[url('applynow/apply-3.svg')]",
      title: "No Repairs Required",
      details: "We purchase properties as-is—no need for you to invest in repairs, upgrades, or even cleaning. Leave it all to us, including any junk or items you don’t want to take with you.",
    },
    {
      icon: "bg-[url('applynow/apply-3.svg')]",
      title: "No Showings or Open Houses",
      details: "Avoid the hassle of prepping for showings. When you sell to us, there’s no need for cleaning, staging, or having strangers walk through your home. We’ll take it as it is.",
    },
    {
      icon: "bg-[url('applynow/apply-3.svg')]",
      title: "No Cleaning Necessary",
      details: "No matter the state of your home, you can walk away without lifting a finger. We’ll take care of everything, including cleaning and clearing out the property.",
    },
  ]
  
  return (
    <div className="flex flex-col w-full max-w-screen-2xl gap-6 py-5 px-[clamp(1.25rem,7%,2.5rem)] mx-auto">
      <h2 className="text-[2rem] font-bold text-center">Need to Sell Your Property Quickly? We Make It Simple.</h2>
      <p className="text-lg text-gray-600 text-center">Whether you&#39;re selling a house, condo, townhouse, or vacant land in Ontario, we’re here to serve
you with ease and speed. Carmel Homes Ltd is committed to making the process fast and
stress-free.</p>
      <div className="hidden lg:grid grid-cols-3 justify-items-center mx-auto gap-5">
        {
          benefits.map((item, index) => (
            <div className="flex gap-2" key={index}>
              <div className="w-[clamp(16rem,70%,27rem)]">
                <div className="flex items-center gap-2">
                  <div className={`w-5 h-7 bg-[url('whatisrenttoown/brown-bullet.svg')] bg-contain bg-no-repeat bg-center`} role="img" aria-roledescription="icon" />
                  <h3 className="font-bold">{item.title}</h3>
                </div>
                <p>{item.details}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Benefits