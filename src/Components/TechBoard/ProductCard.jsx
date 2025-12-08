import { useContext } from 'react';
import getFormattedDate from '../../Utils/dateFormate'
import { CartContext } from '../../Context';
const ProductCard = ({ product }) => {

    const { title, price, description, image, stock, rating_rate, updatedAt, rating_count } = product;
    const { addToCart } = useContext(CartContext)
    const base_url = "http://localhost:9000/"


    return (
        <div
            className="soft-card overflow-hidden hover:-translate-y-1 transition-all">
            <div
                className="aspect-square bg-gradient-to-br from-slate-100 via-white to-rose-50 flex items-center justify-center">
                <img
                    src={`${base_url}${image}`}
                    alt={title}
                    className="w-full h-full object-cover" />
            </div>
            <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                    <h3
                        className="font-semibold text-lg text-slate-900 line-clamp-2">
                        {title}
                    </h3>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <span className="text-amber-500">⭐ {rating_rate}</span>
                    <span className="text-slate-500">({rating_count} reviews)</span>
                </div>
                {/* <!-- create date --> */}
                <p className="text-slate-500 text-sm">
                    Upload on: <span className="font-semibold">{getFormattedDate(updatedAt, false)} </span>
                </p>

                <p className="text-slate-600 text-sm line-clamp-2">
                    {description}
                </p>
                <div className="flex items-center justify-between">
                    <span
                        className="text-2xl font-bold text-slate-900">${price}</span>
                    <span
                        className="text-sm text-emerald-600 font-medium"
                    >In Stock ({stock})</span>
                </div>
                <button
                    className="w-full button-primary py-2.5 rounded-lg font-semibold"
                    onClick={()=>addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;