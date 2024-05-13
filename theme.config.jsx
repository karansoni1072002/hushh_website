import React, { Component } from 'react'
import Image from 'next/image'
import { useSession } from "next-auth/react";
import MDXComponents from './src/app/_components/developerApiContent/page'
import HushhLogo from './src/app/_components/svg/hushhLogoS.svg'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import Header from './src/app/_components/header';
import remarkGfm from 'remark-gfm';
import FooterComponent from './src/app/_components/features/FooterComponent';

const MyLogo = () => {
  const { data: session } = useSession();
  const userImage = session?.user?.image;
  const src = userImage;

  return (
    <Menu>
      <MenuButton>
        {userImage ? (
          <Image loader={() => src} src={src} alt="User Image" width={34} height={34} />
        ) : (
          <Image src={HushhLogo} alt="hushhLogo" width={34} height={34} />
        )}
      </MenuButton>
      <MenuList>
        <MenuItem>{session?.user?.name}</MenuItem>
        <MenuItem onClick={() => signOut()}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default {
    logo: <span>Hushh Developer API </span>,
    project: {
      link:'/developer-api/on-boarding',
      icon: (
        <MyLogo/>
      )
    },
    footer:{
       text:null,
       Component:null,
    },
    feedback:{ content: "To know more about hushh develoeper API", label:'To know more about hushh develoeper API'}, 
    editLink: { text: null },
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Hushh Developer API" />
        <meta property="og:description" content="Secure way of relaying personal information" />
      </>
    ),
    banner: {
      // key: '2.0-release',
      text: (
        <>
        <div style={{height:'100%'}}>
          <Header/>
        </div>
        </>
      ),
    },
    docsRepositoryBase: 'https://hushh.gitbook.io/hushh-docs',
    // logo:<Image src={HushhLogo} />,
    useNextSeoProps() {
      return {
        titleTemplate: '%s – Developer API'
      }
    },
    content: {
      components: MDXComponents,
    },
    markdown: {
      remarkPlugins: [remarkGfm],
    },
}

