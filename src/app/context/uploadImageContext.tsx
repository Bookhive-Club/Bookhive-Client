import { createContext } from "react";

const ImageDataContext = createContext({});

const ImageUploadProvider = ({ children }: any) => {
  const imageData = "";
  return (
    <ImageDataContext.Provider value={imageData}>
      {children}
    </ImageDataContext.Provider>
  );
};

export { ImageUploadProvider };
