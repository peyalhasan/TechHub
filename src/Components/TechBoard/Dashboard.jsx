import Filterbar from "./Filterbar";
import ProductBoard from "./ProductBoard";
import Sort from "./Sort";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Filterbar />
            <div className="md:col-span-3">
                <Sort />
                <ProductBoard />
            </div>
        </div>
    );
};

export default Dashboard;