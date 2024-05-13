import React from "react";
import "../src/app/globals.css";

import ClientSideLayout from "./client";

export default function MyApp({ Component, pageProps }) {
    return <ClientSideLayout><Component {...pageProps} /></ClientSideLayout>
}
