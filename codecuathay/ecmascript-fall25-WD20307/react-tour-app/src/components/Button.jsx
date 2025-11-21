export default function Button({ label = 'Tên button mặc định', onClick }) {
  return (
    <button
      onClick={onClick} // React dùng onClick (chữ C hoa)
      className="
        bg-amber-400 
        hover:bg-amber-500 
        text-white 
        font-semibold 
        px-4 py-2 
        rounded-2xl 
        shadow-md 
        hover:shadow-lg 
        transition 
        duration-300
        ease-in-out
      "
    >
      {label}
    </button>
  )
}
