import type { Metadata } from "next"
import { Geist, Geist_Mono, Josefin_Sans } from "next/font/google"
import "./globals.css"
import FooterComponent from "./components/footer"
import HeaderComponent from "./components/header"
import Image from "next/image"

const josefinSans = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Frontend Mentor | Todo app",
  description: "A solution to the Todo App challenge from Frontend Mentor.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className} antialiased relative`}>
        <div className="p-6">
          <HeaderComponent />
          {children}
          <FooterComponent />
        </div>
        <div className="absolute -z-50 top-0 w-full">
          <Image
            className="w-full object-cover object-center"
            src="/images/bg-mobile-dark.jpg"
            alt=""
            width={375}
            height={200}
          />
        </div>
      </body>
    </html>
  )
}
