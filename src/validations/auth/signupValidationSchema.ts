import * as Yup from "yup";

const signUpValidationSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  firstName: Yup.string().required().min(3, "First Name  is too short"),
  lastName: Yup.string().required().min(3, "First name is too short"),
  password: Yup.string().required().min(3, "Password is too short"),
  gender: Yup.string().required(),
  // confirm_password: Yup.string().oneOf(
  //   [Yup.ref("password"), ""],
  //   "Passwords must match"
  // ),
});

export { signUpValidationSchema };
