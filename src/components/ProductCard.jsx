
import { useNavigate } from "react-router-dom";

function ProductCard({ product, onAddToCart}) {
    const navigate = useNavigate();

    return (
        <article className="product-card" >
            <div className="product-card__visual" >
                <span className="product-card__category" >
                    {product.category}
                </span>
                <div className="product-card__placeholder" >
                    {product.title.charAt(0)}
                </div>
            </div>
            <div className="product-card__content" >
                <div>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                </div>
                <div className="product-card__footer" >
                    <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                    <div className="product-card__actions">

                        <button type="button" className="product-card__details" onClick={() => navigate(`/product/${product.id}`)}>
                            View details
                        </button>
                        
                        <button type="button" onClick={() => onAddToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
export default ProductCard; 