// utils/cookies.js
import cookie from 'cookie';

// Parse cookies from request headers or document
export const parseCookies = (req) => {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
};

// Set cookies
export const setCookie = (res, name, value, options = {}) => {
  const cookieStr = cookie.serialize(name, String(value), {
    ...options,
    httpOnly: false, // Allow cookie to be accessible from client-side JavaScript
    secure: process.env.NODE_ENV === 'production', // Secure cookie in production
    maxAge: 60 * 60 * 24 * 7, // Default to one week
    sameSite: 'lax', // Default to lax
    path: '/', // Cookie is accessible on all routes
  });

  if (res) {
    res.setHeader('Set-Cookie', cookieStr);
  } else {
    document.cookie = cookieStr;
  }
};

// Remove cookies
export const removeCookie = (res, name) => {
  setCookie(res, name, '', {
    maxAge: -1,
  });
};
