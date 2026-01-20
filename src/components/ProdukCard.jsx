import React, { useState } from "react";
import { formatIDR } from "../services/format";
import { ShoppingCart } from "lucide-react";
import { Rating } from "react-simple-star-rating";

export default function ProdukCard({ produk }) {
  const [imgLoad, setLoad] = useState(false);

  return (
    <div className=" h-full rounded-xl overflow-hidden bg-white shadow-xl flex flex-col ">
      {/* gambar */}
      <div className="w-full h-52 aspect-square ">
        {/* skeleton load gambar */}

        {!imgLoad && (
          <div className="w-100 h-full bg-gray-200 animate-pulse"></div>
        )}

        <img
          src={produk.thumbnail}
          className="w-full h-full object-contain "
          onLoad={() => setLoad(true)}
        />
      </div>
      {/* Judul dan harga */}
      <div className="flex px-5 mt-5 mb-2 md:gap-10 justify-between font-bold text-sm md:text-lg ">
        <h3 className="font-family font-bold text-sm md:text-lg">
          {produk.title}
        </h3>
        <p>{formatIDR(produk.price)}</p>
      </div>

      {/* Deskripsi dan bintang */}
      <div className="px-5 mt-3">
        <p className="w-70 font-mono text-xs line-clamp-2 md:line-clamp-2">
          {produk.description}
        </p>
      </div>
      <div className="flex flex-col gap-2 mb-5">
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
          <span className="text-xs md:text-sm">{produk.rating}</span>
        </div>
        {/* button cart */}
        <button className="mt-auto border rounded-2xl flex gap-2.5 p-2 text-xs items-center font-family font-bold m-4 w-45 md:w-50 transition-all delay-75 ease-in-out hover:bg-green-800 hover:text-white hover:cursor-pointer">
          <ShoppingCart className="text-xs" />
          Masukkan Keranjang
        </button>
      </div>
    </div>
  );
}
