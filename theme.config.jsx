import React from 'react'
import HushhLogo from './src/app/_components/svg/hushhLogoS.svg'
import Image from 'next/image'

export default {
    logo: <span>Hushh Developer API </span>,
    project: {
      link: 'https://github.com/shuding/nextra'
    },
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Hushh Developer API" />
        <meta property="og:description" content="Secure way of relaying personal information" />
      </>
    ),
    // docsRepositoryBase: 'https://github.com/shuding/nextra/tree/main/docs',
    // logo:<Image src={HushhLogo} />,
    useNextSeoProps() {
      return {
        titleTemplate: '%s – Developer API'
      }
    }
    // ... other theme options
  }

