import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-nav-background backdrop-blur shadow h-12 flex justify-between items-center px-16 fixed w-full z-100 top-0">
      <span className="font-medium">
        <Link href="/">Redish101</Link>
      </span>
      <div className="text-sm text-gray-800 flex space-x-4">
        <Link href="/privacy">隐私政策</Link>
        <Link href="https://blog.redish101.top">博客</Link>
        <Link href="https://github.com/redish101">GitHub</Link>
      </div>
    </nav>
  );
}
