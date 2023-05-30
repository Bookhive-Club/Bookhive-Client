//@ts-nocheck
import Script from "next/script";
import ChakraWrapper from "@/provider/chakraProvider";
import { Inter } from "next/font/google";
import "@/styles/main.scss";
import Head from "next/head";
import ErrorBoundary from "@/utils/errorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bookhive",
  description: "An Open Platform to Engage Book Lovers.",
  icons: {
    icon: {
      url: "/logo.png",
      type: "image/ico",
    },
    shortcut: { url: "/logo.png", type: "image/png" },
  },
  openGraph: {
    title: "Bookhive",
    description: "An Open Platform to Engage Book Lovers ( Bibliophiles ).",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <body>
        <ChakraWrapper>{children}</ChakraWrapper>
      </body>
    </>
  );
}
