"use client";
import InputArea from "@/components/atom/form/inputArea";
import {
  Box,
  Text,
  Flex,
  Textarea,
  FormControl,
  FormLabel,
  Center,
} from "@chakra-ui/react";
import React from "react";
import SelectionField from "@/components/atom/form/selectField";
import Buttons from "@/components/atom/button/buttons";

const CreateSwap = () => {
  return (
    <>
      <Flex gap="1em">
        <Box
          bg={"#191919"}
          py={"3em"}
          px={"1em"}
          w={["100%", "100%", "500px"]}></Box>
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

              <Flex
                gap="1em"
                justifyContent={"space-between"}
                alignItems={"center"}>
                <SelectionField
                  bg={"dark.50"}
                  label="Condition of Book"
                  onChange={() => {}}>
                  <option value="">Select Field</option>
                </SelectionField>

                <SelectionField
                  bg={"dark.50"}
                  label="Condition of Book"
                  onChange={() => {}}>
                  <option value="">Genre</option>
                </SelectionField>
              </Flex>

              <Box>
                <Center>
                  <Buttons radius="8px" w={"100%"} mt={"2em"}>
                    Post
                  </Buttons>
                </Center>
              </Box>
            </form>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default CreateSwap;
