import { useEffect, useState } from "react"
import { CartContext } from "../Context"
import Swal from "sweetalert2";

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('cart');
            if (savedCart && savedCart !== "undefined" && savedCart !== "null") {
                setCart(JSON.parse(savedCart));
            }
        } catch (error) {
            console.error("Failed to load cart:", error);
            localStorage.removeItem('cart');
        }
    }, [])

    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch (error) {
            console.error("Failed to save cart:", error);
        }
    }, [cart])

    const addToCart = (product) => {
        setCart(prev => {
            const exist = prev.find(item => item.id === product.id);
            if (exist) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
            return [...prev, { ...product, quantity: 1 }]
        })
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You add this Product on Cart",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to remove it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it! 😑"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Product is Removed 🥺",
                    icon: "success"
                });
            }
        });
    }

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }
        setCart(prev => {
            prev.map(item => (item.id === id ? { ...item, quantity } : item))
        })
    }
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart,
            cartCount,
            cartTotal,
            setCart,
            addToCart,
            removeFromCart,
            updateQuantity,
        }}  >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;