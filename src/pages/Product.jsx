import { useMemo, useState } from "react";
import { List } from "react-window";

import useProductFetcher from "../hooks/useProductFetcher";
import useCartOperations from "../hooks/useCartOperations";
import ProductCard from "../components/ProductCard";
import CartSummary from "../components/CartSummary";

function ProductRow({ index, products, onAddToCart, style }) {
    const product = products[index];

    return (
        <div className="product-row" style={style}>
            <ProductCard
            product={product}
            onAddToCart={onAddToCart}
            />
        </div>
    );
}
function Product() {
    const { products, loading } = useProductFetcher();
    const { addToCart } = useCartOperations();
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory = 
            category === "All" || product.category === category;
            const matchesSearch = product.title
            .toLowerCase()
            .includes(search.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [products, category, search]);

    if (loading) {
        return (
            <main className="products-page">
                <p>Loading products...</p>
            </main>
        );
    }
    return (
        <main className="products-page">
            <header className="products-header">
                <div>
                    <span className="eyebrow">
                        THE EVERYDAY DROP
                    </span>

                    <h1>Product Catalog</h1>
                    <p>
                        {filteredProducts.length.toLocaleString()} products,
                        rendered efficiently. 
                    </p>
                </div>

                <CartSummary />
            </header>

            <section className="catalog-controls">
                <div className="search-box">
                    <input type="search" placeholder="Search products..." value={search} onChange={(event) => setSearch(event.target.value)}/>
                </div>
                <div className="category-filter">
                    <button className={category === "All" ? "active" : ""} onClick={() => setCategory("All")}>All</button>
                    <button className={category === "Tech" ? "active" : ""} onClick={() => setCategory("Tech")}>Tech</button>
                    <button className={category === "Audio" ? "active" : ""} onClick={() => setCategory("Audio")}>Audio</button>
                    <button className={category === "Workspace" ? "active" : ""} onClick={() => setCategory("Workspace")}>Workspace</button>
                    <button className={category === "Gaming" ? "active" : ""} onClick={() => setCategory("Gaming")}>Gaming</button>
                    <button className={category === "Accessories" ? "active" : ""} onClick={() => setCategory("Accessories")}>Accessories</button>
                </div>
            </section>

            <section className="product-list">
                <List
                rowComponent={ProductRow}
                rowCount={filteredProducts.length}
                rowHeight={300}
                overscanCount={0}
                rowProps={{
                    products: filteredProducts,
                    onAddToCart: addToCart,
                }}
                style={{
                    height: 680,
                    width: "100%",
                }}/>
            </section>
        </main>
    );
}

export default Product;