import api from "./api"


const ambilProduk = async () => {
    try {
        const response = await api.get("/products")
        return response.data.products
    }catch (error){
        console.error("API error", error);
        throw error 
    }
}

export default ambilProduk;