import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata = {
  title: "FIDA",
  description: "FIDA",
  icons: {
    icon: "/favicon.png", // Path to your favicon in the public folder
    apple: "/favicon.png", // Optional for Apple touch icons
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
