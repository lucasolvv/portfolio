import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-neutral-800">
      <nav className="max-w-4xl mx-auto flex items-center gap-6 px-4 py-3 text-sm">
        <Link href="/" className="text-neutral-200 hover:text-white">
          Home
        </Link>
        <Link href="/about " className="text-neutral-400 hover:text-white">
          About
        </Link>
        <Link href="/projects" className="text-neutral-400 hover:text-white">
          Projects
        </Link>
        <Link href="/contact" className="text-neutral-400 hover:text-white">
          Contact me
        </Link>
      </nav>
    </header>
  );
}
