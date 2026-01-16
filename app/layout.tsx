import "./globals.css";
import { Header } from "@/app/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return ( 
    <html lang="pt-BR">
      <body className="min-h-screen">
        <Header />
        <main className="max-w-4xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
