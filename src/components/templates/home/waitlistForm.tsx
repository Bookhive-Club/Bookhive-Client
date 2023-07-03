import { Input, Box, FormLabel } from "@chakra-ui/react";
import Buttons from "../../atom/button/buttons";
import { useState } from "react";

const WaitlistForm = () => {
  const [loader, setLoader] = useState<boolean>(false);

  return (
    <form
      className="launchlist-form"
      action="https://getlaunchlist.com/s/qaEQTa"
      method="POST">
      <FormLabel fontWeight={"600"}> Email Address </FormLabel>
      <Box
        display={"flex"}
        flexDir={["column", "column", "row"]}
        gap={"1em"}
        alignItems={"center"}>
        <Input
          bg={"white"}
          name="email"
          type="email"
          color={"gray.500 !important"}
          size={"lg"}
          placeholder="Enter your email"
          required={true}
        />

        <Buttons
          width={["100%", loader ? "250px" : "150px"]}
          loadingText="Please wait..."
          type={"submit"}
          isLoading={loader}
          px={"2em"}>
          Sign Up
        </Buttons>
      </Box>
    </form>
  );
};
export default WaitlistForm;
