import { useEffect, useState } from "react";
import { generateProducts } from "../data/product";


function useProductFetcher() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = () => {
            const generatedProducts = generateProducts();

            setProducts(generatedProducts);
            setLoading(false);
        };

        loadProducts();
    }, []);

    return {
        products,
        loading,
    };
}

export default useProductFetcher;