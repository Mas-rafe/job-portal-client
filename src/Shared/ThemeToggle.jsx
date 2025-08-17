const ThemeToggle = () => {
  return (
    <label className="swap swap-rotate">
      {/* hidden checkbox controls state */}
      <input type="checkbox" className="theme-controller" value="dark" />

      {/* sun icon */}
      <svg
        className="swap-off fill-current w-8 h-8 text-yellow-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64 17.657L4.22 19.07A9.969 9.969 0 002 12C2 6.477 6.477 2 12 2v2a8 8 0 00-8 8c0 2.21.896 4.21 2.343 5.657z"></path>
        <path d="M12 6a6 6 0 100 12A6 6 0 0012 6z"></path>
      </svg>

      {/* moon icon */}
      <svg
        className="swap-on fill-current w-8 h-8 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64 13a9 9 0 11-9-9c.34 0 .68.02 1.01.07A7 7 0 0021.64 13z"></path>
      </svg>
    </label>
  );
};

export default ThemeToggle;
