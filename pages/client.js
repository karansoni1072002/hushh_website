'use client'
import { SessionProvider } from "next-auth/react"
import FooterComponent from "../src/app/_components/features/FooterComponent"
import { ChakraProvider } from "@chakra-ui/react"

export default function ClientSideLayout({
  children,
  session
}) {
  return (
    <>
    <ChakraProvider>
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
    </ChakraProvider>
    <FooterComponent></FooterComponent>
    </>
  )
}