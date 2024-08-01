"use client";
import React, { useRef, useState, useEffect } from "react";
import HushhHeaderLogo from "./svg/hushhHeaderLogo";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Box, Button, Container, Flex, Text, Badge } from "@chakra-ui/react";
import { useResponsiveSizes } from "../context/responsive";
import { Bars3Icon } from "./svg/icons/hamburgerMenuIcon";
import { CloseMenuIcon } from "./svg/icons/closeMenuIcon";
import SearchBar from "./features/searchBar";
import { ChevronArrowIcon } from "./svg/icons/chevronArrowIcon";
import HushhWalletIcon from "./svg/hushhWalletIcon";
import HushhButtonIcon from "./svg/hushhButton";
import VibeSearchIcon from "./svg/vibeSearch";
import ChromeExtentionLogo from "./svg/ChromeExtensionLogo";
import ConciergeApp from "./svg/conciergeApp";
import { usePathname, useRouter } from 'next/navigation'
import ValetChat from "./svg/valetChat";
import VibeSearchApi from "./svg/vibeSearchApi";
import { headerAssets } from "./svg/icons/HeaderIcons/headerAssets";
import { animateScroll as scroll } from "react-scroll";
import { FiUser, FiYoutube } from 'react-icons/fi';
import { useMediaQuery } from "react-responsive";
import SmallVibeSearch from "./svg/smallVibeSearch.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HushhButtonSmallIcon from "./svg/icons/hushhButtonSmallIcon"

