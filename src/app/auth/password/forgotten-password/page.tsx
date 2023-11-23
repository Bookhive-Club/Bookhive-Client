"use client";
import InputArea from "@/components/atom/form/inputArea";
import Buttons from "@/components/atom/button/buttons";
import AuthVerificationLayout from "@/layouts/auth/authVerificationLayout";
import { Box, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils/axios";
import { useRouter } from "next/navigation";
import ModalContainer from "@/layouts/popups/modalLayout";
import { FcSms } from "react-icons/fc";
import Link from "next/link";

const ForgottenPassowrd = () => {
  const [email, setEmail] = useState("");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [disabled, setDisabled] = useState<boolean>(false);
  const toast = useToast();
  const payload = {
    email: email,
  };

  const mutation = useMutation({
    mutationKey: ["reset_password"],
    mutationFn: (data) => {
      return axiosInstance.post("/auth/forgotten_password", data);
    },
    onSuccess() {
      onOpen();
      setDisabled(true);
    },
    onError: (error: AxiosError) => {
      //@ts-ignore
      const message = error?.response?.data?.message;

      toast({
        status: "error",
        title: message,
        description: `The email ${email} is not available`,
        position: "top",
      });
    },
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    mutation.mutate(payload);
  };
  return (
    <AuthVerificationLayout>
      <Box>
        <Text fontWeight={"bold"} fontSize={["20px", "20px", "30px"]}>
          Reset Password
        </Text>

        <Box w={["100%", "100%", "500px"]} mx={"auto"}>
          <Text my={"1em"}>
            Enter the email associated with your account and we will send an
            email with instructions on how to reset your password
          </Text>
          <form onSubmit={handleSubmit}>
            <InputArea
              type="email"
              label="Email"
              placeholder="Email Address"
              bg={"#212121"}
              onChange={handleChange}
              isRequired
            />

            <Buttons
              w="100%"
              type="submit"
              isLoading={mutation.isPending}
              isDisabled={disabled}>
              Reset
            </Buttons>
          </form>
        </Box>

        <Text fontWeight={"bold"} my={"1em"}>
          Remembered password?{" "}
          <span
            style={{
              color: "brand.primary",
            }}>
            Login
          </span>
        </Text>
      </Box>

      <ModalContainer isOpen={isOpen} onClose={onClose}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems="center"
          flexDir={"column"}>
          <FcSms size="4em" />
          <Text textAlign="center">
            We sent a reset link to your email {email}
          </Text>
          <Link href="https://mail.google.com/mail/u/0/">
            <Buttons my="1em" w="100%">
              Check Email
            </Buttons>
          </Link>
        </Box>
      </ModalContainer>
    </AuthVerificationLayout>
  );
};
export default ForgottenPassowrd;
