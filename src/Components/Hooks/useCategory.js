import { useEffect, useState } from "react"


const useCatrogries = () => {
    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState({
        state: false,
        message: '',
    });

    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategoris = async () => {
            try {
                setLoading({
                    state: true, message: 'Loading Categories...'
                })

                const response = await fetch('http://localhost:9000/categories');

                if (!response.ok) {
                    const errorMessage = `Fetching products data failed: ${response.status} `;
                    throw new Error(errorMessage)
                }
                const data = await response.json();
                setCategories(data.data)

            } catch (error) {
                setError(error)
            } finally {
                setLoading({
                    state: false,
                    message: '',
                })
            }
        }
        fetchCategoris();
    }, [])

    return {categories, error, loading}

}

export default useCatrogries;