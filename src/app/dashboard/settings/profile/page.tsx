//@ts-nocheck
"use client";
import React from "react";
import InputArea from "@/components/atom/form/inputArea";
import { Text, Box } from "@chakra-ui/react";
import Buttons from "@/components/atom/button/buttons";
import { useFormik } from "formik";
import { profile_settings_schema } from "@/validations/profile/settings";
import { useSelector } from "react-redux";

const ProfileSettings = () => {
  //@ts-ignore
  const { userDetails } = useSelector((state) => state?.user);

  const payloads = {
    firstName: userDetails?.firstName || undefined,
    lastName: userDetails?.lastName || undefined,
  };

  const handleSubmit = () => {};

  const formik = useFormik({
    validationSchema: profile_settings_schema,
    onSubmit: handleSubmit,
    validateOnChange: true,
    initialValues: payloads,
  });

  return (
    <div>
      <Text fontWeight="semibold" fontSize={["20px", "25px"]}>
        Profile Settings
      </Text>
      <Box my={"1.5em"}>
        <form onSubmit={formik.handleSubmit}>
          <InputArea
            bg={"#212121"}
            type="text"
            placeholder=" Doe"
            label="First Name"
            isInvalid={formik.touched.firstName && !!formik.errors.firstName}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            isErrorMessage={formik.errors.firstName}
          />

          <InputArea
            bg={"#212121"}
            type="text"
            placeholder=" Doe"
            label="Last Name"
            isInvalid={formik.touched.lastName && !!formik.errors.lastName}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            isErrorMessage={formik.errors.lastName}
          />

          <InputArea
            bg={"#212121"}
            type="text"
            placeholder="Joe Ipsum"
            label="Display Name"
          />

          <Box>
            <Buttons type="submit" radius="8px" w={"100%"} mt={"1em"}>
              Update Profile
            </Buttons>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default ProfileSettings;
