import React, { useState, useEffect } from "react";
import Personal from "./Personal";
import Address from "./Address";
import Confirm from "./Confirm";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const { isValid, validationErrors } = validateStep(currentStep);
    if (isValid) setCurrentStep(currentStep + 1);
    setErrors(validationErrors);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log("Form Submitted", formData);
  };

  const validateStep = (step) => {
    const newErrors = {};
    let isValid = true;

    // Step 1 validation
    if (step === 1) {
      if (!formData.name) {
        newErrors.name = "Name is required";
        isValid = false;
      }
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email format";
        isValid = false;
      }
      if (!formData.phone) {
        newErrors.phone = "Phone is required";
        isValid = false;
      }
    }
    if (step === 2) {
      if (!formData.addressLine1) {
        newErrors.addressLine1 = "Address Line 1 is required";
        isValid = false;
      }

      if (!formData.city) {
        newErrors.city = "City is required";
        isValid = false;
      }
      if (!formData.state) {
        newErrors.state = "State is required";
        isValid = false;
      }
      if (!formData.zipCode) {
        newErrors.zipCode = "Zip Code is required";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return { isValid, validationErrors: newErrors };
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) setFormData(savedData);
  }, []);

  return (
    <div className="w-[50%] mx-auto my-8 p-6 bg-[#a7bcb9]  rounded-md  shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)] ">
      <h2 className=" lg:text-3xl  font-semibold mb-4 flex justify-center items-center  ">
        MULTI-STEP FORM
      </h2>
      <div className="border-b-2 mb-4">
        <div className="flex justify-between mb-2 text-xs lg:text-lg items-center text-center ">
          <span
            className={`${
              currentStep === 1
                ? "text-[#e0ebeb]  bg-[#24527a] px-3 py-2 rounded-full animate-bounce shadow-2xl "
                : "hidden lg:block"
            }`}
          >
            Personal Information
          </span>
          <span
            className={`${
              currentStep === 2
                ? "text-[#e0ebeb]  bg-[#24527a] px-3 py-2 rounded-full animate-bounce shadow-2xl"
                : "hidden lg:block"
            }`}
          >
            Address Information{" "}
          </span>
          <span
            className={`${
              currentStep === 3
                ? "text-[#e0ebeb]  bg-[#24527a] px-3 py-2 rounded-full animate-bounce shadow-2xl"
                : "hidden lg:block"
            }`}
          >
            Confirmation
          </span>
        </div>
      </div>

      {currentStep === 1 && (
        <Personal
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
        
      )}
      {currentStep === 2 && (
        <Address
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
      )}
      {currentStep === 3 && <Confirm formData={formData} />}

    {
      currentStep === 1 && (
        <div>
          <p className="text-red-500 text-sm">* Mandatory fields</p>
        </div>
      )
    }

{
      currentStep === 2 && (
        <div>
          <p className="text-red-500 text-sm">* Mandatory fields</p>
        </div>
      )
    }
      <div className="flex justify-between mt-4 text-sm md:text-lg">
        <button
          className="bg-[#24527a] text-white px-4 py-2 rounded-md"
          onClick={handleBack}
          disabled={currentStep === 1}
        >
          Back
        </button>
        {currentStep < 3 ? (
          <button
            className="bg-[#24527a] text-white px-4 py-2 rounded-md"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button
            className="bg-[#24527a] text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
