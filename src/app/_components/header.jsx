'use client'
import React, { useRef, useState, useEffect } from 'react'
import HushhHeaderLogo from './svg/hushhHeaderLogo'
import Link from 'next/link'
import { Button } from '@chakra-ui/react'
import theme from '../theme'
import { useResponsiveSizes } from '../context/responsive'
import { Bars3Icon } from './svg/icons/hamburgerMenuIcon'
import { CloseMenuIcon } from './svg/icons/closeMenuIcon'

const Header = () => {
    const { isMobile } = useResponsiveSizes()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuIconToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    let menuRef = useRef();


    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current?.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }
        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

    return (
        <div className='fixed top-0 z-50 w-full'>
            <div className=' bg-myBG flex items-center justify-between px-6 py-2 md:px-32 md:py-10'>

                <div className="">
                    <HushhHeaderLogo />

                </div>
                <div className="">
                    {isMobile ?
                        (
                            <div className=" text-white" onClick={handleMenuIconToggle}>
                                {isMenuOpen ? <CloseMenuIcon /> : <Bars3Icon />}
                            </div>
                        ) : (
                            <div className="text-white flex gap-20 ">
                                <Link href='/'>HOME</Link>
                                <Link href='https://www.linkedin.com/company/hushh-ai/about'>ABOUT US</Link>
                                <Link href='#'>INVESTORS</Link>
                                <Link href='https://www.linkedin.com/company/hushh-ai/jobs'>WORK WITH US</Link>
                            </div>
                        )
                    }
                </div>

                {!isMobile && <div className="">
                    <Button
                        border={"1px solid #606060"}
                        borderRadius={"5px"}
                        w={"8.75rem"}
                        h={"3.125rem"}
                        // color={theme.colors._white}
                        className="bg-gradient-to-r from-red-600 to-purple-600 text-transparent bg-clip-text"
                        lineHeight={"50px"}
                        letterSpacing={"0.5rem"}
                        _hover={{
                            background:
                                "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
                            color: "white"
                        }}
                    >
                        LOGIN
                    </Button>
                </div>}
            </div >
            <div className="w-full justify-end flex px-6">
                {
                    isMenuOpen && isMobile ? (
                        <div className="w-1/2 flex flex-col gap-1" ref={menuRef}>
                            <div className="text-white flex flex-col text-center">
                                <Link href='/' className='py-2 w-full border border-myBorder bg-black rounded-t'>HOME</Link>
                                <Link href='https://www.linkedin.com/company/hushh-ai/about' className='py-2 w-full border border-myBorder border-t-0 bg-black'>ABOUT US</Link>
                                <Link href='#' className='py-2 w-full border border-myBorder bg-black border-t-0'>INVESTORS</Link>
                                <Link href='https://www.linkedin.com/company/hushh-ai/jobs' className='py-2 w-full border border-myBorder bg-black border-t-0'>WORK WITH US</Link>
                                <Link href='' className='py-2 w-full border border-myBorder border-t-0 bg-black rounded-b'>LOGIN</Link>
                            </div>
                        </div>
                    ) : (
                        <div className=""></div>
                    )
                }
            </div>
        </div >
    )
}

export default Header