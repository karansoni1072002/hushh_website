'use client';
import React from 'react';
import { getLocalStorage, setLocalStorage } from "./storageHelper";
import { useState, useEffect } from "react";

export default function CookieBanner(){
    const [cookieConsent, setCookieConsent] = useState(null);
    console.log('Cookie Consent initial',cookieConsent);

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null);
         console.log('storedCookieConsent: ',storedCookieConsent)
        setCookieConsent(storedCookieConsent);
      }, [setCookieConsent]);
    
      useEffect(() => {
        const newValue = cookieConsent ? "granted" : "denied";
    
        window.gtag("consent", "update", {
          analytics_storage: newValue,
        });
    
        setLocalStorage("cookie_consent", cookieConsent);
      }, [cookieConsent]);

    return (
        <div
        className={`fixed bottom-0 left-0 right-0
                    flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4
                    bg-white text-black rounded-lg shadow
                    z-[10000]
                    my-10 mx-auto max-w-max md:max-w-screen-sm
                   `}
      >
      <div className="text-cente text-white-200 z-[10000]">
          <p>
            We use <span className="font-bold text-sky-400">cookies</span> on
            our site.
          </p>
      </div>

      <div className="flex gap-2 z-[10000]">
        <button
          className="px-5 z-[10000] py-2 cursor-pointer text-white bg-slate-600 rounded-md border-gray"
          onClick={() => {
            console.log('Decline button clicked');
            setCookieConsent(false);
          }}        
          >
          Decline
        </button>
        <button
          className="bg-gray-900 z-[10000] cursor-pointer px-5 py-2 bg-slate-600 text-white rounded-lg"
          onClick={() => {
            console.log('Decline button clicked');
            setCookieConsent(true);
          }}        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}