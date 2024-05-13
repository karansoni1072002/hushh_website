'use client'
import { SessionProvider } from "next-auth/react"
import FooterComponent from "../src/app/_components/features/FooterComponent"

export default function ClientSideLayout({
  children,
  session
}) {
  return (
    <>
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
    <FooterComponent></FooterComponent>
    </>
  )
}