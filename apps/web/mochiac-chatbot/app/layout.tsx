import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mochaic Chatbot | Digital Agent for your business",
  description: "Mochiac Chatbot is a digital agent for your business. It is a chatbot that can help you with your business.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Mochaic Chatbot - Digital Agent for your business",
    description: "Mochiac Chatbot is a digital agent for your business. It is a chatbot that can help you with your business.",
    url: "https://mochiac.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
