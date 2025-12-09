import { useContext } from "react";
import Footer from "./src/Components/Footer/Footer";
import Header from "./src/Components/Header/Header";
import TechBoard from "./src/Components/TechBoard/TechBoard";
import { TogglePageContext } from "./src/Context";
import CartBoard from "./src/Components/Header/CartsBoard";
import { useProducts } from "./src/Components/Hooks";

const Page = () => {
    const { page } = useContext(TogglePageContext)
    const { setSearchTerm } = useProducts()

    return (
        <div>
            <Header setSearchTerm={setSearchTerm} />
            {page === 'Home' && <TechBoard />}
            {page === 'Cart' && <CartBoard />}

            <Footer />
        </div>
    );
};

export default Page;