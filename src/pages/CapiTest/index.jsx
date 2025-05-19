export default function CapiTest() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/.netlify/functions/capi-test", {
        method: "POST",
        body: JSON.stringify({ ...data, event_source_url: window.location.href }),
      });

      const result = await response.json(); // or response.text()
      console.log("Success:", result);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} class="*:block">
      <label for="fname">First Name</label>
      <input id="fname" name="first_name"></input>
      
      <label for="lname">Last Name</label>
      <input id="lname" name="last_name"></input>
      
      <label for="email">Email</label>
      <input id="email" name="email"></input>
      
      <label for="phone">Phone</label>
      <input id="phone" name="phone"></input>
      
      <label for="budget">Budget</label>
      <input id="budget" name="budget"></input>
      
      <label for="service">Service</label>
      <input id="service" name="service"></input>
      
      <label for="city">Where is your project located</label>
      <input id="city" name="city"></input>
      
      <label for="description">Description</label>
      <input id="description" name="description"></input>
      
      <button type="submit">Submit</button>
    </form>
  )
}
