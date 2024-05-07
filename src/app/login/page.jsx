'use client';

import { Box, HStack, Text, Toast } from "@chakra-ui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name , setName] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const router = useRouter()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const toast = useToast();


    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser(){
            const {data: {user}} = await supabase.auth.getUser()
            setUser(user)
            setLoading(false)
        }

        getUser();
    }, [])


    const handleSignUp = async () => {
        const res = await supabase.auth.signUp({
            email,
            password,
            name,
            phoneNumber,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`
            }
        })
        setUser(res.data.user)
        router.refresh();
        toast({
            title: "Thank You for signing up",
            description:
              "Please log in to get started with developer API access",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        
        setEmail('')
        setPassword('')
        setName('')
        setphoneNumber('')
    }

    const handleSignIn = async () => {
        const res = await supabase.auth.signInWithPassword({
            email,
            password
        })
        setUser(res.data.user)
        router.refresh();
        setEmail('')
        setPassword('')
    }

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.refresh();
        setUser(null)
    }

    console.log({loading, user})

    if (loading){
        return <Box >
            <HStack mt={'5rem'}>
                <Text>loading..</Text>
            </HStack>
            </Box>
    }

    if (user){
        return (
            <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-96 text-center">
                <h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-gray-300">
                    You're already logged in
                </h1>
                <button 
                    onClick={handleLogout}
                    className="w-full p-3 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none"
                >
                    Logout
                </button>
            </div>
        </div>
        )
    }

    return (
        <main className="h-screen flex items-center justify-center bg-gray-800 p-6">
        <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
            <Text className="new-gradient" fontWeight={'700'} my={{md:'0.5rem',base:'0.25rem'}}> Hushh Developer API  </Text>
         <input 
            type="name" 
            name="name"
            value={password}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
        <input 
            type="email" 
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
        <input 
            type="password" 
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
        <input 
            type="number" 
            name="number"
            value={password}
            onChange={(e) => setphoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
        <button 
            onClick={handleSignUp}
            className="w-full mb-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
        >
            Sign Up
        </button>
        <button 
            onClick={handleSignIn}
            className="w-full p-3 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outline-none"
        >
            Sign In
        </button>
        </div>
        </main>
    )

}