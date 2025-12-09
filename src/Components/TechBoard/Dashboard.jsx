import Filterbar from "./Filterbar";
import ProductBoard from "./ProductBoard";
import Sort from "./Sort";
import { useProducts } from "../Hooks";
import { useState } from "react";

const Dashboard = () => {
    const { products, loading, filter, setFilter} = useProducts();

    const [sortBy, setSortBy] = useState('newest');

    const sortedProduct = [...products].sort((a, b) => {
        if (sortBy === 'low-price') return a.price - b.price;
        if (sortBy === 'high-price') return b.price - a.price;
        if (sortBy === 'newest') return new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date);
        if (sortBy === 'oldest') return new Date(a.createdAt || a.date) - new Date(b.createdAt || b.date);
        return 0
    })

    if (loading.state) {
        return <div className="text-center py-20 text-2xl">{loading.message}</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Filterbar filter={filter} setFilter={setFilter} />

            <div className="md:col-span-3">
                <Sort products={products} sortBy={sortBy} setSortBy={setSortBy} />
                <ProductBoard products={sortedProduct} />
            </div>
        </div>
    );
};

export default Dashboard;