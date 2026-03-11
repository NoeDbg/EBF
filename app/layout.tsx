import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "EBF | ESCP Bachelor's Finance Society",
  description: "Official website of ESCP Bachelor's Finance Society (EBF)."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
