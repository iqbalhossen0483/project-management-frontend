import * as yup from "yup";

export const projectSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  status: yup
    .string()
    .oneOf(["ACTIVE", "INACTIVE"], "Invalid status")
    .default("ACTIVE"),
  createdBy: yup.string().required("Created by is required"),
});
export type IProjectSchema = yup.InferType<typeof projectSchema>;
