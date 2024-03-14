import React from 'react'
import HushhFooterLogo from '../svg/hushhFooterLogo'
import Link from 'next/link'
import { AndroidIcon } from '../svg/icons/androidIcon'
import { IosIcon } from '../svg/icons/iosIcon'

const FooterComponent = () => {
    return (
        <div className=' bg-footerBG text-white pt-[375px]'>
            <div className="">
                <div className="flex justify-between gap-52 items-end pb-[6.5rem] px-32">
                    <div className="w-96 gap-4 flex flex-col justify-between">
                        <HushhFooterLogo />
                        <h1 className='font-semibold text-2xl leading-10'>We growing up your business <br />with personal AI manager.</h1>
                        <p className='text-lg'>Manish Sainani, 2024</p>
                    </div>

                    <div className="flex justify-between w-full flex-1">
                        <div className="flex flex-col gap-4">
                            <p className='text-base font-medium opacity-80 leading-6'>Platform</p>
                            <div className="flex flex-col text-lg gap-5 leading-5">
                                <Link href='#'>Plans & Pricing</Link>
                                <Link href='#'>Personal AI Manager</Link>
                                <Link href='#'>AI Business Writer</Link>
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
        </div>
    )
}

export default FooterComponent