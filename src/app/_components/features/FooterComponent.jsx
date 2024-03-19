import React from 'react'
import HushhFooterLogo from '../svg/hushhFooterLogo'
import Link from 'next/link'
import { AndroidIcon } from '../svg/icons/androidIcon'
import { IosIcon } from '../svg/icons/iosIcon'
import { useResponsiveSizes } from '../../context/responsive'
import '../../globals.css'
import HushhMobileFooterLogo from '../svg/hushhMobileFooterLogo'

const FooterComponent = () => {
    const isMobile = useResponsiveSizes()
    return (
        <div className=' bg-footerBG text-white pt-[375px]'>
            {/* Desktop View */}
            <div className="hideDesktopSVG ml-32 mb-4">
                <HushhFooterLogo />
            </div>
            <div className="desktop-view">
                <div className="flex justify-between gap-52 items-end pb-[6.5rem] px-32">
                    <div className="w-96 gap-4 flex flex-col justify-between">

                        <h1 className='font-semibold text-2xl leading-10'>We growing up your business <br />with personal AI manager.</h1>
                        <p className='text-lg'>Manish Sainani, 2024</p>
                    </div>

                    <div className="flex justify-between w-full flex-1">
                        <div className="flex flex-col gap-4">
                            <p className='text-base font-medium opacity-80 leading-6'>Our Products</p>
                            <div className="flex flex-col text-lg gap-5 leading-5">
                                <Link href='products/hushhButton'>Hushh Button</Link>
                                <Link href='products/walletApp'>Hushh Wallet App</Link>
                                <Link href='products/vibeSearch'>Vibe Search</Link>
                                <Link href='products/browserCompanion'>Browser Companion</Link>
                                <Link href='products/conciergeApp'>Concierge App​</Link>
                                <Link href='products/hushhValetChat'>Valet Chat</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className='text-base font-medium opacity-80 leading-6'>Company</p>
                            <div className="flex flex-col text-lg gap-5 leading-5">
                                <Link href='#'>Blog</Link>
                                <Link href='#'>Careers</Link>
                                <Link href='#'>News</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className='text-base font-medium opacity-80 leading-6'>Resources</p>
                            <div className="flex flex-col text-lg gap-5 leading-5">
                                <Link href='#'>Documentation</Link>
                                <Link href='#'>Papers</Link>
                                <Link href='#'>Press Conferences</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className='text-base font-medium opacity-80 leading-6'>Get the app</p>
                            <div className="flex flex-col justify-between h-full">
                                <button className='flex px-4 py-2 gap-1.5 border border-myBorder rounded-full'><AndroidIcon /> Android</button>
                                <button className='flex px-4 py-2 gap-1.5 w-max border border-myBorder rounded-full'><IosIcon /> iOS</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex justify-between leading-5 py-7 px-32 bg-gradient-to-r from-gradientColor2 to-gradientColor1">
                    <div className="">
                        <p>© 2023 Hush1One Inc. All rights reserved.</p>
                    </div>
                    <div className="flex gap-9 ">
                        <Link href='#'>Terms of Service</Link>
                        <Link href='#'>Privacy Policy</Link>
                        <Link href='#'>Cookies</Link>
                    </div>
                </div>
            </div>


            {/* Mobile View */}
            <div className="mobile-view">
                <div className="flex flex-col justify-center items-center gap-10 pb-10 pt-10">
                    <div className="w-full px-5 gap-4 flex flex-col justify-center items-start">
                        <HushhMobileFooterLogo />
                        <h1 className='font-semibold text-xl leading-10'>We help you in growing your business<br />with personal AI manager.</h1>
                        <p className='text-base'>Manish Sainani, 2024</p>
                    </div>

                    <div className="flex flex-col text-left px-5 gap-5 justify-between w-full flex-1">
                        <div className="flex">
                            <div className="flex flex-1 flex-col gap-3">
                                <p className='text-sm font-medium opacity-80 leading-6'>Platform</p>
                                <div className="flex flex-col text-base gap-2 leading-5">
                                    <Link href='#'>Plans & Pricing</Link>
                                    <Link href='#'>Personal AI Manager</Link>
                                    <Link href='#'>AI Business Writer</Link>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col gap-3">
                                <p className='text-sm font-medium opacity-80 leading-6'>Company</p>
                                <div className="flex flex-col text-base gap-2 leading-5">
                                    <Link href='#'>Blog</Link>
                                    <Link href='#'>Careers</Link>
                                    <Link href='#'>News</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className='text-sm font-medium opacity-80 leading-6'>Resources</p>
                            <div className="flex flex-col text-base gap-2 leading-5">
                                <Link href='#'>Documentation</Link>
                                <Link href='#'>Papers</Link>
                                <Link href='#'>Press Conferences</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 text-center mt-5">
                            <p className='text-base font-medium opacity-80 leading-6'>Get the app</p>
                            <div className="flex items-center justify-center gap-5 h-full">
                                <button className='flex flex-1 justify-center px-4 py-2 gap-1.5 border border-myBorder rounded-full'><AndroidIcon /> Android</button>
                                <button className='flex flex-1 justify-center px-4 py-2 gap-1.5 w-max border border-myBorder rounded-full'><IosIcon /> iOS</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col w-full justify-between leading-5 py-7 text-center gap-8 bg-gradient-to-r from-gradientColor2 to-gradientColor1">
                    <div className="flex gap-4 flex-col w-full">
                        <Link href='#'>Terms of Service</Link>
                        <Link href='#'>Privacy Policy</Link>
                        <Link href='#'>Cookies</Link>
                    </div>
                    <div className=" w-full">
                        <p>© 2023 Hush1One Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent