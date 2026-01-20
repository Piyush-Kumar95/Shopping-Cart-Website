import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Pages1/Home"
import Cart from "./Pages1/Cart"
import { CartProvider , useCart } from "./Context1/CartContext"

function Navbar(){
   const { cart } = useCart()
  return(
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">🛒 MyShop</Link>
        <div>
          <Link className="nav-link d-inline me-3 text-white" to="/">Home</Link>
          <Link className="nav-link d-inline text-white" to="/cart">Cart ({cart.length})</Link>
        </div>
      </div>
    </nav>
  )
}

function App() {
  
  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    </Routes>

    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
