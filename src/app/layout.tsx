import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Body Shody",
  description: "Achieve your fitness goals with Body Shody. Explore exercises, nutrition tips, and workout plans tailored for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        {/* General Metadata */}
        <title>Body Shody - Get Fit</title>
        <meta name="description" content="Achieve your fitness goals with Body Shody. Explore exercises, nutrition tips, and workout plans tailored for you!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Metadata for WhatsApp and Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Body Shody - Get Fit" />
        <meta property="og:description" content="Achieve your fitness goals with Body Shody. Explore exercises, nutrition tips, and workout plans tailored for you!" />
        <meta property="og:image" content="https://ibb.co/SKxDx0m" /> {/* Replace with a valid image URL */}
        <meta property="og:url" content="https://bodyshody.vercel.app/" />
        <meta property="og:site_name" content="Body Shody" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
