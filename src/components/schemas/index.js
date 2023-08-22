import * as Yup from "yup";

export const validationSchema = Yup.object({
  title: Yup.string()
    .required()
    .matches(/^(?! )(?!-)[a-zA-Z\d\s-]+$/, "Invalid input"),
  description: Yup.string().required(),
  date: Yup.date().required(),
  time: Yup.string()
    .required()
    .matches(/^(0?[1-9]|1[0-2]):[0-5][0-9] [APap][Mm]$/, "Invalid input"),
  place: Yup.string()
    .required()
    .matches(/^(?! )(?!-)[a-zA-Z\d\s-]+$/, "Invalid input"),
  category: Yup.string().required(),
  photo: Yup.string().url().required(),
  priority: Yup.string().required(),
});
