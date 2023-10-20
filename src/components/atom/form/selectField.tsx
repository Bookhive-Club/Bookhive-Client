import { SelectProps, Select, FormControl, FormLabel } from "@chakra-ui/react";
import React, { ChangeEventHandler, FC, ReactNode } from "react";

interface ISelectFieldProps extends SelectProps {
  children: ReactNode;
  label: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const SelectionField: FC<ISelectFieldProps> = ({
  children,
  label,
  onChange,
  ...rest
}: ISelectFieldProps) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Select cursor="pointer" size={"lg"} onChange={onChange} {...rest}>
        {children}
      </Select>
    </FormControl>
  );
};

export default SelectionField;
