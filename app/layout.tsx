import type { Metadata } from "next";
import "./globals.css";
import { Theme } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "Clone Google News",
  description: "Clone Google News generated using create next app by Mauricio Salazar Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme accentColor="cyan" grayColor="slate" scaling="100%" appearance="dark">
          {children}
        </Theme>
      </body>
    </html>
  );
}
