'use client'
import React, {  } from 'react'
import MDXComponents from './src/app/_components/developerApiContent/page'
import Header from './src/app/_components/header'
import remarkGfm from 'remark-gfm';
import MyLogo from './src/app/developerApi/userLogo';
import LogoutButton from './src/app/_components/developerApiContent/logout';

export default {
    logo: <span>Hushh Developer API </span>,
    project: {
      link:'/developer-api/on-boarding',
      icon: (
        <MyLogo/>
      ),
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
      dismissible:false,
      key: '2.0-release',
      text: (
      <a href="/" target="_blank">
        🤫 Back to Hushh Main website
      </a>
    )
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

