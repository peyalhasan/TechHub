import { useContext } from "react";
import Cart from "./Cart";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import { TogglePageContext } from "../../Context";

const Header = () => {
    const { setPage } = useContext(TogglePageContext);
    function handlePageChange() {
        setPage('Cart')
    }
    return (
        <nav
            className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200"
        >
            <div
                className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between"
            >
                <div className="flex items-center gap-4">
                    {/* Logo */}
                    <Logo />
                </div>
                {/* Navigation */}
                <Navigation />
                <div className="flex items-center gap-3">
                    {/* Search */}
                    <Search  />
                    {/* Cart */}
                    {<button type="button" onClick={handlePageChange}>
                        <Cart />
                    </button>}
                </div>
            </div>
        </nav>
    );
};

export default Header;