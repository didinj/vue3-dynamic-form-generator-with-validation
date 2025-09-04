// src/schemas/formSchema.js
import * as yup from "yup";

export const formSchema = [
  {
    type: "text",
    label: "Full Name",
    name: "fullName",
    placeholder: "Enter your full name",
    validation: yup
      .string()
      .required("Full name is required")
      .min(3, "At least 3 characters")
  },
  {
    type: "email",
    label: "Email Address",
    name: "email",
    placeholder: "Enter your email",
    validation: yup
      .string()
      .required("Email is required")
      .email("Must be a valid email")
  },
  {
    type: "number",
    label: "Age",
    name: "age",
    placeholder: "Enter your age",
    validation: yup
      .number()
      .required("Age is required")
      .min(18, "You must be at least 18")
  },
  {
    type: "select",
    label: "Country",
    name: "country",
    options: [
      { label: "United States", value: "us" },
      { label: "Canada", value: "ca" },
      { label: "Indonesia", value: "id" }
    ],
    validation: yup.string().required("Country is required")
  },
  {
    type: "checkbox",
    label: "I agree to the terms and conditions",
    name: "terms",
    validation: yup.boolean().oneOf([true], "You must accept the terms")
  }
];
