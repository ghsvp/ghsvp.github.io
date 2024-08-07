import { ConstNavbar, Footer } from "@/components";
import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const font = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GHSVP",
  description:
    "Georgia High School Voter Project is a student-led organization that aims to help high school students register to vote.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="max-w-full overflow-x-hidden scroll-smooth">
      <body className={`${font.className} max-w-full overflow-x-hidden bg-primary-1-100`}>
        <ConstNavbar />
        <main className={`w-[100vw] overflow-x-clip mt-12 `}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
