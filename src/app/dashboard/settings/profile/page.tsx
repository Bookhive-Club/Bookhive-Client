import React from "react";
import InputArea from "@/components/atom/form/inputArea";
import { Text, Box } from "@chakra-ui/react";
import Buttons from "@/components/atom/button/buttons";

const ProfileSettings = () => {
  return (
    <div>
      <Text fontWeight="semibold" fontSize={["20px", "25px"]}>
        Profile Settings
      </Text>
      <Box my={"1.5em"}>
        <form>
          <InputArea
            bg={"#212121"}
            type="text"
            placeholder=" Doe"
            label="First Name"
          />

          <InputArea
            bg={"#212121"}
            type="text"
            placeholder=" Doe"
            label="Last Name"
          />

          <InputArea
            bg={"#212121"}
            type="text"
            placeholder="Joe Ipsum"
            label="Display Name"
          />

          <Box>
            <Buttons radius="8px" w={"100%"} mt={"1em"}>
              Update Profile
            </Buttons>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default ProfileSettings;
