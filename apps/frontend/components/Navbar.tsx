import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">
        Rumah Ready
      </h1>

      <div className="flex items-center gap-6">
        <Link href="#about">Tentang</Link>
        <Link href="#catalog">Katalog</Link>
        <Link href="#contact">Kontak</Link>
      </div>
    </nav>
  );
}