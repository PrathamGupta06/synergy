import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import Script from 'next/script'

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Synergy",
  description: "Video calling App",
  icons: {
    icon: "/icons/synergyrm.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
    <head>
      <link rel="stylesheet" media="all" href="https://momentumsynergy.kanbantool.com/assets/kanbantool-base.css" />
      <link rel="stylesheet" media="all" href="https://momentumsynergy.kanbantool.com/assets/kanbantool-sdk.css" />
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></Script>
      <Script src="https://momentumsynergy.kanbantool.com/assets/kanbantool-base.js"></Script>
      <Script src="https://momentumsynergy.kanbantool.com/assets/kanbantool-sdk.js"></Script>
    </head>
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/synergy2.png",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
