import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProdukCard from "../components/ProdukCard";
import ambilProduk from "../services/servicesProduk";

export default function Home() {
  const [produk, setProduk] = useState([])
  const [error, setError] = useState("");

  const dataDummy = [
    {
      id: 1,
      title: "Kaos Polos Hitam Lengan Pendek",
      description:
        "Kaos polos berbahan katun lembut, nyaman dipakai harian dan mudah dipadukan dengan berbagai outfit.",
      price: 99000,
      image: "https://placehold.co/300x200",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Celana Jeans Pria Slim Fit",
      description:
        "Celana jeans slim fit dengan desain modern, cocok untuk gaya kasual maupun semi-formal.",
      price: 199000,
      image: "https://placehold.co/300x200",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Sepatu Sneakers Casual",
      description:
        "Sneakers ringan dan fleksibel untuk aktivitas sehari-hari dengan tampilan stylish.",
      price: 299000,
      image: "https://placehold.co/300x200",
      rating: 4.3,
    },
    {
      id: 4,
      title: "Jaket Hoodie Wanita",
      description:
        "Hoodie wanita berbahan hangat dan nyaman, cocok untuk cuaca sejuk dan aktivitas santai.",
      price: 149000,
      image: "https://placehold.co/300x200",
      rating: 4.6,
    },
    {
      id: 5,
      title: "Tas Ransel Laptop",
      description:
        "Tas ransel multifungsi dengan kompartemen laptop, ideal untuk kerja, kuliah, atau traveling.",
      price: 249000,
      image: "https://placehold.co/300x200",
      rating: 4.4,
    },
    {
      id: 6,
      title: "Kacamata Hitam Fashion",
      description:
        "Kacamata hitam dengan desain trendi untuk melindungi mata sekaligus menunjang penampilan.",
      price: 89000,
      image: "https://placehold.co/300x200",
      rating: 4.2,
    },
    {
      id: 7,
      title: "Jam Tangan Digital Sport",
      description:
        "Jam tangan digital tahan air dengan fitur sport, cocok untuk aktivitas luar ruangan.",
      price: 159000,
      image: "https://placehold.co/300x200",
      rating: 4.8,
    },
    {
      id: 8,
      title: "Topi Baseball Casual",
      description:
        "Topi baseball kasual yang nyaman dipakai dan melindungi dari sinar matahari.",
      price: 59000,
      image: "https://placehold.co/300x200",
      rating: 4.1,
    },
  ];

  useEffect(() =>{
    async function loadData() {
      try{
        const data = await ambilProduk();
        setProduk(data)
      }catch (error) {
        setError("Gagal memuat produk", error);
      }
    }
    loadData();
  },[])

  if (error) return <p>{error}</p>

  return (
    <>
      <div className="w-400 mx-auto">
        <Navbar />

        <header className="w-400 bg-orange-100 h-100 p-15 mt-1 flex items-center justify-between">
          <div>
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

        <main className="mt-20">
          {/* Untuk Kamu */}
          <section>
            <div className="flex justify-between">
              <h2 className="font-family font-bold text-xl mb-5">Untuk Kamu</h2>
              <button className="border-none text-xl font-family font-semibold hover:cursor-pointer hover:text-gray-400 transition-all delay-200 ease-in-out ">
                Lihat Semua &#62;
              </button>
            </div>
            {/* card container */}
            <div className="grid gap-10 grid-cols-4">
              {produk.map((p) => (
                <ProdukCard key={p.id} produk={p} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
