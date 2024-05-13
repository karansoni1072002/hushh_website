'use client'
import React, { useState } from "react";
import { useApiKey } from "../../context/apiKeyContext";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Onboarding() {
  // const { apiKey } = useApiKey();
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { data: session, status } = useSession()

  console.log('session data:',session);
  const generateApiKey = async (e) => {
    console.log('button clicked upr wala')
    e.preventDefault();
      try {
        const response = await axios.post(
          "https://hushhdevenv.hushh.ai/dev/v1/api/sign_up",
          {
            email: "testdev@yopmail.com",
            first_name: "developer",
            password:'1234567'
          },          
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        console.log("Response:", response.data);
        if (response.data.status === 200) {
          // Saving API key for new users 
          const apiKey = response.data.API_key;
          console.log('Api Key:',response.data.API_key)
          setApiKey(apiKey);
          
        } 
      } catch (error) {
        console.log('error:',error);
      }
  };

  return (
    <div
      class=" shadow-sm text-white mt-8 onBoarding"
      data-v0-t="card"
    >
      <button
        onClick={generateApiKey}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-[#bd1e59] hover:bg-[#a11648] mt-4"
      >
        {isLoading ? "Generating..." : "Generate API Key"} {/* Show loading text */}
      </button>
      {error && <div className="text-red-500">{error}</div>}
      <div
        class="border text-card-foreground shadow-sm bg-[#1C1C1E] mt-4 p-4 flex items-center justify-between rounded"
        data-v0-t="card"
      >
        <input
          class="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-none text-white placeholder-gray-400"
          placeholder="Authorization: Bearer YOUR_API_KEY"
          value={apiKey}
          readOnly
        />
        <button 
          onClick={() => {
            navigator.clipboard.writeText(apiKey); 
          }}
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 border-none bg-[#313134] text-gray-300 ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
          >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          </svg>
          copy
        </button>
      </div>
    </div>
  );
};

// export default Onboarding;
