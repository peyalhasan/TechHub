import ProductCard from "./ProductCard";

const ProductBoard = ({ products = [] }) => {

    if (products.length === 0) {
        return (
            <div className="text-center py-16">
                <p className="text-xl text-gray-500">No product Found..</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductBoard;