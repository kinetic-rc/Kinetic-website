import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "Kinetic Robotics Club - NIT",
    template: "%s | Kinetic Robotics Club",
  },
  description:
    "The premier robotics club of NIT where innovation meets automation. Contact us to learn about cutting-edge robotics projects, competitions, and collaborative research opportunities.",
  keywords: ["robotics", "NIT", "engineering", "automation", "innovation", "technology", "competition", "research"],
  authors: [{ name: "Kinetic Robotics Club" }],
  creator: "Kinetic Robotics Club",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kinetic-nit.edu",
    title: "Kinetic Robotics Club - Where Innovation Meets Automation",
    description: "Contact NIT's premier robotics club to learn about cutting-edge projects and competitions.",
    siteName: "Kinetic Robotics Club",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinetic Robotics Club - NIT",
    description: "Where innovation meets automation. Contact us to learn about the future of robotics.",
    creator: "@kinetic_nit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${montserrat.variable} antialiased`}>
        <Navigation />
        <main>
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
