import React from "react";
import "../src/app/globals.css";
import ClientSideLayout from "./client";
import { SessionProvider } from "next-auth/react";
import "./globals.css"
import { ApiKeyProvider } from "../src/app/context/apiKeyContext";

export default function MyApp({ Component, pageProps }) {
    return <ClientSideLayout>
        <SessionProvider>
            <ApiKeyProvider>
            
        <Component {...pageProps}/>
        </ApiKeyProvider>
        </SessionProvider>
        </ClientSideLayout>
}
