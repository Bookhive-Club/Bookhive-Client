export const copyToClipboard = (data: string) => {
  const isAble = navigator?.clipboard?.writeText;
  //@ts-ignore
  if (isAble) {
    navigator?.clipboard.writeText(data);
  } else {
    console.log("failed to copy");
  }
};
