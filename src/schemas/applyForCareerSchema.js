import { z } from "zod";

// Enums for dropdown selections


const GenderEnum = z.enum(['Male', 'Female', 'Other'], {
  error: 'Gender is required'
});

const CountryEnum = z.enum(['India', 'USA', 'UK', 'Canada', 'Australia', 'Other'], {
  error: 'Country is required'
});

const applyForCareerSchema = z.object({
  firstName: z.string({
    error: issue =>
      issue.input === undefined
        ? 'First name is required'
        : issue.code === 'invalid_type'
        ? 'First name must be string'
        : undefined
  }).min(2, { error: 'First name must be at least 2 characters' }),

  lastName: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Last name is required'
        : issue.code === 'invalid_type'
        ? 'Last name must be string'
        : undefined
  }).min(2, { error: 'Last name must be at least 2 characters' }),

  email: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Email is required'
        : issue.code === 'invalid_type'
        ? 'Email must be string'
        : undefined
  }).email({ error: 'Invalid email address' }),



  phone: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Phone number is required'
        : issue.code === 'invalid_type'
        ? 'Phone must be string'
        : undefined
  }).regex(/^[6-9]\d{9}$/, { error: 'Enter a valid 10-digit mobile number' }),

  dob: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Date of birth is required'
        : issue.code === 'invalid_type'
        ? 'DOB must be string'
        : undefined
  }).regex(/^\d{4}-\d{2}-\d{2}$/, { error: 'DOB must be in yyyy-mm-dd format' }),

  gender: GenderEnum,

  address: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Address is required'
        : issue.code === 'invalid_type'
        ? 'Address must be string'
        : undefined
  }).min(5, { error: 'Address must be at least 5 characters' }),

  city: z.string({
    error: issue =>
      issue.input === undefined
        ? 'City is required'
        : issue.code === 'invalid_type'
        ? 'City must be string'
        : undefined
  }).min(2, { error: 'City must be at least 2 characters' }),

  state: z.string({
    error: issue =>
      issue.input === undefined
        ? 'State is required'
        : issue.code === 'invalid_type'
        ? 'State must be string'
        : undefined
  }).min(2, { error: 'State must be at least 2 characters' }),

  pincode: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Pincode is required'
        : issue.code === 'invalid_type'
        ? 'Pincode must be string'
        : undefined
  }).regex(/^[1-9][0-9]{5}$/, { error: 'Enter a valid 6-digit Indian pincode' }),

  country: CountryEnum,

  description: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Description is required'
        : issue.code === 'invalid_type'
        ? 'Description must be string'
        : undefined
  }).min(5, { error: 'Description must be at least 5 characters' }),

  qualification: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Highest qualification is required'
        : issue.code === 'invalid_type'
        ? 'Qualification must be string'
        : undefined
  }).min(2, { error: 'Qualification must be at least 2 characters' }),

  description: z.string({
    error: issue =>
        issue.input === undefined
        ? 'Description is required'
        : issue.code === 'invalid_type'
        ? 'Description must be string'
        : undefined
    }).min(5, { error: 'Description must be at least 5 characters' }),


    cv: z.string({
    error: issue =>
      issue.input === undefined
        ? 'CV is required'
        : issue.code === 'invalid_type'
        ? 'CV is required'
        : undefined
  }).min(1, { error: 'CV is required' }),
});

export default applyForCareerSchema;
