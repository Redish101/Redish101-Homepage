export default function NavBar() {
  return (
    <nav className="bg-nav-background backdrop-blur shadow h-12 flex justify-between items-center px-16 fixed w-full z-100">
      <span className="font-medium">Redish101</span>
      <div className="text-sm text-gray-800 flex space-x-4">
        <a href="https://blog.redish101.top">博客</a>
        <a href="https://github.com/redish101">GitHub</a>
      </div>
    </nav>
  );
}
