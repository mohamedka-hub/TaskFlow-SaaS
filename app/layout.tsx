import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "TaskFlow SaaS",
  description: "Simple SaaS project"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
