import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});
export type ILoginSchema = yup.InferType<typeof loginSchema>;

export const inviteSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  role: yup
    .string()
    .oneOf(["ADMIN", "MANAGER", "STAFF"], "Invalid role")
    .required("Role is required"),
});
export type IInviteSchema = yup.InferType<typeof inviteSchema>;

export const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
});
export type IRegisterSchema = yup.InferType<typeof registerSchema>;
