"use client";
import { Button, ButtonProps } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
interface TButton extends ButtonProps {
  children?: ReactNode;
  border?: string | [];
  color?: string;
  width?: number | string | string[];
  py?: string | string[];
  px?: string | string[];
  radius?: string;
  varaint?: string;
  bg?: string;
  size?: string;
  h?: string;
  w?: string;
  my?: string;
  type?: "button" | "submit";
  isLoading?: boolean;
  loadingText?: string;
}

const Buttons: FC<TButton> = ({
  children,
  border,
  py,
  px,
  radius,
  varaint,
  size,
  color,
  bg,
  h,
  w,
  my,
  type,
  loadingText,
  isLoading,
  ...props
}) => {
  return (
    <Button
      border={border}
      borderRadius={radius ? radius : "10px"}
      color={color}
      bg={bg ? bg : "brand.primary"}
      size={size ? size : ["md", "lg"]}
      px={px ? px : "2em"}
      py={py ? py : "1em"}
      my={my}
      h={h}
      w={w}
      isLoading={isLoading}
      loadingText={loadingText}
      type={type}
      _hover={
        {
          //bg: "dark.10",
        }
      }
      {...props}>
      {children}
    </Button>
  );
};

export default Buttons;
