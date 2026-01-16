import Link from "next/link";

export function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <nav className="max-w-4xl mx-auto flex gap-6 p-4">
        <Link href="/">Home</Link>
        <Link href="/about">Sobre</Link>
        <Link href="/projects">Projetos</Link>
        <Link href="/contact">Contato</Link>
      </nav>
    </header>
  );
}
