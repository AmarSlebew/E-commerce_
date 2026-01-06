import React from "react";

export default function ProdukSkelaton() {
  return (
    <div>
      <div className="h-110 rounded-xl overflow-hidden bg-white shadow-xl ">
        {/* gambar */}
        <div className="w-full h-52 bg-gray-200 animate-pulse"></div>
        {/* Judul dan harga */}
        <div className="flex w-70 ml-5 px-5 mt-5 mb-2  bg-gray-200 h-10 animate-pulse">
          <div className="font-family font-bold bg-gray-200 h-10 animate-pulse"></div>
        </div>

        {/* Deskripsi dan bintang */}
        <div className="px-5 mt-3">
          <p className="w-70 h-10 bg-gray-200 animate-pulse"></p>
        </div>
      </div>
    </div>
  );
}
