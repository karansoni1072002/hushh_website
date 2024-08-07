'use client'
import React, { useState } from 'react';
import { hasCookie, setCookie } from 'cookies-next';
import Link from 'next/link';

import { useCookies } from 'react-cookie';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = React.useState(true);
  React.useEffect(()=> {
    setShowConsent(hasCookie("localConsent"));
  },[]);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent","true",{})
  }

  if(showConsent){
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70 z-[5000]">
      <div className='fixed bottom-0 left-0 flex items-center justify-between px-4 py-8 bg-orange-400 text-#fff '>
        <span className='text-dark text-base mr-16 '>
           This website use cookies to imporve use experience. By using our website you consent to all the Terms of Usage in accordance with our <Link href="/privacy-policy" className='font-bold text-custom'>Privacy Policy</Link>.
        </span>

        <button className='bg-gray py-2 px-10 rounded' onClick={() => acceptCookie()}>
        Accept
      </button>
      </div>
      
    </div>
  );
};

export default CookieConsent;
