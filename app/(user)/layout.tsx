import Header from "../../components/Header";
import "../../styles/globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className="max-w-7xl mx-auto
      ">
        <Header />
        {children}</body>
    </html>
  )
}
