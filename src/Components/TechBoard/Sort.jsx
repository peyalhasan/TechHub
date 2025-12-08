
const Sort = ({products, sortBy, setSortBy}) => {

    function handleSort(e){
        setSortBy(e.target.value)
    }
    
    return (
        <div className="flex items-center justify-between mb-6">
            <p className="text-slate-600">Showing {products.length} products</p>
            <div className="flex items-center gap-2">
                <label
                    htmlFor="sort"
                    className="text-sm font-medium text-slate-700"
                >Sort by:</label>
                <select
                onChange={handleSort}
                    id="sort"
                    value={sortBy}
                    className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white">
                    <option value='newest' >Newest</option>
                    <option value='oldest'>Oldest</option>
                    <option value='low-price'>Price: Low to High</option>
                    <option value='high-price'>Price: High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default Sort;