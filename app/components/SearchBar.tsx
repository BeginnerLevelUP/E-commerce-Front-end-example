import Cart from "@/public/navIcons/Cart.png"
import Favorites from "@/public/navIcons/Favorites.png"
import User from "@/public/navIcons/User.png"
import Search from "@/public/navIcons/Search.png"
import Image from "next/image"

const SearchBar = () => {
  return (
    <div className="flex items-center justify-between mx-48 my-10">
      {/* Company Title */}
      <h3 className="text-2xl font-bold">Company</h3>

      {/* SearchBar */}
      <div className="relative flex items-center">
        {/* Search Icon */}
        <div className="absolute left-3">
          <Image src={Search} alt="Search Icon"  />
        </div>

        {/* Search Input */}
        <input
          className="pl-10 py-2 border bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-blue-500 w-[372px] h-[56px] rounded-md"
          type="text"
          placeholder="Search"
        />
      </div>

      {/* First Nav */}
      <nav className="list-none flex space-x-10">
        <li>Home</li>
        <li className="opacity-30">About</li>
        <li className="opacity-30">Contact Us</li>
        <li className="opacity-30">Blog</li>
      </nav>
      
      {/* Second Nav */}
      <nav className="flex list-none space-x-10">
        <li>
          <Image src={Favorites} alt='Favorite Icon'  />
        </li>
        <li>
          <Image src={Cart} alt='Cart Icon'  />
        </li>
        <li>
          <Image src={User} alt="User Icon"  />
        </li>
      </nav>
    </div>
  )
}

export default SearchBar