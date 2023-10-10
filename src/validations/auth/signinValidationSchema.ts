import * as Yup from "yup";

const signInValidationSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

export { signInValidationSchema };
