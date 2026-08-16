import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OLSEN VIDEO — Short-form storytelling",
  description: "Organic short-form video and Reels from Aalborg, Denmark.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="da">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
