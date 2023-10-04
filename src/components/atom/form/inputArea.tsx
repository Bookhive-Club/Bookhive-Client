"use client";
import {
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { ChangeEventHandler, FC } from "react";

type TextArea = {
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isInvalid?: boolean;
  isErrorMessage?: string;
  type: string;
  placeholder: string;
  border?: string;
  bg?: string;
  width?: string;
  value?: any;
  name?: string;
};

const InputArea: FC<TextArea> = ({
  label,
  placeholder,
  type,
  isErrorMessage,
  isInvalid,
  onChange,
  border,
  bg,
  width,
  name,
  value,
}) => {
  return (
    <FormControl isInvalid={isInvalid} my={"1em"}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        h={"45"}
        name={name ? name : ""}
        value={value}
        borderRadius={"10px"}
        outline={"none"}
        border={border ? border : "none"}
        bg={bg ? bg : "#191919"}
        width={width ? width : "100%"}
        color={"rgba(255, 255, 255, 0.4)"}
      />
      <FormErrorMessage>
        <FormErrorIcon /> {isErrorMessage}
      </FormErrorMessage>
    </FormControl>
  );
};
export default InputArea;
