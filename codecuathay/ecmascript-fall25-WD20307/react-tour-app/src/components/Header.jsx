function Header() {
  return (
    <nav className="bg-white shadow-md py-4">
      <ul className="flex justify-center gap-10 text-lg font-semibold text-gray-700">
        {["Home", "About", "Booking", "Contact"].map((item) => (
          <li key={item}>
            <a
              href="/"
              className="uppercase tracking-wide hover:text-blue-600 transition relative
                        before:content-[''] before:absolute before:-bottom-1 before:left-0 
                        before:w-0 before:h-[2px] before:bg-blue-600
                        hover:before:w-full before:transition-all before:duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
