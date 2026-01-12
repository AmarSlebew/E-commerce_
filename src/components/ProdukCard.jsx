import React, { useState } from "react";
import formatIDR from "../services/format";
import { ShoppingCart } from "lucide-react";
import { Rating } from "react-simple-star-rating";

export default function ProdukCard({ produk }) {
  const [imgLoad, setLoad] = useState(false);

  return (
    <div className="h-110 rounded-xl overflow-hidden bg-white shadow-xl ">
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
        <p className="w-70 font-mono text-xs line-clamp-2">
          {produk.description}
        </p>
      </div>

      {/* rating */}

      <div className="flex items-center gap-2 px-5 mt-2">
        <Rating
          initialValue={produk.rating}
          readonly={true}
          allowFraction={true}
          size={20}
          SVGclassName="inline-block"
          fillColor="oklch(39.3% 0.095 152.535)"
        />
        <span>{produk.rating}</span>
      </div>
      {/* button cart */}
      <button className="border rounded-2xl flex gap-2.5 p-2 text-xs items-center font-family font-bold m-4 absolute transition-all delay-75 ease-in-out hover:bg-green-800 hover:text-white hover:cursor-pointer">
        <ShoppingCart className="text-xs" />
        Masukkan Keranjang
      </button>
    </div>
  );
}
