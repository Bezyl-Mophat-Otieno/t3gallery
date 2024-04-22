import "~/styles/globals.css";
// import {ClerKProvider} from "@clerk/nextjs"

import { Inter } from "next/font/google";
import TopNav from "./_components/TopNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal:React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        {/* <ClerKProvider> */}
        <TopNav />
        {children}
        {modal}
        <div id="modal-root"/>
        {/* </ClerKProvider> */}
        </body>
    </html>
  );
}
