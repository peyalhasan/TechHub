
import useCatrogries from "../Hooks/useCategory";

const Filterbar = ({ filter, setFilter }) => {
    const { categories, error, loading } = useCatrogries();

    if (loading?.state) {
        return <p className="text-sm text-gray-500 animate-pulse">{loading.message}</p>;
    }

    if (error) {
        return <p className="text-red-500 text-sm">Error: {error}</p>;
    }

    const handleCategory = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;

        setFilter(prev => ({
            ...prev,
            category: checked
                ? [...prev.category, value]
                : prev.category.filter(c => c !== value)
        }));
    };



    const handleRating = (e) => {
        const checked = e.target.checked;
        setFilter(prev => ({
            ...prev,
            minRating: checked ? 4.5 : 0
        }));
    };

    const clearAll = () => {
        setFilter({ category: [], minPrice: 0, maxPrice: 0, minRating: 0 });
    };

    return (
        <div className="md:col-span-1 space-y-4">
            <div className="soft-card p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
                    <button onClick={clearAll} className="text-xs text-rose-500 font-semibold">
                        Clear
                    </button>
                </div>

                {/* Category */}
                <div className="mb-6">
                    <h4 className="font-medium text-sm mb-3 text-slate-700">Category</h4>
                    <div className="space-y-2">
                        {categories.map((cat) => (
                            <label key={cat.id} className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    value={cat.name}
                                    checked={filter.category.includes(cat.name)}
                                    onChange={handleCategory}
                                    className="w-4 h-4 text-rose-500 rounded border-slate-300"
                                />
                                <span className="ml-3 text-sm text-slate-700">{cat.name}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                    <h4 className="font-medium text-sm mb-3 text-slate-700">Price Range</h4>
                    <div className="space-y-2">
                        {[
                            { label: "$0 - $500", min: 0, max: 500 },
                            { label: "$500 - $1000", min: 500, max: 1000 },
                            { label: "$1000 - $2000", min: 1000, max: 2000 },
                            { label: "$2000+", min: 2000, max: 999999 }
                        ].map((range) => (
                            <label key={range.label} className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="price"
                                    checked={filter.minPrice === range.min && filter.maxPrice === range.max}
                                    onChange={() => setFilter(prev => ({
                                        ...prev,
                                        minPrice: range.min,
                                        maxPrice: range.max
                                    }))}
                                    className="w-4 h-4 text-rose-500"
                                />
                                <span className="ml-3 text-sm text-slate-700">{range.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Rating */}
                <div>
                    <h4 className="font-medium text-sm mb-3 text-slate-700">Rating</h4>
                    <div className="space-y-2">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={filter.minRating === 4.5}
                                onChange={handleRating}
                                className="w-4 h-4 text-rose-500 rounded border-slate-300"
                            />
                            <span className="ml-3 text-sm text-slate-700">4.5 & up</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filterbar;