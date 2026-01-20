import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProdukCard from "../components/ProdukCard";
import ambilProduk from "../services/servicesProduk";
import ProdukSkelaton from "../components/ProdukSkelaton";
import Footer from "../components/Footer";

export default function Home() {
  const [produk, setProduk] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);

      try {
        const data = await ambilProduk();
        setProduk(data);
      } catch (error) {
        setError("Gagal memuat produk", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const kategori = ["All Product", ...new Set(produk.map((p) => p.category))];
  
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="w-full md:max-w-7xl md:mx-auto">
          <Navbar kategori={kategori}/>

        <header className="hidden md:max-w-7xl bg-orange-100 md:h-100 p-15 mt-1 md:flex md:items-center justify-between">
          <div >
            <h1 className="text-green-900 font-bold text-5xl/13 font-family">
              Dapatkan Diskon Hingga 50% <br />
              Pilih Barangmu Sekarang!
            </h1>
            <button className="bg-green-900 text-white p-3 font-family font-bold rounded-3xl mt-5 hover:text-green-900 hover:bg-white hover:cursor-pointer transition-all delay-100 ease-in-out ">
              Beli Sekarang
            </button>
          </div>

          <img
            src="src/assets/img/perempuan.webp"
            alt="gambar"
            className="w-100 m-0"
          />
        </header>

        <main className=" p-2 md:pt-16">
          {/* Untuk Kamu */}
          <section className="md:mb-10 ">
            <div className=" md:flex justify-between mb-2.5">
              <h2 className="font-family font-bold text-lg md:text-xl mb-5">Untuk Kamu</h2>
              <button className="hidden md:flex border-none text-xl font-family font-semibold hover:cursor-pointer hover:text-gray-400 transition-all delay-200 ease-in-out ">
                Lihat Semua &#62;
              </button>
            </div>
            {/* card container */}
            <div className="grid gap-10 grid-cols-1 md:grid-cols-4 md:w-full">
              {loading
                ? Array.from({ length: 8 }).map((_, i) => (
                    <ProdukSkelaton key={i} />
                  ))
                : produk.map((p) => <ProdukCard key={p.id} produk={p} />)}
            </div>
          </section>
        </main>
      
      <footer>
        <Footer/>
      </footer>
      
      </div>
    </>
  );
}
