import React, { createContext, useState, useEffect, useContext } from "react";
import z from "zod";
import { v4 } from "uuid";
import {  TITLES, GENDERS, MARITAL_STATUS, RESIDENCE_OWNERSHIP_TYPES,BUSINESS_PROFESSION_TYPES, BUSINESS_ORGANIZATION_TYPES, BUSINESS_OWNERSHIP_TYPES, GET_PROFESSION_TYPES, GET_PROFESSION_TYPES_VALIDATION, MORTGAGE_LOAN_COUNTRIES, MORTGAGE_LOAN_STD_CODES, MORTGAGE_LOAN_PROFESSIONS, HOME_LOAN_COUNTRIES, HOME_LOAN_STD_CODES, HOME_LOAN_PROFESSIONS, 
INSURANCE_COUNTRIES, INSURANCE_TYPES, INSURANCE_PROFESSIONS } from "../constants";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [formUuid, setFormUuid] = useState(v4());
    const refreshFormUuid = () => {
        setFormUuid(v4());
    }

    //////Mortgage Loan Form Fields//////////
const [mortgageLoanFormFields, setMortgageLoanFormFields] = useState({
     photo: {
            category: "PERSONAL DETAILS",
            inputType: 'photo',
            required: true,
            label: "Photo",
            key: `loans/mortageLoans/${formUuid}/photo-${v4()}`,
            allowedTypes: ['image/jpeg', 'image/png'],
            unsupportedTypeMessages: "Only PNG and JPG files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Photo is required"
                : issue.code === "invalid_type"
                ? "Invalid Photo"
                : undefined
            }).min(1, {error: "Photo is required"})
        },

    title: {
        label: "Title",
        inputType: "select",
        required: true,
        options: [],
        getOptions: () => TITLES,
        validation: z.enum(TITLES, { error: 'Title is required' }),
        colSpan: 2
    },
    fullName: {
        label: "Full Name",
        inputType: "text",
        required: true,
        validation: z.string({
            error: issue =>
                issue.input === undefined
                    ? 'Full name is required'
                    : issue.code === 'invalid_type'
                        ? 'Full name must be string'
                        : undefined
        }).min(3, { error: 'Full name must be at least 3 characters' }),
        colSpan: 10
    },
    email: {
        label: "Email",
        inputType: "email",
        required: true,
        validation: z.string({
            error: issue =>
                issue.input === undefined
                    ? 'Email is required'
                    : issue.code === 'invalid_type'
                        ? 'Email must be string'
                        : undefined
        }).email({ message: 'Invalid email address' }),
        colSpan: 6
    },
    stdCode: {
        label: "STD Code",
        inputType: "select",
        required: true,
        options: [],
        getOptions: () => MORTGAGE_LOAN_STD_CODES,
        validation: z.enum(MORTGAGE_LOAN_STD_CODES, { error: 'STD Code is required' }),
        colSpan: 2
    },
    phone: {
        label: "Phone",
        inputType: "text",
        required: true,
        validation: z.string({
            error: issue =>
                issue.input === undefined
                    ? 'Phone number is required'
                    : issue.code === 'invalid_type'
                        ? 'Phone number must be string'
                        : undefined
        }).regex(/^[0-9]{10}$/, { error: 'Enter valid 10-digit Indian mobile number' }),
        colSpan: 4
    },
    altStdCode: {
        label: "Alt. STD Code",
        inputType: "select",
        required: false,
        options: [],
        getOptions: () => MORTGAGE_LOAN_STD_CODES,
        validation: z.enum(MORTGAGE_LOAN_STD_CODES, { error: 'Alternate STD Code is required' }).optional(),
        colSpan: 2
    },
    altPhone: {
        label: "Alt. Phone",
        inputType: "text",
        required: false,
        validation: z.string({
            error: issue =>
                issue.input === undefined
                    ? 'Alternate phone number is required'
                    : issue.code === 'invalid_type'
                        ? 'Alternate phone number must be string'
                        : undefined
        }).regex(/^[0-9]{10}$/, { error: 'Enter valid 10-digit Indian mobile number' }).optional(),
        colSpan: 4
    },
    dob: {
        label: "Date of Birth",
        inputType: "date",
        required: true,
        validation: z.string({
            error: issue =>
                issue.input === undefined
                    ? 'Date of birth is required'
                    : issue.code === 'invalid_type'
                         ? 'DOB must be string'
                    : undefined
              }).regex(/^\d{4}-\d{2}-\d{2}$/, { error: 'DOB must be in yyyy-mm-dd format' }),
            colSpan: 4
        },
        gender: {
            label: "Gender",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => GENDERS,
            validation: z.enum(GENDERS, { error: 'Gender is required' }),
            colSpan: 4
        },

        residence: {
            category: "PRESENT ADDRESS DETAILS",
            label: "Residence",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => RESIDENCE_OWNERSHIP_TYPES,
            validation: z.enum(RESIDENCE_OWNERSHIP_TYPES, { error: 'Residence type is required' }),
            colSpan: 12
        },
        presentAddress: {
            label: "Present Address",
            inputType: "textField",
            maxLength:200,
            required: true,
            validation: z.string({
                error: issue =>
                issue.input === undefined
                    ? 'Present address is required'
                    : issue.code === 'invalid_type'
                    ? 'Present address must be string'
                    : undefined
            }).min(5, { error: 'Present address must be at least 5 characters' })
            .max(200, "Present address must be less than 200 characters"),
            colSpan: 12
        },
        landmark: {
            label: "Landmark",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                issue.input === undefined
                    ? 'Landmark is required'
                    : issue.code === 'invalid_type'
                    ? 'Landmark must be string'
                    : undefined
            }).min(3, { error: 'Landmark must be at least 3 characters' }),
            colSpan: 12
        },
        city: {
            label: "City",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                issue.input === undefined
                    ? 'City is required'
                    : issue.code === 'invalid_type'
                    ? 'City must be string'
                    : undefined
            }).min(2, { error: 'City must be at least 2 characters' }),
            colSpan: 3
        },
        state: {
            label: "State",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                    issue.input === undefined
                        ? 'State is required'
                        : issue.code === 'invalid_type'
                        ? 'State must be string'
                        : undefined
                }).min(2, { error: 'State must be at least 2 characters' }),
            colSpan: 3
        },
        pincode: {
            label: "Pincode",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                issue.input === undefined
                ? 'Pincode is required'
                : issue.code === 'invalid_type'
                ? 'Pincode must be string'
                : undefined
            }).regex(/^[1-9][0-9]{5}$/, { error: 'Enter a valid 6-digit Indian pincode' }),
            colSpan: 3
        },
        country: {
            label: "Country",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => MORTGAGE_LOAN_COUNTRIES,
            validation: z.enum(MORTGAGE_LOAN_COUNTRIES, { error: 'Country is required' }),
            colSpan: 3
        },
        sameAsPresentAddress: {
            label: "Same as Present Address",
            inputType: "switch",
            required: true,
            validation: z.boolean({ error: 'This field is required' }),
            colSpan: 12
        },
        permanentAddress: {
            label: "Permanent Address",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return !formData.sameAsPresentAddress;
            },
            validation: z.string({
                error: issue =>
                issue.input === undefined
                    ? 'Permanent address is required'
                    : issue.code === 'invalid_type'
                    ? 'Permanent address must be string'
                    : undefined
            }).min(5, { error: 'Permanent address must be at least 5 characters' }),
            colSpan: 12
        },

        fatherName: {
            category: "FAMILY DETAILS",
            label: "Father's Name",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                issue.input === undefined
                    ? "Father's name is required"
                    : issue.code === 'invalid_type'
                    ? "Father's name must be string"
                    : undefined
            }).min(3, { error: "Father's name must be at least 3 characters" }),
        },
        motherName: {
            label: "Mother's Name",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                issue.input === undefined
                    ? "Mother's name is required"
                    : issue.code === 'invalid_type'
                    ? "Mother's name must be string"
                    : undefined
            }).min(3, { error: "Mother's name must be at least 3 characters" }),
        },
        maritalStatus: {
            label: "Marital Status",
            inputType: "select",
            required: true,
            options:[],
            getOptions: () => MARITAL_STATUS,
            validation: z.enum(MARITAL_STATUS, { error: 'Marital status is required' }),
        },
        spouseName: {
            label: "Spouse's Name",
            inputType: "text",
            required: false,
            conditions: (formData) => {
                return formData.maritalStatus === "Married";
            },
            validation: z.string({
                error: issue =>
                issue.input === undefined
                    ? "Spouse's name is required"
                    : issue.code === 'invalid_type'
                    ? "Spouse's name must be string"
                    : undefined
            }).min(3, { error: "Spouse's name must be at least 3 characters" }),
        },
        childrenCount: {
            label: "Children Count",
            inputType: "number",
            required: false,
            conditions: (formData) => {
                return formData.maritalStatus === "Married";
            },
            validation: z.coerce.number({
                error: issue =>
                issue.input === undefined
                    ? 'Children count is required'
                    : issue.code === 'invalid_type'
                    ? 'Children count must be a number'
                    : undefined
            }).min(0, { error: 'Children count cannot be negative' }),
        },
        aadhaar: {
            category: "KYC DETAILS",
            label: "Aadhaar Number",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                issue.input === undefined
                    ? 'Aadhaar number is required'
                    : issue.code === 'invalid_type'
                    ? 'Aadhaar number must be string'
                    : undefined
            }).regex(/^\d{12}$/, { error: 'Aadhaar number must be a 12-digit number' }),
        },
        pan: {
            label: "PAN Number",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                issue.input === undefined
                    ? 'PAN number is required'
                    : issue.code === 'invalid_type'
                    ? 'PAN number must be string'
                    : undefined
            }).regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, { error: 'PAN number must be a valid PAN format' }),
        },
        profession: {
            category: "PROFESSION",
            label: "Profession",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => MORTGAGE_LOAN_PROFESSIONS,
            validation: z.enum(MORTGAGE_LOAN_PROFESSIONS, { error: 'Profession is required' }),
        },
        professionType: {
            label: "Profession Type",
            inputType: "select",
            required: true,
            dependOn: ['profession'],
            options: [],
           getOptions: GET_PROFESSION_TYPES,
            validation: GET_PROFESSION_TYPES_VALIDATION,
            conditions: (formData) => {
                return formData.profession;
            },
        },
         organizationType: {
            label: "Organization Type",
            inputType: "select",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business";
            },
            options: [],
            getOptions: () => BUSINESS_ORGANIZATION_TYPES,
            validation: z.enum(BUSINESS_ORGANIZATION_TYPES, { error: 'Organization type is required' }),
        },
        businessType: {
            label: "Business Ownership Type",
            inputType: "select",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business";
            },
            options: [],
            getOptions: () => BUSINESS_OWNERSHIP_TYPES,
            validation: z.enum(BUSINESS_OWNERSHIP_TYPES, { error: 'Ownership type is required' }),
        },
        industry: {
            label: "Industry",
            inputType: 'text',
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business";
            },
            validation: z.string({
                error: issue => 
                    issue.input == undefined ?
                    "Industry is required":
                    issue.code === "invalid_type"?
                    "Industry must be string":
                    undefined
            }).min(3, {error: "Industry must be atleast 3 characters long"})
        },
        businessName: {
            label: "Business Name",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.string({
                error: issue => 
                    issue.input == undefined ?
                    "Business Name is required":
                    issue.code === "invalid_type"?
                    "Business Name must be string":
                    undefined
            }).min(3, {error: "Business Name must be atleast 3 characters long"})
        },
        businessYears: {
            label: "Years in Business",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.coerce.number({
                error: issue => 
                    issue.input == undefined ?
                    "Years in Business is required":
                    issue.code === "invalid_type"?
                    "Years in Business must be number":
                    undefined
            }).min(1, {error: "Years in Business must be atleast 1 year"})
        },
        businessannualturnover: {
            label: "Annual Turnover",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.coerce.number({
                error: issue => 
                    issue.input == undefined ?
                    "Annual Turnover is required":
                    issue.code === "invalid_type"?
                    "Annual Turnover must be number":
                    undefined
            }).min(1000, {error: "Annual Turnover must be atleast 1000"})
        },
        businessAddress: {
            label: "Business Address",
            inputType: "textField",
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            maxLength: 200,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Business address is required'
                    : issue.code === 'invalid_type'
                    ? 'Business address must be string'
                    : undefined
              }).min(5, { error: 'Business address must be at least 5 characters' })
              .max(200, "Business address must be less than 200 characters"),
            colSpan:12
        },
        businessCity: {
            label: "City",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Business City is required'
                    : issue.code === 'invalid_type'
                    ? 'Business City must be string'
                    : undefined
              }).min(2, { error: 'Business City must be at least 2 characters' }),
            colSpan: 3
        },
        businessState: {
            label: "State",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.string({
                error: issue =>
                    issue.input === undefined
                        ? 'Business State is required'
                        : issue.code === 'invalid_type'
                        ? 'Business State must be string'
                        : undefined
                }).min(2, { error: 'Business State must be at least 2 characters' }),
            colSpan: 3
        },
        businessPincode: {
            label: "Pincode",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                ? 'Business Pincode is required'
                : issue.code === 'invalid_type'
                ? 'Business Pincode must be string'
                : undefined
            }).regex(/^[1-9][0-9]{5}$/, { error: 'Enter a valid 6-digit business pincode' }),
            colSpan: 3
        },
        businessCountry: {
            label: "Country",
            inputType: "select",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            options: [],
            getOptions: () => MORTGAGE_LOAN_COUNTRIES,
            validation: z.enum(MORTGAGE_LOAN_COUNTRIES, { error: 'Business Country is required' }),
            colSpan: 3
        },
        companyName: {
            label: "Company Name",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                issue.input === undefined
                    ? 'Company Name is required'
                    : issue.code === 'invalid_type'
                    ? 'Company Name must be string'
                    : undefined
            }).min(2, { error: 'Company Name must be at least 2 characters' }),
            colSpan: 6
        },
        jobYears: {
            label: "Years in Job",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.coerce.number({
                error: issue =>
                    issue.input === undefined
                ? 'Years in Job is required'
                : issue.code === 'invalid_type'
                ? 'Years in Job must be a number'
                : undefined
            }).min(1, { error: 'Years in Job must be at least 1 year' })
        },
        monthlyIncome: {
            label: "Monthly Income",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service";
            },
            validation: z.coerce.number({
                error: issue =>
                    issue.input === undefined
                ? 'Monthly Income is required'
                : issue.code === "invalid_type"
                ? 'Monthly Income must be a number'
                : undefined
            }).min(1000, { error: 'Monthly Income must be at least ₹1000' })
        },
        officeAddress: {
            label: "Office Address",
            inputType: "textField",
            maxLength: 200,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                issue.input === undefined
                    ? 'Office address is required'
                    : issue.code === 'invalid_type'
                    ? 'Office address must be string'
                    : undefined
            }).min(5, { error: 'Office address must be at least 5 characters' })
            .max(200, "Office address must be less than 200 characters"),
            colSpan:12
        },
        officeCity: {
            label: "City",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                issue.input === undefined
                    ? 'Office City is required'
                    : issue.code === 'invalid_type'
                    ? 'Office City must be string'
                    : undefined
            }).min(2, { error: 'Office City must be at least 2 characters' }),
            colSpan: 3
        },
        officeState: {
            label: "State",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                    issue.input === undefined
                        ? 'Office State is required'
                        : issue.code === 'invalid_type'
                        ? 'Office State must be string'
                        : undefined
                }).min(2, { error: 'Office State must be at least 2 characters' }),
            colSpan: 3
        },
        officePincode: {
            label: "Pincode",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                issue.input === undefined
                ? 'Office Pincode is required'
                : issue.code === 'invalid_type'
                ? 'Office Pincode must be string'
                : undefined
            }).regex(/^[1-9][0-9]{5}$/, { error: 'Enter a valid 6-digit office pincode' }),
            colSpan: 3
        },
        officeCountry: {
            label: "Country",
            inputType: "select",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            options: [],
            getOptions: () => MORTGAGE_LOAN_COUNTRIES,
            validation: z.enum(MORTGAGE_LOAN_COUNTRIES, { error: 'Office Country is required' }),
            colSpan: 3
        },
        mortgageProperty: {
            category: "FINANCIAL DETAILS",
            label: "Mortgage Property",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                issue.input === undefined
                    ? 'Mortgage Property is required'
                    : issue.code === 'invalid_type'
                    ? 'Mortgage Property must be string'
                    : undefined
            }).min(3, { error: 'Mortgage Property must be at least 3 characters' }),
        },
        propertyValue: {
            label: "Property Value",
            inputType: "text",
            required: true,
            validation: z.coerce.number({
                error: issue =>
                issue.input === undefined
                    ? 'Property Value is required'
                    : issue.code === 'invalid_type'
                    ? 'Property Value must be a number'
                    : undefined
            }).min(10000, { error: 'Property Value must be at least ₹10,000' })
        },
        loanAmount: {
            label: "Loan Amount (₹)",
            inputType: "text",
            required: true,
            validation: z.coerce.number({
                error: issue =>
                issue.input === undefined
                ? "Loan Amount is required"
                : issue.code === "invalid_type"
                ? "Loan Amount must be a number"
                : undefined
            })
        },
        purpose: {
            label: "Enter purpose of the loan",
            inputType: 'textField',
            maxLength: 200,
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Purpose is required'
                    : issue.code === 'invalid_type'
                    ? 'Purpose must be string'
                    : undefined
              }).min(5, { error: 'Purpose must be at least 5 characters' })
              .max(200, "Purpose must be less than 200 characters"),
            colSpan: 12
        },
         accountHolderName: {
            category: "BANK DETAILS",
            label: "Account Holder Name",
            inputType: 'text',
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Account Holder Name is required'
                    : issue.code === 'invalid_type'
                    ? 'Account Holder Name must be string'
                    : undefined
              }).min(3, { error: 'Account Holder Name must be at least 3 characters' }),
        },
        bankName: {
            label: "Bank Name",
            inputType: 'text',
            required: true,
            validation: z.string({
                error: issue =>
                    issue.input === undefined
                ? 'Bank Name is required'
                : issue.code === 'invalid_type'
                ? 'Bank Name must be string'
                : undefined
            }).min(3, { error: 'Bank Name must be at least 3 characters' }),
        },
        accountNumber: {
            label: "Account Number",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue => 
                issue.input === undefined
                ? 'Account Number is required'
                : issue.code === "invalid_type"
                ? 'Account Number must be string'
                : undefined
            }).min(5, "Account Number must at least 5 digits")
        },
        ifsc: {
            label: "IFSC",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue => 
                issue.input === undefined
                ? 'IFSC is required'
                : issue.code === "invalid_type"
                ? 'IFSC must be string'
                : undefined
            }).min(5, "IFSC must at least 5 digits")
        },
        bankProof: {
            label: "Bank Statement",
            inputType: 'file',
            required: true,
            key: `loans/mortageLoans/${formUuid}/bankProof-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Bank Statement is required"
                : issue.code === "invalid_type"
                ? "Invalid Bank Statement"
                : undefined
            }).min(1, {error: "Bank Statement is required"})
        },
        aadhaarFile: {
            category: "Upload Documents",
            label: "Aadhaar Card",
            inputType: 'file',
            required: true,
            key: `loans/mortageLoans/${formUuid}/aadhaarFile-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Aadhaar Card is required"
                : issue.code === "invalid_type"
                ? "Invalid Aadhaar Card"
                : undefined
            }).min(1, {error: "Aadhaar Card is required"})
        },
        panFile: {
            label: "PAN Card",
            inputType: 'file',
            required: true,
            key: `loans/mortageLoans/${formUuid}/panFile-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "PAN Card is required"
                : issue.code === "invalid_type"
                ? "Invalid PAN Card"
                : undefined
            }).min(1, {error: "PAN Card is required"})
        },
        // Business-specific fields
        gst: {
            label: "GST Certificate",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/mortageLoans/${formUuid}/gst-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "GST certificate is required"
                : issue.code === "invalid_type"
                ? "Invalid GST Certificate"
                : undefined
            }).min(1, {error: "GST certificate is required"})
        },
        msme: {
            label: "MSME/Udyam Certificate",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/mortageLoans/${formUuid}/msme-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "MSME Certificate is required"
                : issue.code === "invalid_type"
                ? "Invalid MSME/Udyam Certificate"
                : undefined
            }).min(1, {error: "MSME Certificate is required"})
        },
        electricityBill: {
            label: "Electricity Bill",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/mortageLoans/${formUuid}/electricityBill-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Electricity Bill is required"
                : issue.code === "invalid_type"
                ? "Invalid Electricity Bill"
                : undefined
            }).min(1, {error: "Electricity Bill is required"})
        },
        rentagreement: {
            label: "Rent Agreement",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business" && formData.businessType === "Rented",
            key: `loans/mortageLoans/${formUuid}/rentagreement-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Rent Agreement is required"
                : issue.code === "invalid_type"
                ? "Invalid Rent Agreement"
                : undefined
            }).min(1, {error: "Rent Agreement is required"})
        },
        cin: {
            label: "Company Identification Number (CIN)",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business" && formData.organizationType === "Private Limited",
            key: `loans/mortageLoans/${formUuid}/cin-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "CIN is required"
                : issue.code === "invalid_type"
                ? "Invalid CIN"
                : undefined
            }).min(1, {error: "CIN is required"})
        },
        companypan: {
            label: "Company PAN",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business" && formData.organizationType === "Private Limited",
            key: `loans/mortageLoans/${formUuid}/companypan-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Company PAN is required"
                : issue.code === "invalid_type"
                ? "Invalid Company PAN"
                : undefined
            }).min(1, "Company PAN is required")
        },
        companytan: {
            label: "Company TAN",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business" && formData.organizationType === "Private Limited",
            key: `loans/mortageLoans/${formUuid}/companytan-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Company TAN is required"
                : issue.code === "invalid_type"
                ? "Invalid Company TAN"
                : undefined
            }).min(1, "Company TAN is required")
        },
        tradeLicense: {
            label: "Trade License",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/mortageLoans/${formUuid}/tradeLicense-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid Trade License"
                : undefined
            }).optional()
        },
        foodLicense: {
            label: "Food License",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/mortageLoans/${formUuid}/foodLicense-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid Food License"
                : undefined
            }).optional()
        },
        drugLicense: {
            label: "Drug License",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/mortageLoans/${formUuid}/drugLicense-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid Drug License"
                : undefined
            }).optional()
        },
        deedagreement: {
            label: "Partnership Deed",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business" && formData.organizationType === "Partnership",
            key: `loans/mortageLoans/${formUuid}/deedagreement-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Partnership Deed is required"
                : issue.code === "invalid_type"
                ? "Invalid Partnership Deed"
                : undefined
            }).min(1, "Partnership Deed is required")
        },
        bankStatementsCurrent: {
            label: "1 Year Bank Statements (CA)",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/mortageLoans/${formUuid}/bankStatementsCurrent-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "1 Year Bank Statements (CA) is required"
                : issue.code === "invalid_type"
                ? "Invalid Bank Statements"
                : undefined
            }).min(1, {error: "1 Year Bank Statements (CA) is required"})
        },
        // Service-specific fields
        incomeproof: {
            label: "Salary Slip (Last 3 Months)",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Service",
            key: `loans/mortageLoans/${formUuid}/incomeproof-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Salary Slip is required"
                : issue.code === "invalid_type"
                ? "Invalid Salary Slip"
                : undefined
            }).min(1, "Salary Slip is required")
        },
        // ITR fields for Business
        itr1: {
            category: "ITR/Computation Documents",
            label: "ITR - Year 1",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/mortageLoans/${formUuid}/itr1-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "ITR - Year 1 is required"
                : issue.code === "invalid_type"
                ? "Invalid ITR - Year 1"
                : undefined
            }).min(1, {error: "ITR - Year 1 is required"})
        },
        itr2: {
            label: "ITR - Year 2",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/mortageLoans/${formUuid}/itr2-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid ITR - Year 2"
                : undefined
            }).optional()
        },
        itr3: {
            label: "ITR - Year 3",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/mortageLoans/${formUuid}/itr3-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid ITR - Year 3"
                : undefined
            }).optional()
        },
        computation1: {
            label: "Computation - Year 1",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/mortageLoans/${formUuid}/computation1-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Computation - Year 1 is required"
                : issue.code === "invalid_type"
                ? "Invalid Computation - Year 1"
                : undefined
            }).min(1, {error: "Computation - Year 1 is required"})
        },
        computation2: {
            label: "Computation - Year 2",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/mortageLoans/${formUuid}/computation2-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid Computation - Year 2"
                : undefined
            }).optional()
        },
        computation3: {
            label: "Computation - Year 3",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/mortageLoans/${formUuid}/computation3-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid Computation - Year 3"
                : undefined
            }).optional()
        },
    });

    //////////////HOME LOAN FORM FIELDS/////////////////////////////////////
    const [homeLoanFormFields, setHomeLoanFormFields] = useState({
         photo: {
            category: "PERSONAL DETAILS",
            inputType: 'photo',
            required: true,
            label: "Photo",
            key: `loans/homeLoans/${formUuid}/photo-${v4()}`,
            allowedTypes: ['image/jpeg', 'image/png'],
            unsupportedTypeMessages: "Only PNG and JPG files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Photo is required"
                : issue.code === "invalid_type"
                ? "Invalid Photo"
                : undefined
            }).min(1, {error: "Photo is required"})
        },

        title: {
            label: "Title",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => TITLES,
            validation: z.enum(TITLES, { error: 'Title is required' }),
            colSpan: 2
        },
         fullName: {
            label: "Full Name",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Full name is required'
                    : issue.code === 'invalid_type'
                    ? 'Full name must be string'
                    : undefined
              }).min(3, { error: 'Full name must be at least 3 characters' }),
            colSpan: 10
        },
        email: {
            label: "Email",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Email is required'
                    : issue.code === 'invalid_type'
                    ? 'Email must be string'
                    : undefined
              }).email({ error: 'Invalid email address' }),
            colSpan: 6
        },
        stdCode: {
            label: "STD Code",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => HOME_LOAN_STD_CODES,
            validation: z.enum(HOME_LOAN_STD_CODES, { error: 'STD Code is required' }),
            colSpan: 2
        },
        phone: {
            label: "Phone",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Phone number is required'
                    : issue.code === 'invalid_type'
                    ? 'Phone number must be string'
                    : undefined
               }).regex(/^[6-9]\d{9}$/, { error: 'Enter valid 10-digit Indian mobile number' }),
            colSpan: 4
        },
        altStdCode: {
            label: "Alternate STD Code",
            inputType: "select",
            required: false,
            options: [],
            getOptions: () => HOME_LOAN_STD_CODES,
            validation: z.enum(HOME_LOAN_STD_CODES, { error: 'Alternate STD Code is required' }).optional(),
            colSpan: 2
        },
         altPhone: {
            label: "Alternate Phone",
            inputType: "text",
            required: false,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Alternate phone number is required'
                    : issue.code === 'invalid_type'
                    ? 'Alternate phone must be string'
                    : undefined
              }).regex(/^[6-9]\d{9}$/, { error: 'Enter valid 10-digit Indian mobile number' }).optional(),
            colSpan: 4
        },
         dob: {
            label: "Date of Birth",
            inputType: "date",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'DOB is required'
                    : issue.code === 'invalid_type'
                    ? 'DOB must be string'
                    : undefined
              }).regex(/^\d{4}-\d{2}-\d{2}$/, { error: 'DOB must be in yyyy-mm-dd format' }),
            colSpan: 4
        },
        gender: {
            label: "Gender",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => GENDERS,
            validation: z.enum(GENDERS, { error: 'Gender is required' }),
            colSpan: 4
        },
        residence: {
            category: "PRESENT ADDRESS DETAILS",
            label: "Residence",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => RESIDENCE_OWNERSHIP_TYPES,
            validation: z.enum(RESIDENCE_OWNERSHIP_TYPES, { error: 'Residence type is required' }),
            colSpan: 12
        },
        presentAddress: {
            label: "Present Address",
            inputType: "textField",
            maxLength:200,
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Present address is required'
                    : issue.code === 'invalid_type'
                    ? 'Present address must be string'
                    : undefined
              }).min(5, { error: 'Present address must be at least 5 characters' })
              .max(200, "Present address must be less than 200 characters"),
            colSpan: 12
        },
        landmark: {
            label: "Landmark",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Landmark is required'
                    : issue.code === 'invalid_type'
                    ? 'Landmark must be string'
                    : undefined
              }).min(3, { error: 'Landmark must be at least 3 characters' }),
            colSpan: 12
        },
        city: {
            label: "City",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'City is required'
                    : issue.code === 'invalid_type'
                    ? 'City must be string'
                    : undefined
              }).min(2, { error: 'City must be at least 2 characters' }),
            colSpan: 3
        },
        state: {
            label: "State",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                    issue.input === undefined
                        ? 'State is required'
                        : issue.code === 'invalid_type'
                        ? 'State must be string'
                        : undefined
                }).min(2, { error: 'State must be at least 2 characters' }),
            colSpan: 3
        },
        pincode: {
            label: "Pincode",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                ? 'Pincode is required'
                : issue.code === 'invalid_type'
                ? 'Pincode must be string'
                : undefined
            }).regex(/^[1-9][0-9]{5}$/, { error: 'Enter a valid 6-digit Indian pincode' }),
            colSpan: 3
        },
        country: {
            label: "Country",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => HOME_LOAN_COUNTRIES,
            validation: z.enum(HOME_LOAN_COUNTRIES, { error: 'Country is required' }),
            colSpan: 3
        },
         sameAsPresentAddress: {
            label: "Same as Present Address",
            inputType: "switch",
            required: true,
            validation: z.boolean({ error: 'This field is required' }),
            colSpan: 12
        },
        permanentAddress: {
            label: "Permanent Address",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return !formData.sameAsPresentAddress;
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Permanent address is required'
                    : issue.code === 'invalid_type'
                    ? 'Permanent address must be string'
                    : undefined
              }).min(5, { error: 'Permanent address must be at least 5 characters' }),
            colSpan: 12
        },
        fatherName: {
            category: "FAMILY DETAILS",
            label: "Father's Name",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? "Father's name is required"
                    : issue.code === 'invalid_type'
                    ? "Father's name must be string"
                    : undefined
              }).min(3, { error: "Father's name must be at least 3 characters" }),
        },
        motherName: {
            label: "Mother's Name",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? "Mother's name is required"
                    : issue.code === 'invalid_type'
                    ? "Mother's name must be string"
                    : undefined
              }).min(3, { error: "Mother's name must be at least 3 characters" }),
        },
        maritalStatus: {
            label: "Marital Status",
            inputType: "select",
            required: true,
            options:[],
            getOptions: () => MARITAL_STATUS,
            validation: z.enum(MARITAL_STATUS, { error: 'Marital status is required' }),
        },
        spouseName: {
            label: "Spouse's Name",
            inputType: "text",
            required: false,
            conditions: (formData) => {
                return formData.maritalStatus === "Married";
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? "Spouse's name is required"
                    : issue.code === 'invalid_type'
                    ? "Spouse's name must be string"
                    : undefined
              }).min(3, { error: "Spouse's name must be at least 3 characters" }),
        },
        childrenCount: {
            label: "Children Count",
            inputType: "number",
            required: false,
            conditions: (formData) => {
                return formData.maritalStatus === "Married";
            },
            validation: z.coerce.number({
                error: issue =>
                  issue.input === undefined
                    ? 'Children count is required'
                    : issue.code === 'invalid_type'
                    ? 'Children count must be a number'
                    : undefined
              }).min(0, { error: 'Children count cannot be negative' }),
        },
         aadhaar: {
            category: "KYC DETAILS",
            label: "Aadhaar Number",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Aadhaar number is required'
                    : issue.code === 'invalid_type'
                    ? 'Aadhaar number must be string'
                    : undefined
              }).regex(/^\d{12}$/, { error: 'Aadhaar number must be a 12-digit number' }),
        },
        pan: {
            label: "PAN Number",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'PAN number is required'
                    : issue.code === 'invalid_type'
                    ? 'PAN number must be string'
                    : undefined
              }).regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, { error: 'PAN number must be a valid PAN format' }),
        },

        profession: {
            category: "PROFESSION",
            label: "Profession",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => HOME_LOAN_PROFESSIONS,
            validation: z.enum(HOME_LOAN_PROFESSIONS, { error: 'Profession is required' }),
             colSpan: 12
        },
        professionType: {
            label: "Profession Type",
            inputType: "select",
            required: true,
            dependOn: ['profession'],
            options: [],
            getOptions: GET_PROFESSION_TYPES,
            validation: GET_PROFESSION_TYPES_VALIDATION,
            conditions: (formData) => {
                return formData.profession;
            },
        },
        organizationType: {
            label: "Organization Type",
            inputType: "select",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business";
            },
            options: [],
            getOptions: () => BUSINESS_ORGANIZATION_TYPES,
            validation: z.enum(BUSINESS_ORGANIZATION_TYPES, { error: 'Organization type is required' }),
        },
         businessType: {
            label: "Business Ownership Type",
            inputType: "select",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business";
            },
            options: [],
            getOptions: () => BUSINESS_OWNERSHIP_TYPES,
            validation: z.enum(BUSINESS_OWNERSHIP_TYPES, { error: 'Ownership type is required' }),
        },
        industry: {
            label: "Industry",
            inputType: 'text',
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business";
            },
            validation: z.string({
                error: issue => 
                    issue.input == undefined ?
                    "Industry is required":
                    issue.code === "invalid_type"?
                    "Industry must be string":
                    undefined
            }).min(3, {error: "Industry must be atleast 3 characters long"})
        },
        businessName: {
            label: "Business Name",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.string({
                error: issue => 
                    issue.input == undefined ?
                    "Business Name is required":
                    issue.code === "invalid_type"?
                    "Business Name must be string":
                    undefined
            }).min(3, {error: "Business Name must be atleast 3 characters long"})
        },
        businessYears: {
            label: "Years in Business",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.coerce.number({
                error: issue => 
                    issue.input == undefined ?
                    "Years in Business is required":
                    issue.code === "invalid_type"?
                    "Years in Business must be number":
                    undefined
            }).min(1, {error: "Years in Business must be atleast 1 year"})
        },
        businessannualturnover: {
            label: "Annual Turnover",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.coerce.number({
                error: issue => 
                    issue.input == undefined ?
                    "Annual Turnover is required":
                    issue.code === "invalid_type"?
                    "Annual Turnover must be number":
                    undefined
            }).min(1000, {error: "Annual Turnover must be atleast 1000"})
        },
        businessAddress: {
            label: "Business Address",
            inputType: "textField",
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            maxLength: 200,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Business address is required'
                    : issue.code === 'invalid_type'
                    ? 'Business address must be string'
                    : undefined
              }).min(5, { error: 'Business address must be at least 5 characters' })
              .max(200, "Business address must be less than 200 characters"),
            colSpan:12
        },
        businessCity: {
            label: "City",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Business City is required'
                    : issue.code === 'invalid_type'
                    ? 'Business City must be string'
                    : undefined
              }).min(2, { error: 'Business City must be at least 2 characters' }),
            colSpan: 3
        },
        businessState: {
            label: "State",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.string({
                error: issue =>
                    issue.input === undefined
                        ? 'Business State is required'
                        : issue.code === 'invalid_type'
                        ? 'Business State must be string'
                        : undefined
                }).min(2, { error: 'Business State must be at least 2 characters' }),
            colSpan: 3
        },
        businessPincode: {
            label: "Pincode",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.string({
                error: issue =>
                issue.input === undefined
                ? 'Business Pincode is required'
                : issue.code === 'invalid_type'
                ? 'Business Pincode must be string'
                : undefined
            }).regex(/^[1-9][0-9]{5}$/, { error: 'Enter a valid 6-digit business pincode' }),
            colSpan: 3
        },
        businessCountry: {
            label: "Country",
            inputType: "select",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            options: [],
            getOptions: () => HOME_LOAN_COUNTRIES,
            validation: z.enum(HOME_LOAN_COUNTRIES, { error: 'Business Country is required' }),
            colSpan: 3
        },
        companyName: {
            label: "Company Name",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Company Name is required'
                    : issue.code === 'invalid_type'
                    ? 'Company Name must be string'
                    : undefined
              }).min(2, { error: 'Company Name must be at least 2 characters' }),
            colSpan: 6
        },
        jobYears: {
            label: "Years in Job",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.coerce.number({
                error: issue =>
                    issue.input === undefined
                ? 'Years in Job is required'
                : issue.code === 'invalid_type'
                ? 'Years in Job must be a number'
                : undefined
            }).min(1, { error: 'Years in Job must be at least 1 year' })
        },
        monthlyIncome: {
            label: "Monthly Income",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service";
            },
            validation: z.coerce.number({
                error: issue =>
                    issue.input === undefined
                ? 'Monthly Income is required'
                : issue.code === "invalid_type"
                ? 'Monthly Income must be a number'
                : undefined
            }).min(1000, { error: 'Monthly Income must be at least ₹1000' })
        },
        officeAddress: {
            label: "Office Address",
            inputType: "textField",
            maxLength: 200,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Office address is required'
                    : issue.code === 'invalid_type'
                    ? 'Office address must be string'
                    : undefined
              }).min(5, { error: 'Office address must be at least 5 characters' })
              .max(200, "Office address must be less than 200 characters"),
            colSpan:12
        },
        officeCity: {
            label: "City",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Office City is required'
                    : issue.code === 'invalid_type'
                    ? 'Office City must be string'
                    : undefined
              }).min(2, { error: 'Office City must be at least 2 characters' }),
            colSpan: 3
        },
        officeState: {
            label: "State",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                    issue.input === undefined
                        ? 'Office State is required'
                        : issue.code === 'invalid_type'
                        ? 'Office State must be string'
                        : undefined
                }).min(2, { error: 'Office State must be at least 2 characters' }),
            colSpan: 3
        },
        officePincode: {
            label: "Pincode",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                ? 'Office Pincode is required'
                : issue.code === 'invalid_type'
                ? 'Office Pincode must be string'
                : undefined
            }).regex(/^[1-9][0-9]{5}$/, { error: 'Enter a valid 6-digit office pincode' }),
            colSpan: 3
        },
        officeCountry: {
            label: "Country",
            inputType: "select",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            options: [],
            getOptions: () => HOME_LOAN_COUNTRIES,
            validation: z.enum(HOME_LOAN_COUNTRIES, { error: 'Office Country is required' }),
            colSpan: 3
        },
        location: {
            category: "HOME DETAILS",
            label: "Location",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Location is required'
                    : issue.code === 'invalid_type'
                    ? 'Location must be string'
                    : undefined
              }).min(2, { error: 'Location must be at least 2 characters' }),
            colSpan: 6
        },
        propertyValue: {
            label: "Property Value",
            inputType: "text",
            required: true,
            validation: z.coerce.number({
                error: issue =>
                    issue.input === undefined
                ? 'Property Value is required'
                : issue.code === 'invalid_type'
                ? 'Property Value must be a number'
                : undefined
            }).min(100000, { error: 'Property Value must be at least ₹1,00,000' }),
            colSpan: 6
        },
        loanAmount: {
            label: "Loan Amount",
            inputType: "text",
            required: true,
            validation: z.coerce.number({
                error: issue =>
                    issue.input === undefined
                ? 'Loan Amount is required'
                : issue.code === 'invalid_type'
                ? 'Loan Amount must be a number'
                : undefined
            }).min(1000, { error: 'Loan Amount must be at least ₹1000' }),
            colSpan: 6
        },
        purpose: {
            label: "Enter purpose of the loan",
            inputType: 'textField',
            maxLength: 200,
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Purpose is required'
                    : issue.code === 'invalid_type'
                    ? 'Purpose must be string'
                    : undefined
              }).min(5, { error: 'Purpose must be at least 5 characters' })
              .max(200, "Purpose must be less than 200 characters"),
            colSpan: 12
        },
         accountHolderName: {
            category: "BANK DETAILS",
            label: "Account Holder Name",
            inputType: 'text',
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Account Holder Name is required'
                    : issue.code === 'invalid_type'
                    ? 'Account Holder Name must be string'
                    : undefined
              }).min(3, { error: 'Account Holder Name must be at least 3 characters' }),
        },
        bankName: {
            label: "Bank Name",
            inputType: 'text',
            required: true,
            validation: z.string({
                error: issue =>
                    issue.input === undefined
                ? 'Bank Name is required'
                : issue.code === 'invalid_type'
                ? 'Bank Name must be string'
                : undefined
            }).min(3, { error: 'Bank Name must be at least 3 characters' }),
        },
        accountNumber: {
            label: "Account Number",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue => 
                issue.input === undefined
                ? 'Account Number is required'
                : issue.code === "invalid_type"
                ? 'Account Number must be string'
                : undefined
            }).min(5, "Account Number must at least 5 digits")
        },
        ifsc: {
            label: "IFSC",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue => 
                issue.input === undefined
                ? 'IFSC is required'
                : issue.code === "invalid_type"
                ? 'IFSC must be string'
                : undefined
            }).min(5, "IFSC must at least 5 digits")
        },
        bankProof: {
            label: "Bank Statement",
            inputType: 'file',
            required: true,
            key: `loans/homeLoans/${formUuid}/bankProof-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Bank Statement is required"
                : issue.code === "invalid_type"
                ? "Invalid Bank Statement"
                : undefined
            }).min(1, {error: "Bank Statement is required"})
        },
        aadhaarFile: {
            category: "Upload Documents",
            label: "Aadhaar Card",
            inputType: 'file',
            required: true,
            key: `loans/homeLoans/${formUuid}/aadhaarFile-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Aadhaar Card is required"
                : issue.code === "invalid_type"
                ? "Invalid Aadhaar Card"
                : undefined
            }).min(1, {error: "Aadhaar Card is required"})
        },
        panFile: {
            label: "PAN Card",
            inputType: 'file',
            required: true,
            key: `loans/homeLoans/${formUuid}/panFile-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "PAN Card is required"
                : issue.code === "invalid_type"
                ? "Invalid PAN Card"
                : undefined
            }).min(1, {error: "PAN Card is required"})
        },
        // Business-specific fields
        gst: {
            label: "GST Certificate",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/homeLoans/${formUuid}/gst-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "GST certificate is required"
                : issue.code === "invalid_type"
                ? "Invalid GST Certificate"
                : undefined
            }).min(1, {error: "GST certificate is required"})
        },
        msme: {
            label: "MSME/Udyam Certificate",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/homeLoans/${formUuid}/msme-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "MSME Certificate is required"
                : issue.code === "invalid_type"
                ? "Invalid MSME/Udyam Certificate"
                : undefined
            }).min(1, {error: "MSME Certificate is required"})
        },
        electricityBill: {
            label: "Electricity Bill",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/homeLoans/${formUuid}/electricityBill-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Electricity Bill is required"
                : issue.code === "invalid_type"
                ? "Invalid Electricity Bill"
                : undefined
            }).min(1, {error: "Electricity Bill is required"})
        },
        rentagreement: {
            label: "Rent Agreement",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business" && formData.businessType === "Rented",
            key: `loans/homeLoans/${formUuid}/rentagreement-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Rent Agreement is required"
                : issue.code === "invalid_type"
                ? "Invalid Rent Agreement"
                : undefined
            }).min(1, {error: "Rent Agreement is required"})
        },
        cin: {
            label: "Company Identification Number (CIN)",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business" && formData.organizationType === "Private Limited",
            key: `loans/homeLoans/${formUuid}/cin-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "CIN is required"
                : issue.code === "invalid_type"
                ? "Invalid CIN"
                : undefined
            }).min(1, {error: "CIN is required"})
        },
        companypan: {
            label: "Company PAN",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business" && formData.organizationType === "Private Limited",
            key: `loans/homeLoans/${formUuid}/companypan-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Company PAN is required"
                : issue.code === "invalid_type"
                ? "Invalid Company PAN"
                : undefined
            }).min(1, "Company PAN is required")
        },
        companytan: {
            label: "Company TAN",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business" && formData.organizationType === "Private Limited",
            key: `loans/homeLoans/${formUuid}/companytan-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Company TAN is required"
                : issue.code === "invalid_type"
                ? "Invalid Company TAN"
                : undefined
            }).min(1, "Company TAN is required")
        },
        tradeLicense: {
            label: "Trade License",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/homeLoans/${formUuid}/tradeLicense-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid Trade License"
                : undefined
            }).optional()
        },
        foodLicense: {
            label: "Food License",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/homeLoans/${formUuid}/foodLicense-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid Food License"
                : undefined
            }).optional()
        },
        drugLicense: {
            label: "Drug License",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/homeLoans/${formUuid}/drugLicense-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid Drug License"
                : undefined
            }).optional()
        },
        deedagreement: {
            label: "Partnership Deed",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business" && formData.organizationType === "Partnership",
            key: `loans/homeLoans/${formUuid}/deedagreement-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Partnership Deed is required"
                : issue.code === "invalid_type"
                ? "Invalid Partnership Deed"
                : undefined
            }).min(1, "Partnership Deed is required")
        },
        bankStatementsCurrent: {
            label: "1 Year Bank Statements (CA)",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/homeLoans/${formUuid}/bankStatementsCurrent-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "1 Year Bank Statements (CA) is required"
                : issue.code === "invalid_type"
                ? "Invalid Bank Statements"
                : undefined
            }).min(1, {error: "1 Year Bank Statements (CA) is required"})
        },
        // Service-specific fields
        incomeproof: {
            label: "Salary Slip (Last 3 Months)",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Service",
            key: `loans/homeLoans/${formUuid}/incomeproof-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Salary Slip is required"
                : issue.code === "invalid_type"
                ? "Invalid Salary Slip"
                : undefined
            }).min(1, "Salary Slip is required")
        },
        // ITR fields for Business
        itr1: {
            category: "ITR/Computation Documents",
            label: "ITR - Year 1",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/homeLoans/${formUuid}/itr1-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "ITR - Year 1 is required"
                : issue.code === "invalid_type"
                ? "Invalid ITR - Year 1"
                : undefined
            }).min(1, {error: "ITR - Year 1 is required"})
        },
        itr2: {
            label: "ITR - Year 2",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/homeLoans/${formUuid}/itr2-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid ITR - Year 2"
                : undefined
            }).optional()
        },
        itr3: {
            label: "ITR - Year 3",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/homeLoans/${formUuid}/itr3-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid ITR - Year 3"
                : undefined
            }).optional()
        },
        computation1: {
            label: "Computation - Year 1",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/homeLoans/${formUuid}/computation1-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Computation - Year 1 is required"
                : issue.code === "invalid_type"
                ? "Invalid Computation - Year 1"
                : undefined
            }).min(1, {error: "Computation - Year 1 is required"})
        },
        computation2: {
            label: "Computation - Year 2",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/homeLoans/${formUuid}/computation2-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid Computation - Year 2"
                : undefined
            }).optional()
        },
        computation3: {
            label: "Computation - Year 3",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/homeLoans/${formUuid}/computation3-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid Computation - Year 3"
                : undefined
            }).optional()
        },
    });

    ///////INSURANCE LOAN FORM FIELDS/////////////////////////////////////
