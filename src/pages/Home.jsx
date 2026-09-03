
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <main className="home-page">
            <div className="home-content">
                <span className="eyebrow">
                    THE EVERYDAY DROP
                </span>
                <h1>
                    Things worth 
                    <br />
                    adding to cart.
                </h1>
                <p>
                    A modern virtualized product catalog built with 
                    React Router, Context API, custom hooks, and DOM virtualization.
                </p>
                <button onClick={() => navigate("/product")}
                    style={{
                        marginTop: "24px",
                        padding: "15px 24px",
                        border: "none",
                        borderRadius: "999px",
                        background: "var(--text)",
                        color: "var(--bg)",
                        fontWeight: 700,
                        cursor: "pointer"
                    }}
                >
                    Explore Products
                </button>
            </div>
        </main>
    );
}
export default Home;