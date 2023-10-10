import React from "react";

export function convertToIcon(icon: React.ReactNode) {
  if (!React.isValidElement(icon)) {
    return icon;
  } else {
    return null;
  }
}
