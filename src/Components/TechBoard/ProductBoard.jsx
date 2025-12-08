import { useProducts } from "../Hooks";
import ProductCard from "./ProductCard";

const ProductBoard = () => {
    const {products} = useProducts()
    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            {
                products.map((product) => <ProductCard   key={product.id} product={product} />  )
            }
        </div>
    );
};

export default ProductBoard;