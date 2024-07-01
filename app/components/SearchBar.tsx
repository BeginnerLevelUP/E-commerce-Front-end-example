import Cart from "@/public/navIcons/Cart.png"
import Favorites from "@/public/navIcons/Favorites.png"
import User from "@/public/navIcons/User.png"
import Search from "@/public/navIcons/Search.png"
import Image from "next/image"

// Burger Mobile Image
import burger from "@/public/mobileResponsive/burger.png"
const SearchBar = () => {
  return (
    <div className="flex items-center justify-between mx-10  lg:mx-48 my-10 w-full">
      {/* Company Title */}
      <h3 className="lg:text-2xl text-3xl font-bold lg:mr-0">Company</h3>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 lg:hidden flex relative left-64">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

      {/* SearchBar */}
      <div className=" hidden relative lg:flex items-center">
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

      {/* Navs */}
      <div className="lg:flex hidden">
        {/* First Nav */}
        <nav className="list-none flex space-x-10 mx-2">
          <li>Home</li>
          <li className="opacity-30">About</li>
          <li className="opacity-30">Contact Us</li>
          <li className="opacity-30">Blog</li>
        </nav>
        
        {/* Second Nav */}
        <nav className="flex list-none space-x-10 mx-2">
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


    </div>
  )
}

export default SearchBar