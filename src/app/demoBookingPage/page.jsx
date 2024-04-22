import React from "react";

import ClientDemoBooking from "../clientside/DemoBooking"

export const metadata = {
  title:"Hushh | Schedule a live demo call with us and know more",
  description:'Book a call to checkout live demonstration of our products and know more',
  keywords:'Book a call, Appointment, Live Demo, Live Demontrations,Quick Access, Walkthrough ,Demo Videos, Watch Demo, Meet our founder,Data API Business, Data Autonomy, Data Equity, Consent-Driven Excellence, Technology For Everyone, Hushh Wallet App, Hushh Button, Vibe Search, Browser Companion, Concierge App, Valet Chat, Vibe Search API, Hushh For Students, Brand Wallet, Receipt Radar, Future of Digital Identity & Personalised Experiences, Gen AI, GenAI '
}


const DemoBookingPage = () => {
  return (
    <>
     <ClientDemoBooking/>
    </>
  );
};

export default DemoBookingPage;
