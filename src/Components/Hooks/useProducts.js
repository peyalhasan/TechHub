
import { useEffect, useState } from "react";

export default function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState({
        state: false,
        message: '',
    });
    const [error, setError] = useState(null);

    const [filter, setFilter] = useState({
        category: [],
        minPrice: 0,
        maxPrice: 2000,
        minRating: 0
    });

    const fetchProducts = async () => {
        try {
            setLoading({ state: true, message: 'Loading Products....' });

            const params = new URLSearchParams();

            filter.category.forEach(cat => params.append("category", cat));

            if (filter.maxPrice > 0) {
                params.append("minPrice", filter.minPrice);
                params.append("maxPrice", filter.maxPrice);
            }

            if (filter.minRating > 0) {
                params.append("minRating", filter.minRating);
            }

            const url = `http://localhost:9000/products/filter?${params.toString()}`;
            

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setProducts(data.data || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading({ state: false, message: '' });
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [filter]);


    return { products, loading, error, filter, setFilter };
}