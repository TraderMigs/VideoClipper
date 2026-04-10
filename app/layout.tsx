import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VideoClipper',
  description: 'AI-powered social video clip creator.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
