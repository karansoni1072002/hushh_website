"use client"

import { useState } from "react"
import Link from "next/link"

export default function NewHeader() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative">
      <header
        className="flex justify-between p-4 bg-gradient-to-r from-purple-500 to-orange-500"
        onClick={() => setIsOpen(true)}
        // onMouseLeave={() => setIsOpen(false)}
      >
        <div className="text-white font-bold">Company Logo</div>
        <nav className="space-x-4 text-white">
          <Link href="#" prefetch={false}>
            Home
          </Link>
          <Link href="#" prefetch={false}>
            About
          </Link>
          <Link href="#" prefetch={false}>
            Services
          </Link>
          <Link href="#" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      {isOpen && (
        <div className="absolute px-5 rounded-2xl z-10 p-4 bg-white shadow-lg">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-bold text-gray-800">Global Payments</h3>
              <ul style={{listStyle:'none'}} className="mt-2 space-y-2">
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <CreditCardIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Payments</div>
                      <div className="text-sm text-gray-500">Online payments</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <CreditCardIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Payment Links</div>
                      <div className="text-sm text-gray-500">No-code payments</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <ShoppingCartIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Checkout</div>
                      <div className="text-sm text-gray-500">Pre-built payment form</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <ComponentIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Elements</div>
                      <div className="text-sm text-gray-500">Flexible UI components</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Embedded Payments and Finance</h3>
              <ul style={{listStyle:'none'}} className="mt-2 space-y-2">
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <NetworkIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Connect</div>
                      <div className="text-sm text-gray-500">Payments for platforms</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Revenue and Finance Automation</h3>
              <ul style={{listStyle:'none'}} className="mt-2 space-y-2">
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <BarcodeIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Billing</div>
                      <div className="text-sm text-gray-500">Subscription management</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <AwardIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Revenue Recognition</div>
                      <div className="text-sm text-gray-500">Accounting automation</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <FileTypeIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Tax</div>
                      <div className="text-sm text-gray-500">Sales tax & VAT automation</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">More</h3>
              <ul style={{listStyle:'none'}} className="mt-2 space-y-2">
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <CreditCardIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Payment methods</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <LinkIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Link</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <CreditCardIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Financial Connections</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <ImageIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Identity</div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <AnchorIcon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Atlas</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
function Icon({ prompt, className }) {
  return <div className={`${className} bg-gray-300`}>{prompt}</div>
}

function AnchorIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22V8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <circle cx="12" cy="5" r="3" />
    </svg>
  )
}


function AwardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  )
}


function BarcodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 5v14" />
      <path d="M8 5v14" />
      <path d="M12 5v14" />
      <path d="M17 5v14" />
      <path d="M21 5v14" />
    </svg>
  )
}


function ComponentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  )
}


function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function FileTypeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M9 13v-1h6v1" />
      <path d="M12 12v6" />
      <path d="M11 18h2" />
    </svg>
  )
}


function ImageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function LinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function NetworkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}