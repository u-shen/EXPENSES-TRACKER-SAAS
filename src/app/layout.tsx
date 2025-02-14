import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Expenses Tracker",
  description: "Track your Expenses For Ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={roboto.style} className={"antialiased bg-slate-200"}>
        {children}
      </body>
    </html>
  );
}
