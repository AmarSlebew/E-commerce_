import React from "react";
import formatIDR from "../services/format";

export default function ProdukCard({ produk }) {
  return (
    <div
      className="h-110 rounded-xl overflow-hidden bg-white shadow-xl border "
    >
      {/* gambar */}
      <div className="w-full h-52 ">
        <img
          src={produk.image}
          alt={produk.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Judul dan harga */}
      <div className="flex px-5 mt-5 mb-2 gap-10 justify-between font-bold text-lg">
        <h3 className="font-family font-bold">{produk.title}</h3>
        <p>{formatIDR(produk.price)}</p>
      </div>

      {/* Deskripsi dan bintang */}
      <div className="px-5 mt-3">
        <p className="w-70 font-mono text-xs">{produk.description}</p>
      </div>
      {/* button cart */}
      <button className="border rounded-2xl p-2 font-family font-bold m-4 transition-all delay-75 ease-in-out hover:bg-green-800 hover:text-white hover:cursor-pointer">
        Add to chart
      </button>
    </div>
  );
}
