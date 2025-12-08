import { useContext } from "react";
import { TogglePageContext } from "../../Context";

const Navigation = () => {
      const {setPage} = useContext(TogglePageContext);
    function handlePageChange(){
       setPage('Home')
    }
    return (
        <div className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={handlePageChange} className="text-slate-700 hover:text-slate-900"
            >Products</button>
            <a href="#" className="text-slate-700 hover:text-slate-900"
            >About</a>
            <a href="#" className="text-slate-700 hover:text-slate-900"
            >Support</a>
        </div>
    );
};

export default Navigation;