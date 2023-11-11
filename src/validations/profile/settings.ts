import * as Yup from "yup";

export const settings_validator = Yup.object().shape({
  firstName: Yup.string().required("First Name cant be empty"),
  lastName: Yup.string().required("First Name cant be empty"),
});

export const profile_settings_schema = Yup.object().shape({
  firstName: Yup.string().required("First Name cant be empty"),
  lastName: Yup.string().required("First Name cant be empty"),
});
