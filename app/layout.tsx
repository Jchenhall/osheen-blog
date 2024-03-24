import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar-components/navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer/Footer";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osheen's Blog",
  description: "A blog to share my thoughts and ideas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <link rel="icon" href="/logo2.png" sizes="any" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