export default function Header() {

  const { isTablet, isMobile, isDesktop } = useResponsiveSizes();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsSubmenu, setProductsSubmenu] = useState(false);
  const [productsSubmenuMobile, setProductsSubmenuMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerBackground, setHeaderBackground] = useState("transparent");
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For the dropdown
  const [userEmail, setUserEmail] = useState('');
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false)

  const noHeaderPaths = ['/vivaConnect', '/viva-connect', '/viva-connect/qrPage', '/qrCodePage'];

  const shouldShowHeader = !noHeaderPaths.includes(pathname);
  const notify = () => toast("This Product is Coming Soon!");

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     const { data } = await supabase.auth.getSession(); // Get the session data

  //     console.log('data:',data);
  //     console.log('user email: ',data?.session?.user?.email);

  //     if (data.session) {
  //       setIsLoggedIn(true); 
  //       const { data: userIdentities } = await supabase.auth.getUserIdentities();
  //       if (userIdentities) {
  //         const userIdentity = userIdentities.identities[0]; 
  //         const email = userIdentity.email; 
  //         setUserEmail(email); 
  //       }
  //     } else {
  //       setIsLoggedIn(false); 
  //     }
  //    console.log('Is LoggedIn: ',isLoggedIn)
  //   };
  //   checkLoginStatus(); 
  // }, [supabase]);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen); 
  };

  const scrollToContactForm = () => {
    window.scrollTo({
      top: document.getElementById("contact-form").offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      if (position > 0) {
        setHeaderBackground("black");
      } else {
        setHeaderBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = () => {
    scroll.scrollTo(7500);
  };

  const scrollInMobile = () => {
    scroll.scrollTo(3350);
  };

  const handleMenuIconToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const handleSubmenuClick = () => {
    setProductsSubmenuMobile(false);
    setIsMenuOpen(false);
  };

  const handleLoginClick = () => {
    window.open("https://hushh-button.vercel.app/user/login", "_blank");
  };

  return (
    <>
  {shouldShowHeader &&
    <div className={`w-full z-1000`} style={{ background: headerBackground }}>
      <div className=" flex items-center justify-between w-full px-3 py-2 z-1000 md:px-16 md:py-5">
        <div className="">
          <Link href="/">
            <HushhHeaderLogo />
          </Link>
        </div>
        {!isDesktop ? (
          <div className="w-full flex py-2 justify-end">
            <Container display={"flex"} gap={"1rem"}>
              <SearchBar />
              <div className=" text-white" onClick={handleMenuIconToggle}>
                {isMenuOpen ? <CloseMenuIcon /> : <Bars3Icon />}
              </div>
            </Container>
          </div>
        ) : (
          <div className="w-full px-3">
            <div className="text-white flex gap-12 px-7 md:gap-10 text-md">
              {/* <Link
                href="/"
                className={`link ${pathname === '/' ? 'gradient-text' : ''}`}
                style={{ zIndex: "1000" }}
                onMouseEnter={() => setProductsSubmenu(false)}
              >
                HOME
              </Link> */}
              <Link
                href="/about"
                // style={{ zIndex: "1000" }}
                className={`link ${pathname === '/about' ? 'gradient-text' : ''}`}
                onMouseEnter={() => setProductsSubmenu(false)}
              >
                ABOUT US
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 group"
                onMouseEnter={() => setProductsSubmenu(true)}
                onClick={() => setIsOpen(true)}
              >
                PRODUCTS
                <ChevronArrowIcon className="group-hover:rotate-0 rotate-180 transition-all duration-300" />
              </Link>
              <Link
                href="/hushhBlogs"
                onMouseEnter={() => setProductsSubmenu(false)}
              >
                BLOGS
              </Link>
              <Link
                href="/pricingPlans"
                onMouseEnter={() => setProductsSubmenu(false)}
                className={`link ${pathname === '/pricingPlans' ? 'gradient-text' : ''}`}
              >
                PRICING
              </Link>
              <Link
                href="/outbound-services"
                onMouseEnter={() => setProductsSubmenu(false)}
                className={`link ${pathname === '/outbound-services' ? 'gradient-text' : ''}`}
              >
                SERVICES
              </Link>
              <Link
                href="/UserGuide"
                onMouseEnter={() => setProductsSubmenu(false)}
                className={`link ${pathname === '/UserGuide' ? 'gradient-text' : ''}`}
              >
                GUIDE
              </Link>
              <Link
                href="/contact-us"
                onMouseEnter={() => setProductsSubmenu(false)}
                className={`link ${pathname === '/contact-us' ? 'gradient-text' : ''}`}
              >
                CONTACT US
              </Link>
            </div>
            {/* {productsSubmenu && (
              <div
                className="bg-white z-100 flex flex-col gap-4 absolute pl-8 pr-8 mt-4 pt-5 pb-7 rounded-2xl shadow-lg shadow-[#A7AEBA1F]"
                onMouseEnter={() => setProductsSubmenu(true)}
                onMouseLeave={() => setProductsSubmenu(false)}
              >
                <p className="text-xs text-fontColor2 font-semibold">
                  HUSHH PRODUCTS
                </p>
                <div className="flex gap-2 z-1000">
                  <div className="flex-1 flex flex-col gap-2">
                  <Link
                      href={"/products/hushhWalletApp"}
                      onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 items-start hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                      <div className="">
                        <HushhWalletIcon className="w-6 h-6" />
                      </div>
                      <div className="">
                        <h1 className="font-semibold">Hushh Wallet App</h1>
                        <p className="text-sm font-medium text-fontColor3">
                        Your personal data vault. Organize, control,<br/> and monetize your information
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"/products/hushhButton"}
                      onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 items-start hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                      <div className="">
                        <HushhButtonIcon size={24} />
                      </div>
                      <div className="">
                        <h1 className="font-semibold">Hushh Button</h1>
                        <p className="text-sm font-medium text-fontColor3">
                        Seamlessly share your preferences with  <br /> brands for personalized experiences
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"/products/browserCompanion"}
                      onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                      <div className="">
                        <ChromeExtentionLogo className="w-6 h-6" />
                      </div>
                      <div className="">
                        <h1 className="font-semibold">
                          Hushh Browser Companion
                        </h1>
                        <p className="text-sm font-medium text-fontColor3">
                        Track and manage your online browsing data <br/>, building a complete digital profile
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"/developerApi"}
                      onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                      <div className="">
                        <VibeSearchApi className="w-6 h-6" />
                      </div>
                      <div className="">
                        <h1 className="font-semibold">Developer API</h1>
                        <p className="text-sm font-medium text-fontColor3">
                        Tools for businesses to integrate <br/> Hushh data into their applications
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={"/products/conciergeApp"}
                      onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                      <div className="">
                        <ConciergeApp className="w-6 h-6" />
                      </div>
                      <div className="">
                        <h1 className="font-semibold">Hushh Concierge App</h1>
                        <p className="text-sm font-medium text-fontColor3">
                        Elevate your lifestyle with personalized <br /> recommendations and services  
                        </p>
                      </div>
                    </Link>
                    
                  </div>

                  <div className="flex-1 flex flex-col gap-2 w-full">
                  <Link
                      href={"/products/vibeSearch"}
                      onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                      <div className="">
                        <VibeSearchIcon className="w-6 h-6" />
                      </div>
                      <div className="">
                        <h1 className="font-semibold">VIBE Search App</h1>
                        <p className="text-sm font-medium text-fontColor3">
                        Discover products you love with <br />{" "}
                        image-based search and AI recommendations
                        </p>
                      </div>
                    </Link>
                
                    <Link
                      href={"/products/hushhValetChat"}
                      onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                      <div className="">
                        <ValetChat className="w-6 h-6" />
                      </div>
                      <div className="">
                        <h1 className="font-semibold">Valet Chat</h1>
                        <p className="text-sm font-medium text-fontColor3">
                        Your AI-powered financial assistant <br /> for effortless expense management 
                        </p>
                      </div>
                    </Link>
                    <ToastContainer />  
                    <Link
                      href={"#"}
                      onClick={notify}
                      // onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                    
                      <div className="">
                        <VibeSearchApi className="w-6 h-6" />
                      </div>
                      <div className="flex-col">
                        <h1 className="font-semibold flex-row">
                          VIBE Search APIs
                        <Badge className="gradient-bg p-1" ml={4} borderRadius={'0.6rem'} fontSize={'0.6rem'} color={'white'}>Coming Soon !</Badge>
                        </h1>
                        
                        <p className="text-sm font-medium text-fontColor3">
                        Integrate image-based product <br /> search into your app or website 
                        </p>
                      </div>
                    </Link>
                    <ToastContainer/>  
                    <Link
                      href={"#"} 
                      onClick={notify}
                      // onClick={() => setProductsSubmenu(false)}
                      className="flex gap-4 group hover:text-white hover:bg-black px-5 py-2.5 rounded-xl"
                    >
                      <div className="">
                        <headerAssets.VibeSearchMarketplace className="w-6 h-6" />
                      </div>
                      <div className="flex-col">
                        <h1 className="font-semibold flex-row">
                          VIBE Search Marketplace
                          <Badge className="gradient-bg p-1" ml={4} borderRadius={'0.6rem'} fontSize={'0.6rem'} color={'white'}>Coming Soon !</Badge>
                        </h1>
                        <p className="text-sm font-medium text-fontColor3">
                        A platform for brands to showcase their <br/> products and reach new customers
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )} */}
             {isOpen && (
        <div className="absolute px-5 max-w-6xl rounded-2xl z-10 p-4 bg-white shadow-lg">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="gap-4">
              <h3 className="font-bold text-gray-800">For Customers</h3>
              <ul style={{listStyle:'none'}} className="mt-2 space-y-4">
                <li>
                  <Link href="#" className="flex items-center space-x-4" prefetch={false}>
                    <HushhWalletIcon className="w-10 h-10" />
                    <div>
                      <div className="font-semibold">Hushh Wallet App</div>
                      <div className="text-sm text-gray-500">Your personal data vault. Organize, control, and monetize your information</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-4" prefetch={false}>
                    <HushhButtonSmallIcon className="w-10 h-10" />
                    <div>
                      <div className="font-semibold">Hushh Button</div>
                      <div className="text-sm text-gray-500">Seamlessly share your preferences with brands for personalized experiences</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-4" prefetch={false}>
                    <ChromeExtentionLogo className="w-10 h-10" />
                    <div>
                      <div className="font-semibold">Hushh Browser Companion</div>
                      <div className="text-sm text-gray-500">Track and manage your online browsing data, building a complete digital profile</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-4" prefetch={false}>
                    <VibeSearchIcon className="w-10 h-10" />
                    <div>
                      <div className="font-semibold">VIBE Search App</div>
                      <div className="text-sm text-gray-500">Discover products you love with image-based search and AI recommendations</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            
            
            <div>
               <div>
              <h3 className="font-bold text-gray-800">More</h3>
              <ul style={{listStyle:'none'}} className="mt-2 space-y-2">
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <CreditCardIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Payment methods</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <LinkIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Link</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <CreditCardIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Financial Connections</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <ImageIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Identity</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <AnchorIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Atlas</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
              <h3 className="font-bold mt-4 text-gray-800">Embedded Payments and Finance</h3>
              <ul style={{listStyle:'none'}} className="mt-2 space-y-4">
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <NetworkIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Connect</div>
                      <div className="text-sm text-gray-500">Payments for platforms</div>
                    </div>
                  </Link>
                </li>
                <li>
                <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <NetworkIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Connect</div>
                      <div className="text-sm text-gray-500">Payments for platforms</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Coming Soon</h3>
              <ul style={{listStyle:'none'}} className="mt-2 space-y-4">
                <li>
                  <Link href="#" className="flex items-center space-x-4" prefetch={false}>
                    <ConciergeApp className="w-10 h-10" />
                    <div>
                      <div className="font-semibold">Hushh Concierge App</div>
                      <div className="text-sm text-gray-500">Elevate your lifestyle with personalized recommendations and services</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-4" prefetch={false}>
                    <ValetChat className="w-10 h-10" />
                    <div>
                      <div className="font-semibold">Valet Chat</div>
                      <div className="text-sm text-gray-500">Your AI-powered financial assistant for effortless expense management</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-4" prefetch={false}>
                    <VibeSearchApi className="w-10 h-10" />
                    <div>
                      <div className="font-semibold">VIBE Search APIs</div>
                      <div className="text-sm text-gray-500">Integrate image-based product search into your app or website</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-4" prefetch={false}>
                    <FileTypeIcon className="w-10 h-10" />
                    <div>
                      <div className="font-semibold">VIBE Search Marketplace</div>
                      <div className="text-sm text-gray-500">A platform for brands to showcase their products and reach new customers</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
           
            <div className="gap-4">
              <h3 className="font-bold text-gray-800">For Businesses</h3>
              <ul style={{listStyle:'none'}} className="mt-2 space-y-4">
                <li>
                  <Link href="#" className="flex items-center space-x-4" prefetch={false}>
                    <HushhWalletIcon className="w-10 h-10" />
                    <div>
                      <div className="font-semibold">Hushh Wallet App</div>
                      <div className="text-sm text-gray-500">Your personal data vault. Organize, control, and monetize your information</div>
                    </div>
                  </Link>
                </li>
               </ul> 
               </div>
            
          </div>
        </div>
      )}
          </div>
        )}

        <div className="">
          { isDesktop && (
            <div className="login">
              <SearchBar />
              <Button
                border={"1px solid #606060"}
                borderRadius={"5px"}
                w={"10.75rem"}
                h={"3.125rem"}
                // color={theme.colors._white}
                className="bg-gradient-to-r from-red-600 to-purple-600 text-transparent bg-clip-text"
                lineHeight={"50px"}
                letterSpacing={"0.5rem"}
                _hover={{
                  background:
                    "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
                  color: "white",
                  border: "none",
                }}
                onClick={handleLoginClick}
              >
                LOGIN
              </Button>
            </div>
          )}
        </div> 
      </div>

      <div className="w-full justify-end flex px-6 z-1000">
        {isMenuOpen && (isTablet || isMobile )? (
          <div className={`w-full flex flex-col gap-1`} ref={menuRef}>
            <div className="text-white w-full flex items-end flex-col text-center">
              {/* <Link
                href="/"
                className="py-2 border border-myBorder bg-black rounded-t w-1/2"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link> */}
              <Link
                href="/about"
                className="py-2 w-1/2 border border-myBorder border-t-0 bg-black"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link
                href="#"
                onClick={() => setProductsSubmenuMobile(!productsSubmenuMobile)}
                className="py-2 w-1/2 border border-myBorder bg-black border-t-0 "
              >
                <div className="flex gap-2 items-center justify-center">
                  PRODUCTS
                  <ChevronArrowIcon
                    className={`${productsSubmenuMobile ? "" : "rotate-180"} group-hover:rotate-0 transition-all duration-300`}
                  />
                </div>
              </Link>
              <div className="w-full z-10000">
                {productsSubmenuMobile && (
                  <div className=" flex flex-col w-full items-end">
                    {/* <p className="text-xs text-fontColor2 font-semibold">HUSHH PRODUCTS</p> */}

                    <div className=" flex flex-col w-3/4 ">
                      <Link
                        href={"/products/hushhButton"}
                        onClick={handleSubmenuClick}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0 "
                      >
                        <div className="">
                          <HushhButtonIcon size={24} />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">Hushh Button</h1>
                          {/* <p className='text-sm font-medium text-fontColor3'>Share data for personalized <br /> recommendations.</p> */}
                        </div>
                      </Link>
                      <Link
                        href={"/products/browserCompanion"}
                        onClick={handleSubmenuClick}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0 "
                      >
                        <div className="">
                          <ChromeExtentionLogo className="w-6 h-6" />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">
                            Hushh Browser Companion
                          </h1>
                          {/* <p className='text-sm font-medium text-fontColor3'>Enhanced recommendations &<br /> impactful marketing.</p> */}
                        </div>
                      </Link>
                      <Link
                        href={"/products/conciergeApp"}
                        onClick={handleSubmenuClick}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0 "
                      >
                        <div className="">
                          <ConciergeApp className="w-6 h-6" />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">Hushh Concierge App</h1>
                          {/* <p className='text-sm font-medium text-fontColor3'>Speak your wish, get luxury <br /> redefined: Hushh Concierge</p> */}
                        </div>
                      </Link>
                      <Link
                        href={"/products/vibeSearch"}
                        onClick={handleSubmenuClick}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0 "
                      >
                        <div className="">
                          <VibeSearchIcon className="w-6 h-6" />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">VIBE Search App</h1>
                          {/* <p className='text-sm font-medium text-fontColor3'>Find perfect items to express your <br /> individuality in just one click.</p> */}
                        </div>
                      </Link>
                      <Link
                        href={"/products/hushhWalletApp"}
                        onClick={handleSubmenuClick}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0"
                      >
                        <div className="">
                          <HushhWalletIcon className="w-6 h-6" />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">Hushh Wallet App</h1>
                          {/* <p className='text-sm font-medium text-fontColor3'>Customer User Flow + Client Advisor User Flow</p> */}
                        </div>
                      </Link>
                      <Link
                        href={"/developerApi"}
                        onClick={handleSubmenuClick}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0 "
                      >
                        <div className="">
                          <VibeSearchApi className="w-6 h-6" />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">Developer API</h1>
                        </div>
                      </Link>
                      <Link
                        href={"/products/hushhValetChat"}
                        onClick={handleSubmenuClick}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0 "
                      >
                        <div className="">
                          <ValetChat className="w-6 h-6" />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">Valet Chat</h1>
                          {/* <p className='text-sm font-medium text-fontColor3'>Valet Chat: Ditch receipts, unlock <br /> insights.</p> */}
                        </div>
                      </Link>
                      <ToastContainer/>
                      <Link
                        href={"#"}
                        onClick={notify}
                        // onClick={handleSubmenuClick}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0 "
                      >
                        
                        <div className="">
                          <VibeSearchApi className="w-6 h-6" />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">VIBE Search APIs</h1>
                          <Badge colorScheme='purple'>New</Badge>
                        </div>
                      </Link>
                      <ToastContainer/>
                      <Link
                        href={"/"}
                        onClick={notify}
                        className="flex gap-4 pl-6 items-center w-full py-2 border border-myBorder rounded-tl-lg bg-black border-t-0 "
                      >
                        <div className="">
                          <headerAssets.VibeSearchMarketplace className="w-6 h-6" />
                        </div>
                        <div className="">
                          <h1 className="font-semibold">
                            VIBE Search Marketplace
                          </h1>
                          {/* <p className='text-sm font-medium text-fontColor3'>News and updates</p> */}
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/pricingPlans"
                className="py-2 w-1/2 border border-myBorder bg-black border-t-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/UserGuide"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 w-1/2 border border-myBorder bg-black border-t-0"
              >
                GUIDE
              </Link>
              <Link
                href="/hushhBlogs"
                className="py-2 w-1/2 border border-myBorder bg-black border-t-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 w-1/2 border border-myBorder bg-black border-t-0"
              >
                CONTACT US
              </Link>
              {/* <ScrollLink
                to="contact-form"
                spy={true}
                smooth={true}
                duration={7000}
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToContactForm();
                }}
                className="py-2 w-1/2 border border-myBorder bg-black border-t-0"
              >
                CONTACT US
              </ScrollLink> */}
              <Link
                href="/"
                className="py-2 w-1/2 border border-myBorder border-t-0 bg-black rounded-b"
                // onClick={() => setIsMenuOpen(false) }
                onClick={handleLoginClick}
              >
                LOGIN
              </Link>
            </div>
          </div>
        ) : (
          <div className=""></div>
        )}
      </div>
    </div>
  }  
    </>
  );
};


function Icon({ prompt, className }) {
  return <div className={`${className} bg-gray-300`}>{prompt}</div>
}

function AnchorIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22V8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <circle cx="12" cy="5" r="3" />
    </svg>
  )
}


function AwardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  )
}


function BarcodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 5v14" />
      <path d="M8 5v14" />
      <path d="M12 5v14" />
      <path d="M17 5v14" />
      <path d="M21 5v14" />
    </svg>
  )
}


function ComponentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  )
}


function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function FileTypeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M9 13v-1h6v1" />
      <path d="M12 12v6" />
      <path d="M11 18h2" />
    </svg>
  )
}


function ImageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function LinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function NetworkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

