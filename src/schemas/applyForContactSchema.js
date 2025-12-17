import { z } from "zod";

// Enums for standardized input options
const StdCodeEnum = z.enum(['+91'], {
  error: 'STD code is required'
});

const applyForContactSchema = z.object({
  name: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Name is required'
        : issue.code === 'invalid_type'
        ? 'Name must be string'
        : undefined
  }).min(3, { error: 'Name must be at least 3 characters' }),

  email: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Email is required'
        : issue.code === 'invalid_type'
        ? 'Email must be string'
        : undefined
  }).email({ error: 'Invalid email address' }),

  stdCode: StdCodeEnum,

  phone: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Phone number is required'
        : issue.code === 'invalid_type'
        ? 'Phone must be string'
        : undefined
  }).regex(/^[6-9]\d{9}$/, { error: 'Enter a valid 10-digit mobile number' }),

  message: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Message is required'
        : issue.code === 'invalid_type'
        ? 'Message must be string'
        : undefined
  }).min(5, { error: 'Message must be at least 5 characters' }),
});

export default applyForContactSchema;
