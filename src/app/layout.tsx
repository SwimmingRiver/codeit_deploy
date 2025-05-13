// app/layout.tsx

import { initMocks } from "@/mocks";
import "./globals.css";

initMocks();
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
