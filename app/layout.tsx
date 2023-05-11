import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from "@/components/NavBar";
import FooterContent from "@/components/FooterContent";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Martin Woodsworks',
}


const links = [
  {text: 'HOME', url: '/'},
  {text: 'CONTACT', url: '/contact'},
  {text: 'ABOUT', url: '/about'},
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`relative max-w-[100vw] min-h-screen ${inter.className}`}>
        <div className='pt-24 pb-24'>
          <NavBar position="top" links={links}/>
          {children}
        </div>
        <FooterContent links={links}/>
      </body>
    </html>
  )
}
