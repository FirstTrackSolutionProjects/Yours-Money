import CustomButton from "@/components/CustomComponents/CustomButton";
import CustomForm from "@/components/CustomComponents/CustomForm";
import { useApp } from "@/contexts/AppContext";
import applyForInsuranceService from "@/services/insuranceServices/applyForInsuranceService";
import { useRef } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Insurance = () => {
  const formRef = useRef();
  const { insuranceLoanFormFields, setInsuranceLoanFormFields } = useApp();

  const handleSubmit = async () => {
    try {
      const formData = formRef?.current?.formData;
      await applyForInsuranceService(formData);
      toast.success("Insurance loan form submitted successfully!");
    } catch (error) {
      console.error(error);
      toast.error(error?.message || "Failed to submit insurance loan form");
    }
  };

  return (
    <>
    <Helmet>
            <title>Insurance | FTST </title>
            <meta
              name="description"
              content="Apply for personal, business, home, car, education, and other loans with FTST Job Consulting. Quick approval and minimal documentation."
            />
          </Helmet>

    <div className="max-w-7xl mx-auto p-4 flex flex-col items-center gap-4">
      <div className="grid lg:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden">
           {/* Left Side - Image */}
           <img
             src="/images/insurance.jpg"
             alt="Loan"
             className="w-full h-96 object-cover lg:h-auto"
           />
           </div>

      <CustomForm
        ref={formRef}
        fields={insuranceLoanFormFields}
        setFields={setInsuranceLoanFormFields}
        handleSubmit={handleSubmit}
      />

      <CustomButton
        onClick={() => formRef?.current?.submitForm()}
        title={formRef?.current?.loadingState || "SUBMIT"}
        disabled={formRef?.current?.loadingState}
      />
    </div>
    </>
  );
};

export default Insurance;
