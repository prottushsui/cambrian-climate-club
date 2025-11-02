import { ReactNode } from 'react';
import { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans'; // Assuming Geist is available via next/font
import { GeistMono } from 'geist/font/mono';
import '@/styles/globals.css'; // Import global styles

export const metadata: Metadata = {
  title: 'Cambrian Climate Club',
  description: 'Sustainable Climate Club: Success, Challenges, and Future',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
