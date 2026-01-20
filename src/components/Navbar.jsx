import { Menu, Search, ShoppingCart, SquareMenu, User, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router";
import { formatKategori } from "../services/format";

export default function Navbar(props) {
  const [pInput, setPinput] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className=" gap-5 md:gap-15  p-2 flex  shadow-xs items-center justify-between h-25 md:h-30 md:p-4 top-0 z-50 sticky backdrop-blur-md bg-white/85 ">
        <div className="flex md:gap-10">
          {/* logo */}
          <div className="m-0 w-15 md:w-35">
            <img
              src="/src/assets/img/logo.png"
              alt="logo brand"
              className="w-35 m-0 "
            />
          </div>
          {/* menu */}
          <div className="hidden md:flex gap-10 items-center">
            <select name="dropdown" id="">
              {props.kategori.map((list) => (
                <option key={list}>{formatKategori(list)}</option>
              ))}
            </select>
            <div
              className={`font-semibold flex gap-7 md:items-center ${
                pInput === true ? "hidden" : ""
              }`}
            >
              <NavLink to={"/"} className={`font-semibold `}>
                Beranda
              </NavLink>
              <NavLink to={"/"} className={`font-semibold `}>
                Produk
              </NavLink>
              <NavLink to={"/"} className={`font-semibold `}>
                Diskon Hari Ini
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex gap-1 mr-0 md:mr-3.5">
          <div className="gap-4 flex md:gap-15 items-center md:mr-10">
            {/* serchbar */}
            <div className="border-gray-300 rounded-xl bg-gray-100 p-2 flex gap-2 items-center">
              <input
                type="text"
                onFocus={() => setPinput(true)}
                onBlur={() => setTimeout(() => setPinput(false), 200)}
                placeholder="cari disini..."
                className={`w-30 focus:outline-none md:focus:w-125 transition-all duration-300 ease-in-out`}
              />
              <Search className="text-gray-400" size={20} />
            </div>
            {/* akun */}
            <div>
              <NavLink
                to={"/"}
                className="hidden md:flex gap-1.5 items-center font-semibold"
              >
                <User />
                Akun
              </NavLink>
            </div>
            {/* keranjang */}
            <div className="">
              <NavLink
                to={"/"}
                className="flex gap-1.5 items-center font-semibold"
              >
                <ShoppingCart />
                <span className="hidden md:flex">keranjang</span>
              </NavLink>
            </div>
            {/* bar mobile */}
            <div className=" md:hidden ">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`hover:cursor-pointer hover:text-gray-400 w-15 h-15 ${!menuOpen ? "block" : "hidden"}`}
              >
                <Menu />
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`hover:cursor-pointer hover:text-gray-400 w-15 h-15 ${!menuOpen ? "hidden" : "block"}`}
              >
                <X />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* overlay mobile */}

      {menuOpen && (
        <div className="bg-green-900/80 p-10 fixed w-420 z-40">
          {/* menu */}
          <div className="flex flex-col gap-2 text-white ">
            <NavLink
              to={"/"}
              className={`font-semibold hover:text-gray-600 transition-all ease-in-out duration-75 hover:bg-white p-2 rounded-2xl w-20`}
            >
              Beranda
            </NavLink>
            <NavLink
              to={"/"}
              className={`font-semibold p-2 hover:bg-white rounded-2xl hover:text-gray-600 transition-all ease-in-out duration-75 w-20 `}
            >
              Produk
            </NavLink>
            <NavLink
              to={"/"}
              className={`font-semibold hover:bg-white p-2 rounded-2xl hover:text-gray-600 transition-all ease-in-out duration-75 w-40`}
            >
              Diskon Hari Ini
            </NavLink>
            {/* akun */}
            <NavLink
              to={"/"}
              className="flex gap-1.5 items-center font-semibold p-2 hover:bg-white rounded-2xl hover:text-gray-600 transition-all ease-in-out duration-75 w-40"
            >
              Akun anda
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
