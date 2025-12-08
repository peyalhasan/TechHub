import { useEffect, useState } from "react";

export default function useProducts() {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState({
        state: false,
        message: '',
    });

    const [error, setError] = useState(null);
    const [filter, setFilter] = useState(null)

    const fetchProducts = async (currentFilter = null) => {
        try {
            setLoading({
                state: true,
                message: 'Loading Products....',
            })


            let url = 'http://localhost:9000/products/';
            if (currentFilter) {
                const { category = '', minPrice = 0, maxPrice = 0 } = currentFilter;
                url += `?category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`
            }

            const response = await fetch(url);
            // Show Error
            if (!response.ok) {
                const errorMessage = `Fetching products data failed: ${response.status} `;
                throw new Error(errorMessage)
            }

            const data = await response.json();
            setProducts(data.data);
        } catch (err) {
            setError(err)
        } finally {
            setLoading({
                state: false,
                message: '',
            })
        }

    }

    useEffect(() => {
        setLoading({
            state: true,
            message: "Finding Products"
        });
        fetchProducts(filter);
    }, [filter])

    return { products, loading, error, filter, setFilter }

}