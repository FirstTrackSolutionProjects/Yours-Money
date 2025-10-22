import React, { useState } from "react";


const HomeLoan = () => {
  const [sameAddress, setSameAddress] = useState(false);
const [formData, setFormData] = useState({
  // Personal Details
  title: "",
  fullName: "",
  email: "",
  stdCode: "+91",
  phone: "",
  altStdCode: "+91",
  altPhone: "",
  dob: "",
  gender: "",
  maritalStatus: "",
  spouseName: "",
  childrenCount: "",
  fatherName: "",
  motherName: "",
  residence: "",
  state: "",
  city: "",
  pincode: "",
  landmark: "",
  country: "",
  permanentAddress: "",
  presentAddress: "",
  
  // Identification & Income
  aadhaar: "",
  pan: "",
  income: "",
  
  // Profession Details
  profession: "",            // Business / Service
  professionType: "",        // e.g., Retail, Private Job
  organizationType: "",      // Proprietorship, Partnership, Private Limited
  ownerType: "",             // Own / Rented
  industry: "",
  businessName: "",
  yearsInBusiness: "",
  annualTurnover: "",
  businessAddress: "",
  businessCity: "",
  businessState: "",
  businessPincode: "",
  businessCountry: "",
  
  organizationName: "",      // Company name for Service
  yearsInJob: "",
  monthlyIncome: "",
  officeAddress: "",
  officeCity: "",
  officeState: "",
  officePincode: "",
  officeCountry: "",
  
  // Property / Loan Info
  homeLocation: "",
  propertyValue: "",
  loanAmount: "",
  purposeOfLoan: "",
  
  // Bank Details
  accountHolderName: "",
  bankName: "",
  accountNumber: "",
  ifsc: "",
  bankProof: "",
  
  // Documents
  aadhaarFile: "",
  panFile: "",
  photo: "",
  gstFile: "",
  msmeFile: "",
  electricityBill: "",
  tradelicense: "",
  foodlincense: "",
  druglincense: "",
  bankStatement: "",
  cinFile: "",
  companyPan: "",
  companyTan: "",
  rentAgreement: "",
  partnershipDeed: "",
 
  itr1: "",
  itr2: "",
  itr3: "",
  computation1: "",
  computation2: "",
  computation3: "",
  salarySlip: "",
 
});


  const [files, setFiles] = useState({
    aadhaarFile: "",
    panFile: "",
    photo: "",
    bankProof: "",
    salarySlip: "",
  })

  const [showExperienceDropdown, setShowExperienceDropdown] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  }

   const handleSameAddress = (e) => {
    const isChecked = e.target.checked;
    setSameAddress(isChecked); // ✅ this line was missing
    if (isChecked) {
      setFormData((prev) => ({
        ...prev,
        permanentAddress: prev.presentAddress,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        permanentAddress: "",
      }));
    }
  };

  const uploadFile = async (file, filetype, filename) => {
    try {
      const putUrl = await getPutObjectUrlService(filename, filetype, false);
      await putObjectService(putUrl, file, filetype);
    } catch (error) {
      console.error("File upload error:", error);
      throw new Error("File upload failed");
    }
  }
  
  const handleFileUpload = async () => {
    try{
      let isMissingFile = false;
      Object.keys(files).forEach((key) => {
        if (!files[key]) {
          isMissingFile = true;
          toast.error(`${key} is required`);
        }
      })
      if (isMissingFile) return;

      await Promise.all(
        Object.keys(files).map(async (key) => {
          const file = files[key];
          const filetype = file.type;
          const filename = `loans/personal-loans/${key}-${v4()}`;
          await uploadFile(file, filetype, filename);
          setFormData((prev) => ({
            ...prev,
            [key]: filename, // Store the filename in formData
          }));
        })
      )
    } catch (error) {
      console.error(error);
      toast.error("File upload failed: " + error.message);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await handleFileUpload();
      console.log("Personal Loan Application:", formData);
      await applyForHomeLoanService(formData);
      toast.success("Personal Loan Application Submitted Successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.message || "Failed to submit the form");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded shadow space-y-6 p-8">

       <div className="grid lg:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Left Side - Image */}
          <img
            src="/Loan/home-loan.jpg"
            alt="Loan"
            className="w-full h-96 object-cover lg:h-auto"
          />
          </div>
          
      {/* Personal Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select name="title" value={formData.title} onChange={handleChange} className="p-2 border rounded" required>
            <option value="">Select Title</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Miss</option>
            <option>Dr</option>
          </select>

          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="p-2 border rounded" required />

          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-2 border rounded" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="flex gap-2">
            <select name="stdCode" value={formData.stdCode} onChange={handleChange} className="p-2 border rounded w-1/3">
              <option value="+91">+91 🇮🇳</option>
            </select>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="p-2 border rounded w-full" required />
          </div>

          {/* Alternate Phone Number */}
          <div className="flex gap-2">
            <select
              name="altStdCode"
              value={formData.altStdCode}
              onChange={handleChange}
              className="p-2 border rounded w-1/3"
            >
              <option value="+91">+91 🇮🇳</option>
              <option value="+1">+1 🇺🇸</option>
              <option value="+44">+44 🇬🇧</option>
          
            </select>
            <input
              type="tel"
              name="altPhone"
              value={formData.altPhone}
              onChange={handleChange}
              placeholder="Alternate Number"
              className="p-2 border rounded w-full"
            />
          </div>


          <input
            type="text"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="dd-mm-yyyy"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            className="p-2 border rounded"
            required
          />


          <select name="gender" value={formData.gender} onChange={handleChange} className="p-2 border rounded" required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

      
      </div>

      {/* Address Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Present Address Details</h3>
         <select name="residence" value={formData.residence} onChange={handleChange} className="w-full p-2 border rounded mb-2" required>
          <option value="">Residence Type</option>
           <option value="Own">Own</option>
         <option value="Rented">Rented</option>
         </select>

        <input type="text" name="presentAddress" value={formData.presentAddress} onChange={handleChange} placeholder="Present Address" className="w-full p-2 border rounded mb-2" required />
        <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} placeholder="Landmark" className="w-full p-2 border rounded mb-2" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
         
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="p-2 border rounded" required />
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" className="p-2 border rounded" required />
          <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="p-2 border rounded" required />
         <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
          </select>

        </div>

        <label className="flex items-center gap-2 mb-2">
          <input type="checkbox" onChange={handleSameAddress} />
          Same as Present Address
        </label>

        {!sameAddress && (
            <input
              type="text"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              placeholder="Permanent Address"
              className="w-full p-2 border rounded"
              required
            />
          )}

        </div>


      {/* Family Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Father's Name" className="p-2 border rounded" required />
          <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Mother's Name" className="p-2 border rounded" required />
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="p-2 border rounded" required>
            <option value="">Marital Status</option>
            <option>Unmarried</option>
            <option>Married</option>
            <option>Single</option>
          </select>

          {formData.maritalStatus === "Married" && (
            <>
              <input type="text" name="spouseName" value={formData.spouseName} onChange={handleChange} placeholder="Spouse Name" className="p-2 border rounded" />
              <input type="number" name="childrenCount" value={formData.childrenCount} onChange={handleChange} placeholder="Children" className="p-2 border rounded" />
            </>
          )}
        </div>
      </div>

      {/* KYC Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">KYC Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="aadhaar" value={formData.aadhaar} onChange={handleChange} placeholder="Aadhaar Number" className="p-2 border rounded" required />
          <input type="text" name="pan" value={formData.pan} onChange={handleChange} placeholder="PAN Number" className="p-2 border rounded" required />
        </div>
      </div>

    {/* Employment Details */}
<div>
  <h3 className="text-xl font-semibold text-gray-900 mb-4">PROFESSION</h3>
  <select
    name="profession"
    value={formData.profession}
    onChange={handleChange}
    className="w-full p-2 border rounded mb-4"
    required
  >
    <option value="">Select Profession</option>
    <option value="Business">Business</option>
    <option value="Service">Service</option>
  </select>

  {/* Business Fields */}
  {formData.profession === "Business" && (
    <>
      <select
        name="professionType"
        value={formData.professionType}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      >
        <option value="">Select Profession Type</option>
        <option value="Retail/Shop/Mart">Retail/Shop/Mart</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Freelancer">Freelancer</option>
        <option value="Other">Other</option>
      </select>

      <select
        name="organizationType"
        value={formData.organizationType}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      >
        <option value="">Select Organization Type</option>
        <option value="Proprietorship">Proprietorship</option>
        <option value="Partnership">Partnership</option>
        <option value="Private Limited">Private Limited</option>
        <option value="Other">Other</option>
      </select>

      <select
        name="ownerType"
        value={formData.ownerType}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      >
        <option value="">Business Ownership Type</option>
        <option value="own">Own</option>
        <option value="rented">Rented</option>
      </select>

      <input type="text" name="industry" value={formData.industry} onChange={handleChange} placeholder="Industry" className="w-full p-2 border rounded mb-4" required />
      <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Business Name" className="w-full p-2 border rounded mb-4" required />
      <input type="number" name="yearsInBusiness" value={formData.yearsInBusiness} onChange={handleChange} placeholder="Years in Business" className="w-full p-2 border rounded mb-4" required />
      <input type="number" name="annualTurnover" value={formData.annualTurnover} onChange={handleChange} placeholder="Annual Turnover" className="w-full p-2 border rounded mb-4" required />
      <input type="text" name="businessAddress" value={formData.businessAddress} onChange={handleChange} placeholder="Business Address" className="w-full p-2 border rounded mb-4" required />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <input type="text" name="businessCity" value={formData.businessCity} onChange={handleChange} placeholder="Business City" className="p-2 border rounded" required />
        <input type="text" name="businessState" value={formData.businessState} onChange={handleChange} placeholder="Business State" className="p-2 border rounded" required />
        <input type="text" name="businessPincode" value={formData.businessPincode} onChange={handleChange} placeholder="Business Pincode" className="p-2 border rounded" required />
        <input type="text" name="businessCountry" value={formData.businessCountry} onChange={handleChange} placeholder="Business Country" className="p-2 border rounded" required />
      </div>
    </>
  )}

  {/* Service Fields */}
  {formData.profession === "Service" && (
    <>
      <select
        name="professionType"
        value={formData.professionType}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      >
        <option value="">Select Profession Type</option>
        <option value="Private Job">Private Job</option>
        <option value="Government Job">Government Job</option>
      </select>

      <input type="text" name="organizationName" value={formData.organizationName} onChange={handleChange} placeholder="Company Name" className="w-full p-2 border rounded mb-4" required />
      <input type="number" name="yearsInJob" value={formData.yearsInJob} onChange={handleChange} placeholder="Years in Job" className="w-full p-2 border rounded mb-4" required />
      <input type="number" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} placeholder="Monthly Income" className="w-full p-2 border rounded mb-4" required />
      <input type="text" name="officeAddress" value={formData.officeAddress} onChange={handleChange} placeholder="Office Address" className="w-full p-2 border rounded mb-4" required />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <input type="text" name="officeCity" value={formData.officeCity} onChange={handleChange} placeholder="City" className="p-2 border rounded" required />
        <input type="text" name="officeState" value={formData.officeState} onChange={handleChange} placeholder="State" className="p-2 border rounded" required />
        <input type="text" name="officePincode" value={formData.officePincode} onChange={handleChange} placeholder="Pincode" className="p-2 border rounded" required />
        <input type="text" name="officeCountry" value={formData.officeCountry} onChange={handleChange} placeholder="Country" className="p-2 border rounded" required />
      </div>
    </>
  )}
</div>

      {/* Property / Loan Info */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">HOME DETAILS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="homeLocation" value={formData.homeLocation} onChange={handleChange} placeholder="Home Location" className="p-2 border rounded" required />
          <input type="number" name="propertyValue" value={formData.propertyValue} onChange={handleChange} placeholder="Property Value" className="p-2 border rounded" required />
          <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} placeholder="Loan Amount" className="p-2 border rounded" required />
          <input type="text" name="purposeOfLoan" value={formData.purposeOfLoan} onChange={handleChange} placeholder="Purpose of Loan" className="p-2 border rounded" required />
        </div>
      </div>


      {/* Bank Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Bank Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="accountHolderName" value={formData.accountHolderName} onChange={handleChange} placeholder="Account Holder Name" className="p-2 border rounded" required />
          <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} placeholder="Bank Name" className="p-2 border rounded" required />
          <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} placeholder="Account Number" className="p-2 border rounded" required />
          <input type="text" name="ifsc" value={formData.ifsc} onChange={handleChange} placeholder="IFSC Code" className="p-2 border rounded" required />
        </div>

        <label className="block mt-4 mb-1">Bank Statement(6 Month)</label>
        <input type="file" name="bankProof" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
      </div>

   {/* Documents Upload */}
<div>
  <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Documents</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

    <div>
      <label className="block mb-1">Aadhaar Card</label>
      <input type="file" name="aadhaarFile" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
    </div>

    <div>
      <label className="block mb-1">PAN Card</label>
      <input type="file" name="panFile" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
    </div>

     {/* Business documents */}

    {formData.profession === "Business" && (
      <>
        <div>
          <label className="block mb-1">GST Certificate</label>
          <input type="file" name="gstFile" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block mb-1">MSME / Udyam Certificate</label>
          <input type="file" name="msmeFile" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block mb-1">Electricity Bill</label>
          <input type="file" name="electricityBill" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-1">Trade License</label>
          <input type="file" name="tradeLicense" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-1">Food License</label>
          <input type="file" name="foodLicense" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-1">Drug License</label>
          <input type="file" name="drugLicense" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-1">1-Year Bank Statement (CA)</label>
          <input type="file" name="bankStatement" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-1">ITR Document 1</label>
          <input type="file" name="itrDocs1" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-1">ITR Document 2</label>
          <input type="file" name="itrDocs2" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-1">ITR Document 3</label>
          <input type="file" name="itrDocs3" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-1">Computation Document 1</label>
          <input type="file" name="computationDocs1" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-1">Computation Document 2</label>
          <input type="file" name="computationDocs2" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label className="block mb-1">Computation Document 3</label>
          <input type="file" name="computationDocs3" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" />
        </div>

        
        {/* Rented Business Owner */}
        {formData.ownerType === "rented" && (
          <div>
            <label className="block mb-1">Rent Agreement</label>
            <input type="file" name="rentAgreement" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
          </div>
        )}

        {/* Partnership Organization */}
        {formData.organizationType === "Partnership" && (
          <div>
            <label className="block mb-1">Partnership Deed</label>
            <input type="file" name="partnershipDeed" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
          </div>
        )}

         {/* Private Limited Organization */}
        {formData.organizationType === "Private Limited" && (
          <>
            <div>
              <label className="block mb-1">Company Identification Number (CIN)</label>
              <input type="file" name="cinFile" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block mb-1">Company PAN</label>
              <input type="file" name="companyPan" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block mb-1">Company TAN</label>
              <input type="file" name="companyTan" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
            </div>
          </>
        )}

      </>
    )}

    {/* Service Profession */}
    {formData.profession === "Service" && (
      <div>
        <label className="block mb-1">Salary Slip(Last 3 months)</label>
        <input type="file" name="salarySlip" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className="w-full p-2 border rounded" required />
      </div>
    )}

  </div>
</div>

      {/* Submit Button */}
      <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
        Apply
      </button>
    </form>
  );
};

export default HomeLoan;