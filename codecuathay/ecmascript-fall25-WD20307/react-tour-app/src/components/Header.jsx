function Header() {
  return (
    <nav className="my-2">
      <ul className="flex justify-around text-xl font-bold text-gray-700 uppercase hover:text-gray-900">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Booking</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
