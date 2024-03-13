import './globals.css'
import { Navbar } from './_components/Navbar'
import { mulish } from './_utilities/fonts'
import HomebannerBG from './_components/svg/images/homeBannerBg'
import { Providers } from './provider'
import Header from './_components/header'
import React from 'react'
import ResponsiveSizeProvider from './context/responsive'
import ContactForm from './_components/features/contactForm'
export const metadata = {
  title: 'HUSHH',
  description: 'Your data Your Business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${mulish.variable} font-sans relative`} >
        <ResponsiveSizeProvider>
          <header className='h-full absolute z-50'>
            <Header />
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
