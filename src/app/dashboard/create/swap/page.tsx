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
  useToast,
  FormErrorMessage,
  FormErrorIcon,
} from "@chakra-ui/react";
import React from "react";
import SelectionField from "@/components/atom/form/selectField";
import Buttons from "@/components/atom/button/buttons";
import { useFormik } from "formik";
import { create_swap_listings_schema } from "@/validations/marketplace";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axios";
import { AUTH_COOKIE } from "@/constants";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { ImageUpload, SelectedUpload } from "@/components/atom/image_upload";
import { File } from "buffer";
import { AxiosError, AxiosResponse } from "axios";
import { QueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { CONDITION, GENRE } from "@/constants/constants";
import { useSelector } from "react-redux";

interface FileObject {
  name: string;
  size: number;
}

const CreateSwap = () => {
  const toast = useToast();
  const queryClient = new QueryClient();

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

  //create swap item
  const mutation = useMutation({
    mutationFn: (formData: any) => {
      return axiosInstance.post("/marketplace/create_swap", formData, {
        headers: {
          Authorization: `Bearer ${AUTH_COOKIE}`,
        },
      });
    },
    onSuccess: (response: AxiosResponse) => {
      queryClient.invalidateQueries();
      //@ts-ignore
      const { message } = response?.data;

      toast({
        variant: "solid",
        status: "success",
        description: message,
        position: "top",
      });
    },
    onError: (err: AxiosError) => {
      //@ts-ignore
      const { data } = err?.response;
      toast({
        variant: "solid",
        status: "error",
        description: data?.message,
        position: "top",
      });
    },
  });

  const payload = {
    title: "",
    price: "",
    genre: "",
    author: "",
    condition: "",
    isbn: "",
    description: "",
    image: "",
  };

  const getSessionItem =
    typeof window !== "undefined"
      ? sessionStorage.getItem("user_location")
      : "";

  //@ts-ignore
  const { locationData } = useSelector((state) => state?.location);

  const { latitude, longitude } = locationData;

  const formik = useFormik({
    initialValues: payload,
    validationSchema: create_swap_listings_schema,
    validateOnChange: true,
    onSubmit: (values) => {
      mutation.mutate({
        ...values,
        isbn: String(values.isbn),
        latitude: latitude,
        longitude: longitude,
      });
    },
  });

  const selectedFile = acceptedFiles?.map((files: FileObject) => {
    const size = files.size;
    return (
      <>
        <SelectedUpload name={files?.name} size={size} />
      </>
    );
  });

  return (
    <>
      <Text fontWeight="semibold" fontSize={["20px", "25px"]}>
        Create Swap
      </Text>
      <Flex mt="1em" gap="1em" flexWrap={["wrap", "wrap", "wrap", "nowrap"]}>
        <Box bg={"#191919"} py={"3em"} px={"1em"} w={["100%", "100%", "500px"]}>
          <div {...getRootProps()}>
            <input {...getInputProps()} accept="image/*" />
            <ImageUpload />
          </div>

          {acceptedFiles && selectedFile}
        </Box>
        <Box bg={"#191919"} py={"3em"} px={"1em"} w={["100%", "100%", "700px"]}>
          <Box my={"1.5em"}>
            <form onSubmit={formik.handleSubmit}>
              <InputArea
                bg={"#212121"}
                type="text"
                placeholder="Rich Dad Poor Dad"
                name="title"
                label="Title"
                onChange={formik.handleChange}
                isErrorMessage={formik.errors.title}
                isInvalid={formik.touched.title && !!formik.errors.title}
              />

              <Flex gap="1em" alignItems="center">
                <InputArea
                  bg={"#212121"}
                  type="text"
                  name="author"
                  placeholder="John Doe"
                  label="Author"
                  onChange={formik.handleChange}
                  isErrorMessage={formik.errors.author}
                  isInvalid={formik.touched.author && !!formik.errors.author}
                />

                <InputArea
                  bg={"#212121"}
                  type="number"
                  name="isbn"
                  placeholder="123451212"
                  label="ISBN"
                  onChange={formik.handleChange}
                  isErrorMessage={formik.errors.isbn}
                  isInvalid={formik.touched.isbn && !!formik.errors.isbn}
                />
              </Flex>

              <FormControl my={"1em"}>
                <FormLabel> Brief Description </FormLabel>
                <Textarea
                  onChange={formik.handleChange}
                  name="description"
                  bg="dark.50"
                  placeholder="Short description"
                />
                <FormControl
                  isInvalid={
                    formik.touched.description && !!formik.errors.description
                  }>
                  <FormErrorMessage>
                    <FormErrorIcon /> {formik.errors.description}
                  </FormErrorMessage>
                </FormControl>
              </FormControl>

              <Flex
                gap="1em"
                justifyContent={"space-between"}
                alignItems={"center"}>
                <SelectionField
                  bg={"dark.50"}
                  label="Condition of Book"
                  name="condition"
                  isErrorMessage={formik.errors.condition}
                  isInvalid={
                    formik.touched.condition && !!formik.errors.condition
                  }
                  onChange={formik.handleChange}>
                  <option value="">Select Field</option>
                  {CONDITION.map((_, key) => {
                    return <option key={_.value}>{_.name}</option>;
                  })}
                </SelectionField>

                <SelectionField
                  bg={"dark.50"}
                  name="genre"
                  label="Genre"
                  isErrorMessage={formik.errors.genre}
                  isInvalid={formik.touched.genre && !!formik.errors.genre}
                  onChange={formik.handleChange}>
                  <option value="">Genre</option>
                  {GENRE.map((_, key) => {
                    return <option key={_.value}>{_.name}</option>;
                  })}
                </SelectionField>
              </Flex>

              <InputArea
                bg={"#212121"}
                type="number"
                name="price"
                placeholder="$0"
                label="Price"
                onChange={formik.handleChange}
                isErrorMessage={formik.errors.price}
                isInvalid={formik.touched.price && !!formik.errors.price}
              />

              <Box>
                <Center>
                  <Buttons
                    isLoading={mutation.isPending}
                    loadingText="Please wait..."
                    type="submit"
                    radius="8px"
                    _hover={{
                      background: "none",
                    }}
                    color="#fff"
                    w={"100%"}
                    mt={"2em"}>
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
