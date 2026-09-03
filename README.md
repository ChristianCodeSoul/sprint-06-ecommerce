# Sprint 06 - E-commerce SPA 
https://sprint-06-ecommerce.vercel.app

A react based e-commerce Single Page Application built for Sprint 06, focusing on SPA routing, global state management with context API custom hooks and DOM virtualization.


## FEATURES 

- React Router based SPA navigation
- Home Page
- Product Catalog
- Dynamic product detail routes using `/product/:id`
- Product not-found handling
- Global cart state using React Context API
- Add products to cart
- Update product quantities
- Remove products from cart
- Cart Summary and Checkout flow
- Custom `useCartOperations` hook
- Custom `useProductFetcher` hook
- 5,000 generated products
- Virtualized product rendering using `react-window`
- Search and category filtering
- Light/dark theme switching
- Responsive UI

## Sprint Requirements 

### Phase 1 - React Router 

Implement client-side routing for

`/`

`/product`

`/product/:id`

`/cart`

`/checkout`

Dynamic product detail pages use the product ID from the URL,

### Phase 2 - React Context API 

Cart state is managed globally through `CartContext`

The application supports :

- Adding products
- Removing products
- updating quantities
- Calculating cart totals
- calculating total cart item count

Components access cart functionality through the custom `useCartOperations` hook without prop drilling.

### Phase 3  - DOM Virtualization & Custom Hooks

The prodyct catalog generates 5,000 products. 

`react-window`is used to virtualize the catalog so that only the rows required by the current viewport are modified in the DOM instead of rendering all 5,000 product cards simultaneously.

Custom hooks include: 

- `useProductFetcher`
- `useCartOperations`

## Tech stack

- React
- Vite
- React Router
- react-window
- JavaScript
- CSS
