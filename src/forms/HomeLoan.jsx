import React, { useRef } from "react";

const HomeLoan = () => {
  const formRef = useRef();
  const { homeLoanFormFields, setHomeLoanFormFields } = useApp()
  
  const handleSubmit = async () => {
    try {
      const formData = formRef?.current?.formData;
      await applyForHomeLoanService(formData);
      toast.success("Form submitted successfully!")
    } catch (error) {
      console.error(error)
      toast.error(error?.message || "Failed to submit form")
    }
  }

  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
      <div className="grid lg:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left Side - Image */}
        <img
          src="/Loan/home-loan.jpg"
          alt="Loan"
          className="w-full h-96 object-cover lg:h-auto"
        />
      </div>
      <CustomForm 
        ref={formRef}
        fields={homeLoanFormFields}
        setFields={setHomeLoanFormFields}
        handleSubmit={handleSubmit}
      />
      <CustomButton 
        onClick={() => formRef?.current?.submitForm()}
        title={formRef?.current?.loadingState || 'SUBMIT'}
        disabled={formRef?.current?.loadingState}
      />
    </div>
  )
}
export default HomeLoan;
