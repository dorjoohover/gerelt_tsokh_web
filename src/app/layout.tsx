'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme/theme";
import Fonts from "@/theme/fonts";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <ChakraProvider theme={theme}>
        <Fonts />
          {children}</ChakraProvider>
      </body>
    </html>
  );
}
