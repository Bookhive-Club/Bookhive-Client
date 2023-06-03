import * as Yup from "yup";

const signUpValidationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    phone_number: Yup.string()
      .required("Phone number is required")
      .min(8, "Phone number must be 11 digits"),
    username: Yup.string().required().min(3, "User name is too short"),
    password: Yup.string().required().min(3, "Password is too short"),
    confirm_password: Yup.string().oneOf(
      [Yup.ref("password"), ''],
      "Passwords must match"
    ),
  });

  

  export {  signUpValidationSchema }