import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSession } from "next-auth/react";
import HushhLogo from '../_components/svg/hushhLogoS.svg'

const MyLogo = () => {
  const { data: session, status } = useSession();
  const userImage = session?.session?.user?.image;
  console.log('Session from MyLogo component',session)

  if (!userImage) {
    return <Image src={HushhLogo} alt='hushhLogo' width={34} height={34}/>;
  }

  return (
    <Image loader={() => userImage} src={userImage} alt="User Image" width={34} height={34} />
  );
};

export default MyLogo;
