import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Didula Sri Lakpriya - Software Engineer",
  description: "Portfolio of Didula Sri Lakpriya - Full-stack developer specializing in modern web technologies, building scalable and production-ready applications.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "Spring Boot", "Portfolio"],
  authors: [{ name: "Didula Sri Lakpriya" }],
  openGraph: {
    title: "Didula Sri Lakpriya - Software Engineer",
    description: "Full-stack developer building scalable, production-ready applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
