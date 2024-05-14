import React from "react";
import "../src/app/globals.css";
import ClientSideLayout from "./client";
import { SessionProvider } from "next-auth/react";
import "./globals.css"

export default function MyApp({ Component, pageProps }) {
    return <ClientSideLayout>
        <SessionProvider>
        <Component {...pageProps} />
        </SessionProvider>
        </ClientSideLayout>
}
