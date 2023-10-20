import InputArea from "@/components/atom/form/inputArea";
import {
  Box,
  Text,
  Flex,
  Textarea,
  FormControl,
  FormLabel,
  SelectField,
} from "@chakra-ui/react";
import React from "react";

const CreateSwap = () => {
  return (
    <>
      <Box bg={"#191919"} py={"3em"} px={"1em"} w={["100%", "100%", "700px"]}>
        <Text fontWeight="semibold" fontSize={["20px", "25px"]}>
          Create Swap
        </Text>

        <Box my={"1.5em"}>
          <form>
            <InputArea
              bg={"#212121"}
              type="text"
              placeholder="Rich Dad Poor Dad"
              label="Title"
            />

            <Flex gap="1em" alignItems="center">
              <InputArea
                bg={"#212121"}
                type="text"
                placeholder="John Doe"
                label="Author"
              />

              <InputArea
                bg={"#212121"}
                type="number"
                placeholder="123451212"
                label="ISBN"
              />
            </Flex>

            <FormControl my={"1em"}>
              <FormLabel> Brief Description </FormLabel>
              <Textarea bg="dark.50" placeholder="Short description" />
            </FormControl>

            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <SelectField></SelectField>
            </Flex>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default CreateSwap;
