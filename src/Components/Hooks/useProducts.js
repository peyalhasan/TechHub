import { useState, useEffect, useCallback } from "react";

export default function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState({ state: false, message: "" });
    const [error, setError] = useState(null);

    const [filter, setFilter] = useState({
        category: [],
        minPrice: 0,
        maxPrice: 0,
        minRating: 0,
    });

    const [searchTerm, setSearchTerm] = useState("");

    const fetchProducts = useCallback(async () => {
        try {
            setLoading({ state: true, message: "Loading Products..." });

            const params = new URLSearchParams();
            filter.category.forEach((c) => params.append("category", c));

            if (filter.maxPrice > 0) {
                params.append("minPrice", filter.minPrice);
                params.append("maxPrice", filter.maxPrice);
            }
            if (filter.minRating > 0) params.append("minRating", filter.minRating);

            let url;
            if (searchTerm.trim()) {
                url = `http://localhost:9000/products/search?q=${encodeURIComponent(
                    searchTerm.trim()
                )}`;
            } else {
                url = `http://localhost:9000/products/filter?${params.toString()}`;
            }

            const res = await fetch(url);
            if (!res.ok) throw new Error(`Error: ${res.status}`);
            const data = await res.json();

            setProducts(data.data || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading({ state: false, message: "" });
        }
    }, [filter, searchTerm]);

    useEffect(() => {
        fetchProducts(); // runs on mount + filter/searchTerm change
    }, [fetchProducts]);

    return { products, loading, error, filter, setFilter, searchTerm, setSearchTerm };
}
