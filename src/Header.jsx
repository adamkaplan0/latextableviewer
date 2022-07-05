export const Header = () => {
  return (
    <header className="flex justify-between items-center mb-4">
      <span className="inline-block font-bold text-4xl"><a href="#">LaTeX Table Viewer</a></span>
      <nav>
        <ul className="list-none inline-flex justify-around items-center gap-12 text-xl inline-block text-center">
          <li><a href="#">App</a></li>
          <li><a href="https://github.com/adamkaplan0/latextableviewer">GitHub</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
  );
};