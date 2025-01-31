import PropTypes from "prop-types";

function FormButtons() {
  return (
    <div className="w-full flex flex-col justify-between sm:flex-row gap-3 z-[3]">
      <input className="bg-brown-primary text-white text-[1.5rem] py-[0.5rem] [font-variant:small-caps] px-6 text-sm lg:text-lg font-bold rounded-[10px] cursor-pointer" type="submit" value="Submit" />
    </div>
  )
}

FormButtons.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
}

export default FormButtons