import React from 'react'
import Image from 'next/image'
import { useSession } from "next-auth/react";
import MDXComponents from './src/app/_components/developerApiContent/page'
import HushhLogo from './src/app/_components/svg/hushhLogoS.svg'

const MyLogo = () => {
  const { data: session } = useSession();
  const userImage = session?.user?.image;
  const src = userImage;

  return userImage ? (
    <Image loader={() => src} src={src} alt="User Image" width={34} height={34} />
  ) : (
    <Image  src={HushhLogo} alt='hushhLogo' width={34} height={34}/>
  );
};

export default {
    logo: <span>Hushh Developer API </span>,
    project: {
      link: 'https://github.com/shuding/nextra',
      icon: (
        <MyLogo/>
      )
    },
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Hushh Developer API" />
        <meta property="og:description" content="Secure way of relaying personal information" />
      </>
    ),
    // banner: {
    //   key: '2.0-release',
    //   text: (
    //     <>
    //       <Header/>
    //     </>
    //   )
    // },
    // docsRepositoryBase: 'https://github.com/shuding/nextra/tree/main/docs',
    // logo:<Image src={HushhLogo} />,
    useNextSeoProps() {
      return {
        titleTemplate: '%s – Developer API'
      }
    },
    content: {
      components: MDXComponents,
    },
}

