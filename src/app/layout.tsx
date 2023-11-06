import Header from "@/components/ui/Header";
import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/ui/Nav";
import Layout from "@/components/common/Layout";

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
        <main>
          <Header />
          <Nav />
          <Layout>{children}</Layout>
        </main>
      </body>
    </html>
  );
}
