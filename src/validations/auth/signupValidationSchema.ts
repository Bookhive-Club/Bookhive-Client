import * as Yup from "yup";

const signUpValidationSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  username: Yup.string().required().min(3, "User name is too short"),
  password: Yup.string().required().min(3, "Password is too short"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), ""],
    "Passwords must match"
  ),
});

export { signUpValidationSchema };
