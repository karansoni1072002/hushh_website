import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export function middleware(NextRequest){
    const cookie =  NextRequest.cookies.getAll();
    console.log('Cookie',cookie)
}

export { default } from "next-auth/middleware"

export const config = { matcher: ["/developer-Api/content"] }

