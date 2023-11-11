import {
  SelectProps,
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormErrorIcon,
} from "@chakra-ui/react";

import React, { ChangeEventHandler, FC, ReactNode } from "react";

interface ISelectFieldProps extends SelectProps {
  children: ReactNode;
  label: string;
  isErrorMessage?: string;
  isInvalid?: boolean;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const SelectionField: FC<ISelectFieldProps> = ({
  children,
  label,
  onChange,
  isInvalid,
  isErrorMessage,
  ...rest
}: ISelectFieldProps) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <Select
        border={"none"}
        cursor="pointer"
        size={"lg"}
        bg={"brand.secondary"}
        onChange={onChange}
        {...rest}>
        {children}
      </Select>
      <FormErrorMessage>
        <FormErrorIcon /> {isErrorMessage}
      </FormErrorMessage>
    </FormControl>
  );
};

export default SelectionField;
