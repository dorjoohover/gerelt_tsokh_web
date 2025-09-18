"use client";

import "./globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme/theme";
import Fonts from "@/theme/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import { imgMiniLogo } from "@/global/assets";
import { usePathname } from "next/navigation";

import { findTitle } from "@/global/functions";
import { Suspense } from "react";
import { MetaOg } from "@/components/meta/home";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" type="image/x-icon" href={imgMiniLogo} />

        <title>{findTitle(pathname)}</title>
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Fonts />
          {!pathname.includes("admin") && (
            <>
              <Navbar />
              <Box h={20} />
            </>
          )}
          <Suspense fallback={<></>}>{children}</Suspense>

          {!pathname.includes("admin") && (
            <>
              <Box h={10} />
              <Footer />
            </>
          )}
        </ChakraProvider>
      </body>
    </html>
  );
}
