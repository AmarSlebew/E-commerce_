import { Search, ShoppingCart, User } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {

  const[pInput, setPinput] = useState(false);

  return (
    <nav className="flex  shadow-xs items-center justify-between w-full h-30 p-4 top-0 z-50 sticky backdrop-blur-md bg-white/85 ">
      <div className="flex gap-30">
        {/* logo */}
        <div className="m-0">
          <img
            src="/src/assets/img/logo.png"
            alt="logo brand"
            className="w-35 m-0 "
          />
        </div>
        {/* menu */}
        <div className="flex gap-10 items-center">
          <select name="dropdown" id="">
            <option value="default">Semua Kategori</option>
            <option value="">Aksesoris</option>
            <option value="">Pakaian Pria</option>
            <option value="">Pakaian Wanita</option>
            <option value="">Makanan</option>
          </select>
          <div className="flex gap-7">
            <NavLink to={"/"} className={`font-semibold ${pInput === true ? "hidden" : ""}`}>
              Beranda
            </NavLink>
            <NavLink to={"/"} className={`font-semibold ${pInput === true ? "hidden" : ""}`}>
              Produk
            </NavLink>
            <NavLink to={"/"} className={`font-semibold ${pInput === true ? "hidden" : "" }`}>
              Diskon Hari Ini
            </NavLink>
          </div>
        </div>
      </div>

      <div className="flex gap-15 items-center mr-10">
        {/* serchbar */}
        <div className="border-gray-300 rounded-xl bg-gray-100 p-2 flex gap-2 items-center">
          <input
            type="text"
            onFocus={() => setPinput(true)}
            onBlur={()=> setTimeout(()=> setPinput(false), 150)}
            placeholder="cari disini..."
            className={`w-80 focus:outline-none focus:w-185 transition-all duration-300 ease-in-out`}
          />
          <Search className="text-gray-400" size={20} />
        </div>
        {/* akun */}
        <div>
          <NavLink to={"/"} className="flex gap-1.5 items-center font-semibold">
            <User />
            Akun
          </NavLink>
        </div>
        {/* keranjang */}
        <div>
          <NavLink to={"/"} className="flex gap-1.5 items-center font-semibold">
            <ShoppingCart />
            Keranjang
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
