import Header from "@/components/ui/Header";
import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/ui/Nav";
import Layout from "@/components/common/Layout";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "KunHee Blog",
  description: "KunHee Blog App",
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
        <Button />
      </body>
    </html>
  );
}
