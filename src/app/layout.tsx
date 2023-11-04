import type { Metadata } from "next";
import "@/styles/reset.css";

export const metadata: Metadata = {
  title: "KunHee Blog",
  description: "KunHee Blog App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
