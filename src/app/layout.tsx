import { Inter } from "next/font/google";
import "@/styles/main.scss";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import ProviderWrapper from "@/provider/chakraProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Bookhive",
  description:
    "Discover, swap, and sell books peer-to-peer! Meet and engage with other Booklovers",
  icons: {
    icon: {
      url: "/logo.png",
      type: "image/ico",
    },
    shortcut: { url: "/logo.png", type: "image/png" },
  },
  openGraph: {
    title: "Bookhive",
    description:
      "Discover, swap, and sell books peer-to-peer! Meet and engage with other Booklovers",
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
          <ProviderWrapper>{children}</ProviderWrapper>
          <Analytics />
        </body>
      </body>
    </html>
  );
}
