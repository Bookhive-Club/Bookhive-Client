//@ts-nocheck
import Script from "next/script";
import ChakraWrapper from "@/provider/chakraProvider";
import { Inter } from "next/font/google";
import "@/styles/main.scss";
import { Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <title>Document</title> */}
      </head>
      <body className="poppins.className">
        <body>
          <ChakraWrapper>{children}</ChakraWrapper>
        </body>
      </body>
    </html>
  );
}
