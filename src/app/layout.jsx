import './globals.css'
import { Navbar } from './_components/Navbar'
import { mulish } from './_utilities/fonts'
import HomebannerBG from './_components/svg/images/homeBannerBg'
import { Providers } from './provider'
import Header from './_components/header'
import React from 'react'
import ResponsiveSizeProvider from './context/responsive'
import ContactForm from './_components/features/contactForm'
import HeaderComponent from './_components/features/HeaderComponent'
import emailjs from '@emailjs/browser';


export const metadata = {
  title: 'HUSHH',
  description: 'Your data Your Business',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body style={{backgroundColor:'black'}} className={`${mulish.variable} font-sans`} >
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>    
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"/>
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script src="https://mediafiles.botpress.cloud/fbf5d1e1-066c-4f35-a420-7128eae2130c/webchat/config.js" defer></script>
      <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
</script>

        <ResponsiveSizeProvider>
          <header className='h-[90px] w-full absolute z-50'>
            <HeaderComponent />
          </header>
          <div className="">
            <Providers>
              {children}
            </Providers>
          </div>
        </ResponsiveSizeProvider>
      </body>
    </html>
  );
}
