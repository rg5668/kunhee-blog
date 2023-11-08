import Header from "@/components/common/Header";
import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/common/Nav";
import Button from "@/components/ui/Button";
import Layout from "@/components/Layout";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Kunhee Blog",
  description: "Kunhee Blog App",
};

export type ChildrenProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <Nav />
        <main>
          <Layout>{children}</Layout>
        </main>
        <Footer />
        <Button />
      </body>
    </html>
  );
}
