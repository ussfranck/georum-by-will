"use client";
import { FooterAppComponent } from "../components/Footer";
import { SearchProvider } from "../hooks/searchContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SearchProvider>
      <html lang="en">
        <body>{children}</body>
        <FooterAppComponent />
      </html>
    </SearchProvider>
  )
}
