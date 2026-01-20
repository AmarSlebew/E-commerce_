
export const formatIDR = (value) => {
    return new Intl.NumberFormat('en-US', {
        style : "currency",
        currency : "USD",
        maximumFractionDigits : 0,
    }).format(value)
};



export const formatKategori = (text = "") => {
    return text
    .replace("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

