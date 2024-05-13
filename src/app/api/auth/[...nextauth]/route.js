import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import AppleProvider from "next-auth/providers/apple";

const authOptions = {
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      AppleProvider({
        clientId: process.env.APPLE_CLIENT_ID, // Ensure you use the correct environment variables
        clientSecret: process.env.APPLE_CLIENT_SECRET,
      }),
    //   CredentialsProvider({
    //     credentials: {
    //       email: { label: "Email", type: "email" },
    //       password: { label: "Password", type: "password" },
    //     },
    //     authorize: async (credentials, req) => {
        
    //       if(credentials.email === "example@example.com" && credentials.password === "password123"){
    //         return {
    //           id: 1,
    //           name: credentials.name,
    //           email: credentials.email,
    //         };
    //       } else {
    //         return null;  
    //       }
    //     }
    //   })
    ],
    cookies: {
      pkceCodeVerifier: {
        name: "next-auth.pkce.code_verifier",
        options: {
          httpOnly: true,
          sameSite: "none",
          path: "/",
          secure: true,
        },
      },
    },
    secret: process.env.NEXTAUTH_SECRET
  };

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }