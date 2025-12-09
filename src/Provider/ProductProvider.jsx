import { useProducts } from "../Components/Hooks";
import { ProductContext } from "../Context";


const ProductProvider = ({ children }) => {
    const { products, loading, error, filter, setFilter, searchTerm, setSearchTerm } = useProducts()
    return (
        <ProductContext.Provider value={{ products, loading, error, filter, setFilter, searchTerm, setSearchTerm }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;