import React, { useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    searchQuery,
    setSearchQuery,
    getCartCount,
  } = useAppContext();

  const logout = async () => {
    setUser(null);
    Navigate("/");
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/Products");
    }
  }, [searchQuery]);

  return (
    <div>
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-neutral-50 relative transition-all">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img className="h-9" src={assets.logo} alt="logo" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Products">All Products</NavLink>
          <NavLink to="/Contact">Contact</NavLink>

          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              name="search_bar"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.836 10.615 15 14.695"
                stroke="#7A7B7D"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                clip-rule="evenodd"
                d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
                stroke="#7A7B7D"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            <img src={assets.cart_icon} alt="cart" className="w-6 opacity-80" />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-green-500 w-[18px] h-[18px] rounded-full">
              {getCartCount()}
            </button>
          </div>

          {!user ? (
            <button
              onClick={() => setShowUserLogin(true)}
              className="cursor-pointer px-8 py-2 bg-green-500 hover:bg-green-600 transition text-neutral-bg-neutral-50 rounded-full"
            >
              Login
            </button>
          ) : (
            <div className="relative group ">
              <img
                className="w-10"
                src="https://tse4.mm.bing.net/th?id=OIP.hGSCbXlcOjL_9mmzerqAbQHaHa&pid=Api&P=0&h=180"
                alt=""
              />
              <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
                <li
                  onClick={() => navigate("my-orders")}
                  className="p-1.5 pl-3 hover:bg-green-400 cursor-pointer"
                >
                  My Orders
                </li>
                <li
                  onClick={logout}
                  className="p-1.5 pl-3 hover:bg-green-400 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center gap-10 sm:hidden">
          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            <img src={assets.cart_icon} alt="cart" className="w-6 opacity-80" />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-green-500 w-[18px] h-[18px] rounded-full">
              {getCartCount()}
            </button>
          </div>

          <button
            onClick={() => (open ? setOpen(false) : setOpen(true))}
            aria-label="Menu"
          >
            {/* Menu Icon SVG */}
            <img src={assets.menu_icon} alt="menu" className="" />
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className={`${
              open ? "flex" : "hidden"
            } absolute top-[60px] left-0 w-full bg-neutral-50 shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
          >
            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/Products" onClick={() => setOpen(false)}>
              All Products
            </NavLink>
            {user && (
              <NavLink to="/Orders" onClick={() => setOpen(false)}>
                My Orders
              </NavLink>
            )}
            <NavLink to="/" onClick={() => setOpen(false)}>
              Contact
            </NavLink>

            {!user ? (
              <button
                onClick={() => {
                  setOpen(false);
                  setShowUserLogin(true);
                }}
                className="cursor-pointer px-6 py-2 mt-2 bg-green-500 hover:bg-green-600 transition text-neutral-bg-neutral-50 rounded-full text-sm"
              >
                Login
              </button>
            ) : (
              <button
                onClick={logout}
                className="cursor-pointer px-6 py-2 mt-2 bg-neutral-300 hover:bg-neutral-600 transition text-neutral-50 rounded-full text-sm"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
