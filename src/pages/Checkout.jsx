
import { useNavigate } from "react-router-dom";
import useCartOperations from "../hooks/useCartOperations";

function Checkout() {
    const navigate = useNavigate();

    const {
        cartItems,
        updateQuantity, 
        getCartTotal,
    } = useCartOperations();

    const total = getCartTotal();

    if (cartItems.length === 0) {
        return (
            <main className="checkout-page">
                <h1>Checkout</h1>
                <p>Your Cart is empty.</p>

                <button className="checkout-primary-btn" onClick={() => navigate("/product")}>
                    Continue Shopping
                </button>
            </main>
        );
    }

    return (
        <main className="checkout-page">
            <header>
                <span className="eyebrow">ORDER  REVIEW</span>
                <h1>Checkout</h1>
                <p>Review your order before completing your purchase.</p>
            </header>
    
            <section className="checkout-section">
                <h2>Order Summary</h2>
                <div className="checkout-items">
                    {cartItems.map((item) => (
                        <article className="checkout-item" key={item.id}>
                            <div className="checkout-item-info">
                                <h3>{item.title}</h3>
                                <p className="checkout-item-price">
                                    ₹{item.price.toLocaleString("en-IN")} each
                                </p>
                                <p className="checkout-subtotal">
                                    Subtotal: ₹
                                    {(item.price * item.quantity).toLocaleString("en-IN")}
                                </p>
                            </div>
                            <div className="checkout-quantity">
                                <button className="quantity-btn" onClick={() =>
                                updateQuantity(
                                item.id,
                                item.quantity - 1)}
                                aria-label={`Decrease quantity of ${item.title}`}
                                >
                                    -
                                </button>
                                <span> {item.quantity}</span>
                                
                                <button className="quantity-btn"
                                onClick={() => 
                                updateQuantity(
                                item.id,
                                item.quantity + 1)}
                                aria-label={`Increase quantity of ${item.title}`}
                                >
                                    +
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            
            <section className="checkout-total">
                <div className="checkout-total-row">
                    <span>Total</span>
                    <strong>₹{total.toLocaleString("en-IN")}</strong>
                </div>
                
                <button className="pay-now-btn" onClick={() => alert("Payment integration coming soon.")}> 
                    Pay Now
                </button>
                
                <div className="checkout-actions">
                    <button className="checkout-secondary-btn" onClick={() => navigate("/cart")}>
                        ← Back to Cart
                    </button>
                    <button className= "checkout-secondary-btn" onClick={() => navigate("/product")}>
                        Continue Shopping
                    </button>
                </div>
           </section>
        </main>
    );
}
export default Checkout;