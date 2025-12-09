import { useContext } from 'react';
import { CartContext, TogglePageContext } from '../../Context';

const CartBoard = () => {
  const { setPage } = useContext(TogglePageContext);
  const { cart, cartTotal, updateQuantity, removeFromCart } = useContext(CartContext)

  function handleChangePage() {
    setPage('Home');
  }
  const base_url = "http://localhost:9000/"

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      {/* Header section */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide">
            Your bag
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">
            Shopping Cart
          </h1>
        </div>
        <button
          onClick={handleChangePage}
          className="text-sm font-semibold text-rose-500 hover:text-rose-600 flex items-center gap-2"
        >
          <span>Continue shopping</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Cart Items + Checkout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}

        {
          (cart.length > 0) ?
            (cart.map((item) => <div key={item.id} className="lg:col-span-2 space-y-4">
              <div className="soft-card p-4 flex gap-4">
                <img
                  src={`${base_url}${item.image}`}
                  alt="Apple Mac Pro"
                  className="w-24 h-24 object-cover rounded-lg bg-slate-100"
                />
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm">
                        {item.description}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-400 hover:text-rose-500"
                      aria-label="Remove"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300" onClick={() => updateQuantity(item.id, 'remove')}
                        disabled={item.quantity <= 1} >
                        −
                      </button>
                      <span className="text-sm font-semibold">{item.quantity}</span>
                      <button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300"
                        onClick={() => updateQuantity(item.id, 'add')}
                        disabled={item.quantity >= item.stock}>
                        +
                      </button>
                    </div>
                    <span className="text-2xl font-bold text-slate-900">${item.price}</span>
                  </div>
                </div>
              </div>
            </div>)) : <p className="text-3xl font-bold text-center lg:col-span-2 space-y-4 mt-8 text-gray-400">Cart is empty</p>
        }


        {/* Checkout Summary */}
        <div className="lg:col-span-1">
          <div className="soft-card p-6 sticky top-24 space-y-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            <div className="space-y-3 border-slate-200">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>${cartTotal}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span className="text-emerald-600 font-semibold">Free</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Tax</span>
                <span>$0</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-3 text-slate-900">
                <span>Total</span>
                <span>${cartTotal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartBoard;