const[insuranceLoanFormFields, setInsuranceLoanFormFields] = useState({
    photo: {
            category: "APPLICANT DETAILS",
            inputType: 'photo',
            required: true,
            label: "Photo",
            key: `loans/insuranceLoans/${formUuid}/photo-${v4()}`,
            allowedTypes: ['image/jpeg', 'image/png'],
            unsupportedTypeMessages: "Only PNG and JPG files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Photo is required"
                : issue.code === "invalid_type"
                ? "Invalid Photo"
                : undefined
            }).min(1, {error: "Photo is required"})
        },
        fullName: {
           
            label: "Full Name",
            inputType: 'text',
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Full name is required'
                    : issue.code === 'invalid_type'
                    ? 'Full name must be string'
                    : undefined
              }).min(3, { error: 'Full name must be at least 3 characters' }),
        },
        dob: {
            label: "Date of Birth",
            inputType: "date",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'DOB is required'
                    : issue.code === 'invalid_type'
                    ? 'DOB must be string'
                    : undefined
              }).regex(/^\d{4}-\d{2}-\d{2}$/, { error: 'DOB must be in yyyy-mm-dd format' }),
            colSpan: 4
        },
        email: {
            label: "Email",
            inputType: 'email',
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Email is required'
                    : issue.code === 'invalid_type'
                    ? 'Email must be string'
                    : undefined
              }).email({ error: 'Invalid email address' }),
        },
        phone: {
            label: "Phone Number",
            inputType: 'text',
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Phone number is required'
                    : issue.code === 'invalid_type'
                    ? 'Phone must be string'
                    : undefined
              }).regex(/^[6-9]\d{9}$/, { error: 'Enter valid 10‑digit Indian mobile number' }),
        },
       gender: {
            label: "Gender",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => GENDERS,
            validation: z.enum(GENDERS, { error: 'Gender is required' }),
            colSpan: 4
        },
         residence: {
            category: "PRESENT ADDRESS DETAILS",
            label: "Residence",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => RESIDENCE_OWNERSHIP_TYPES,
            validation: z.enum(RESIDENCE_OWNERSHIP_TYPES, { error: 'Residence type is required' }),
            colSpan: 12
        },
        presentAddress: {
            label: "Present Address",
            inputType: "textField",
            maxLength:200,
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Present address is required'
                    : issue.code === 'invalid_type'
                    ? 'Present address must be string'
                    : undefined
              }).min(5, { error: 'Present address must be at least 5 characters' })
              .max(200, "Present address must be less than 200 characters"),
            colSpan: 12
        },
        landmark: {
            label: "Landmark",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Landmark is required'
                    : issue.code === 'invalid_type'
                    ? 'Landmark must be string'
                    : undefined
              }).min(3, { error: 'Landmark must be at least 3 characters' }),
            colSpan: 12
        },
        city: {
            label: "City",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'City is required'
                    : issue.code === 'invalid_type'
                    ? 'City must be string'
                    : undefined
              }).min(2, { error: 'City must be at least 2 characters' }),
            colSpan: 3
        },
        state: {
            label: "State",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                    issue.input === undefined
                        ? 'State is required'
                        : issue.code === 'invalid_type'
                        ? 'State must be string'
                        : undefined
                }).min(2, { error: 'State must be at least 2 characters' }),
            colSpan: 3
        },
        pincode: {
            label: "Pincode",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                ? 'Pincode is required'
                : issue.code === 'invalid_type'
                ? 'Pincode must be string'
                : undefined
            }).regex(/^[1-9][0-9]{5}$/, { error: 'Enter a valid 6-digit Indian pincode' }),
            colSpan: 3
        },
        country: {
            label: "Country",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => INSURANCE_COUNTRIES,
            validation: z.enum(INSURANCE_COUNTRIES, { error: 'Country is required' }),
            colSpan: 3
        },
        insuranceType: {
            category : "INSURANCE DETAILS",
            label: "Insurance Type",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => INSURANCE_TYPES,
            validation: z.enum(INSURANCE_TYPES, { error: 'Insurance type is required' }),
            colSpan: 12
        },
        nomineeName: {
            category: "NOMINEE DETAILS",
            label: "Nominee Name",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Nominee name is required'
                    : issue.code === 'invalid_type'
                    ? 'Nominee name must be string'
                    : undefined
              }).min(3, { error: 'Nominee name must be at least 3 characters' }),
            colSpan: 6
        },
        nomineeRelation: {
            label: "Nominee Relation",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Nominee relation is required'
                    : issue.code === 'invalid_type'
                    ? 'Nominee relation must be string'
                    : undefined
              }).min(2, { error: 'Nominee relation must be at least 2 characters' }),
            colSpan: 6
        },
        profession: {
            category: "PROFESSION",
            label: "Profession",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => INSURANCE_PROFESSIONS,
            validation: z.enum(INSURANCE_PROFESSIONS, { error: 'Profession is required' }),
            colSpan: 12
        },
        professionType: {
            label: "Profession Type",
            inputType: "select",
            required: true,
            dependOn: ['profession'],
            options: [],
            getOptions: GET_PROFESSION_TYPES,
            validation: GET_PROFESSION_TYPES_VALIDATION,
            conditions: (formData) => {
                return formData.profession;
            },
        },
        organizationType: {
            label: "Organization Type",
            inputType: "select",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business";
            },
            options: [],
            getOptions: () => BUSINESS_ORGANIZATION_TYPES,
            validation: z.enum(BUSINESS_ORGANIZATION_TYPES, { error: 'Organization type is required' }),
        },
        businessType: {
            label: "Business Ownership Type",
            inputType: "select",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business";
            },
            options: [],
            getOptions: () => BUSINESS_OWNERSHIP_TYPES,
            validation: z.enum(BUSINESS_OWNERSHIP_TYPES, { error: 'Ownership type is required' }),
        },
        industry: {
            label: "Industry",
            inputType: 'text',
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business";
            },
            validation: z.string({
                error: issue => 
                    issue.input == undefined ?
                    "Industry is required":
                    issue.code === "invalid_type"?
                    "Industry must be string":
                    undefined
            }).min(3, {error: "Industry must be atleast 3 characters long"})
        },
        businessName: {
            label: "Business Name",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.string({
                error: issue => 
                    issue.input == undefined ?
                    "Business Name is required":
                    issue.code === "invalid_type"?
                    "Business Name must be string":
                    undefined
            }).min(3, {error: "Business Name must be atleast 3 characters long"})
        },
        businessYears: {
            label: "Years in Business",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.coerce.number({
                error: issue => 
                    issue.input == undefined ?
                    "Years in Business is required":
                    issue.code === "invalid_type"?
                    "Years in Business must be number":
                    undefined
            }).min(1, {error: "Years in Business must be atleast 1 year"})
        },
        businessannualturnover: {
            label: "Annual Turnover",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.coerce.number({
                error: issue => 
                    issue.input == undefined ?
                    "Annual Turnover is required":
                    issue.code === "invalid_type"?
                    "Annual Turnover must be number":
                    undefined
            }).min(1000, {error: "Annual Turnover must be atleast 1000"})
        },
        businessAddress: {
            label: "Business Address",
            inputType: "textField",
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            maxLength: 200,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Business address is required'
                    : issue.code === 'invalid_type'
                    ? 'Business address must be string'
                    : undefined
              }).min(5, { error: 'Business address must be at least 5 characters' })
              .max(200, "Business address must be less than 200 characters"),
            colSpan:12
        },
        businessCity: {
            label: "City",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Business City is required'
                    : issue.code === 'invalid_type'
                    ? 'Business City must be string'
                    : undefined
              }).min(2, { error: 'Business City must be at least 2 characters' }),
            colSpan: 3
        },
        businessState: {
            label: "State",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.string({
                error: issue =>
                    issue.input === undefined
                        ? 'Business State is required'
                        : issue.code === 'invalid_type'
                        ? 'Business State must be string'
                        : undefined
                }).min(2, { error: 'Business State must be at least 2 characters' }),
            colSpan: 3
        },
        businessPincode: {
            label: "Pincode",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                ? 'Business Pincode is required'
                : issue.code === 'invalid_type'
                ? 'Business Pincode must be string'
                : undefined
            }).regex(/^[1-9][0-9]{5}$/, { error: 'Enter a valid 6-digit business pincode' }),
            colSpan: 3
        },
        businessCountry: {
            label: "Country",
            inputType: "select",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            options: [],
            getOptions: () => INSURANCE_COUNTRIES,
            validation: z.enum(INSURANCE_COUNTRIES, { error: 'Business Country is required' }),
            colSpan: 3
        },
        companyName: {
            label: "Company Name",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Company Name is required'
                    : issue.code === 'invalid_type'
                    ? 'Company Name must be string'
                    : undefined
              }).min(2, { error: 'Company Name must be at least 2 characters' }),
            colSpan: 6
        },
        jobYears: {
            label: "Years in Job",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.coerce.number({
                error: issue =>
                    issue.input === undefined
                ? 'Years in Job is required'
                : issue.code === 'invalid_type'
                ? 'Years in Job must be a number'
                : undefined
            }).min(1, { error: 'Years in Job must be at least 1 year' })
        },
        monthlyIncome: {
            label: "Monthly Income",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service";
            },
            validation: z.coerce.number({
                error: issue =>
                    issue.input === undefined
                ? 'Monthly Income is required'
                : issue.code === "invalid_type"
                ? 'Monthly Income must be a number'
                : undefined
            }).min(1000, { error: 'Monthly Income must be at least ₹1000' })
        },
        officeAddress: {
            label: "Office Address",
            inputType: "textField",
            maxLength: 200,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Office address is required'
                    : issue.code === 'invalid_type'
                    ? 'Office address must be string'
                    : undefined
              }).min(5, { error: 'Office address must be at least 5 characters' })
              .max(200, "Office address must be less than 200 characters"),
            colSpan:12
        },
        officeCity: {
            label: "City",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Office City is required'
                    : issue.code === 'invalid_type'
                    ? 'Office City must be string'
                    : undefined
              }).min(2, { error: 'Office City must be at least 2 characters' }),
            colSpan: 3
        },
        officeState: {
            label: "State",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                    issue.input === undefined
                        ? 'Office State is required'
                        : issue.code === 'invalid_type'
                        ? 'Office State must be string'
                        : undefined
                }).min(2, { error: 'Office State must be at least 2 characters' }),
            colSpan: 3
        },
        officePincode: {
            label: "Pincode",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                ? 'Office Pincode is required'
                : issue.code === 'invalid_type'
                ? 'Office Pincode must be string'
                : undefined
            }).regex(/^[1-9][0-9]{5}$/, { error: 'Enter a valid 6-digit office pincode' }),
            colSpan: 3
        },
        officeCountry: {
            label: "Country",
            inputType: "select",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            options: [],
            getOptions: () => INSURANCE_COUNTRIES,
            validation: z.enum(INSURANCE_COUNTRIES, { error: 'Office Country is required' }),
            colSpan: 3
        },
         accountHolderName: {
            category: "BANK DETAILS",
            label: "Account Holder Name",
            inputType: 'text',
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Account Holder Name is required'
                    : issue.code === 'invalid_type'
                    ? 'Account Holder Name must be string'
                    : undefined
              }).min(3, { error: 'Account Holder Name must be at least 3 characters' }),
        },
        bankName: {
            label: "Bank Name",
            inputType: 'text',
            required: true,
            validation: z.string({
                error: issue =>
                    issue.input === undefined
                ? 'Bank Name is required'
                : issue.code === 'invalid_type'
                ? 'Bank Name must be string'
                : undefined
            }).min(3, { error: 'Bank Name must be at least 3 characters' }),
        },
        accountNumber: {
            label: "Account Number",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue => 
                issue.input === undefined
                ? 'Account Number is required'
                : issue.code === "invalid_type"
                ? 'Account Number must be string'
                : undefined
            }).min(5, "Account Number must at least 5 digits")
        },
        ifsc: {
            label: "IFSC",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue => 
                issue.input === undefined
                ? 'IFSC is required'
                : issue.code === "invalid_type"
                ? 'IFSC must be string'
                : undefined
            }).min(5, "IFSC must at least 5 digits")
        },
        bankProof: {
            label: "Bank Statement",
            inputType: 'file',
            required: true,
            key: `loans/insuranceLoans/${formUuid}/bankProof-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Bank Statement is required"
                : issue.code === "invalid_type"
                ? "Invalid Bank Statement"
                : undefined
            }).min(1, {error: "Bank Statement is required"})
        },
        aadhaarFile: {
            category: "Upload Documents",
            label: "Aadhaar Card",
            inputType: 'file',
            required: true,
            key: `loans/insuranceLoans/${formUuid}/aadhaarFile-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Aadhaar Card is required"
                : issue.code === "invalid_type"
                ? "Invalid Aadhaar Card"
                : undefined
            }).min(1, {error: "Aadhaar Card is required"})
        },
        panFile: {
            label: "PAN Card",
            inputType: 'file',
            required: true,
            key: `loans/insuranceLoans/${formUuid}/panFile-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "PAN Card is required"
                : issue.code === "invalid_type"
                ? "Invalid PAN Card"
                : undefined
            }).min(1, {error: "PAN Card is required"})
        },
         // ITR fields for Business
        itr1: {
            category: "ITR/Computation Documents",
            label: "ITR - Year 1",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/insuranceLoans/${formUuid}/itr1-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "ITR - Year 1 is required"
                : issue.code === "invalid_type"
                ? "Invalid ITR - Year 1"
                : undefined
            }).min(1, {error: "ITR - Year 1 is required"})
        },
        itr2: {
            label: "ITR - Year 2",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/insuranceLoans/${formUuid}/itr2-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid ITR - Year 2"
                : undefined
            }).optional()
        },
       
        computation1: {
            label: "Computation - Year 1",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/insuranceLoans/${formUuid}/computation1-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Computation - Year 1 is required"
                : issue.code === "invalid_type"
                ? "Invalid Computation - Year 1"
                : undefined
            }).min(1, {error: "Computation - Year 1 is required"})
        },
        computation2: {
            label: "Computation - Year 2",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/insuranceLoans/${formUuid}/computation2-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid Computation - Year 2"
                : undefined
            }).optional()
        },
         // Service-specific fields
        incomeproof: {
            label: "Salary Slip (Last 3 Months)",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Service",
            key: `loans/insuranceLoans/${formUuid}/incomeproof-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Salary Slip is required"
                : issue.code === "invalid_type"
                ? "Invalid Salary Slip"
                : undefined
            }).min(1, "Salary Slip is required")
        },
    });

 return (
  <AppContext.Provider value={{
     mortgageLoanFormFields,
    setMortgageLoanFormFields,
    homeLoanFormFields,
    setHomeLoanFormFields,
       insuranceLoanFormFields,
    setInsuranceLoanFormFields,
    refreshFormUuid,
  }}>
    {children}
  </AppContext.Provider>
);
};

export const useApp = () => useContext(AppContext);

