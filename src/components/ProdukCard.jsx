import React, { useState } from "react";
import formatIDR from "../services/format";
import { ShoppingCart } from "lucide-react";

export default function ProdukCard({ produk }) {

    const[imgLoad, setLoad] = useState(false)

  return (
    <div
      className="h-110 rounded-xl overflow-hidden bg-white shadow-xl "
    >
      
      {/* gambar */}
      <div className="w-full h-52 ">

      {/* skeleton load gambar */}

      {!imgLoad && (
        <div className="w-100 h-full bg-gray-200 animate-pulse"></div>
      )}

        <img
          src={produk.thumbnail}
          className="w-full h-full object-contain"
          onLoad={() => setLoad(true)}
        />
      </div>
      {/* Judul dan harga */}
      <div className="flex px-5 mt-5 mb-2 gap-10 justify-between font-bold text-lg">
        <h3 className="font-family font-bold">{produk.title}</h3>
        <p>{formatIDR(produk.price)}</p>
      </div>

      {/* Deskripsi dan bintang */}
      <div className="px-5 mt-3">
        <p className="w-70 font-mono text-xs line-clamp-2">{produk.description}</p>
      </div>
      {/* button cart */}
      <button className="border rounded-2xl p-2 font-family font-bold m-4 absolute transition-all delay-75 ease-in-out hover:bg-green-800 hover:text-white hover:cursor-pointer">
        Add to chart
      </button>
      
    </div>
  );
}
