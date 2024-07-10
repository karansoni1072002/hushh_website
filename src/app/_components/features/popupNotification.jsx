"use client";
import React, { useState, useEffect } from "react";

const PopupNotification = ({ message }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    const timeout = setTimeout(() => {
      setShow(false);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  //   const notificationSound = new Audio(notification);

  

 

  if (!show) return null;

  return (
    <>
      {/* <div className="popup" onLoad={useBotpressChatWithSoundAndNotification}> */}
      <div className="popup">
        {message}
      </div>
      ;
    </>
  );
};

export default PopupNotification;
