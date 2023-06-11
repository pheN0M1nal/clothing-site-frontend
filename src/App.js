import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "react-toastify/dist/ReactToastify.css"

import { ToastContainer } from "react-toastify"
import SignIn from "./pages/StateManagement/SignIn"
import SignInAdmin from "./pages/StateManagement/SignInAdmin"

import SignUp from "./pages/StateManagement/SignUp"
import ForgotPassword from "./pages/StateManagement/ForgotPassword"
import Home from "./pages/Home"
import Navbar from "./Navigation/Navbar"
import Footer from "./Navigation/Footer"
import Profile from "./pages/StateManagement/Profile"
import Products from "./pages/Products/Products"

import ProductView from "./pages/Products/ProductView"
import Cart from "./pages/Products/Cart"
import AdminDashboard from "./pages/adminPages/AdminDashboard"
import AllUsers from "./pages/adminPages/AllUsers"
import AllDesigners from "./pages/adminPages/AllDesigners"
import AllAdmins from "./pages/adminPages/AllAdmins"
import Billiing from "./pages/Products/Billiing"
import OrderPlace from "./pages/Products/OrderPlace"
import Dashboard from "./dashboard/pages/Dashboard"
import NotFound from "./pages/NotFound"
import { AddProduct } from "./pages/AddProduct"
import CreateShop from "./pages/otherForms/CreateShop"
import RegisterDeisgner from "./pages/otherForms/RegisterDeisgner"
import DesignerDasboard from "./pages/DesignerDasboard"
import DesignerProducts from "./pages/DesignerProducts"
import { UpdateProduct } from "./pages/UpdateProduct"

function App() {
    return (
        <>
            <ToastContainer />
            <Router>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <div className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/forgot-password"
                                element={<ForgotPassword />}
                            />
                            <Route path="/profile" element={<Profile />} />

                            <Route path="/allProducts" element={<Products />} />
                            <Route
                                path="/allProducts/:search"
                                element={<Products />}
                            />

                            <Route
                                path="/update-product/:id"
                                element={<UpdateProduct />}
                            />
                            <Route
                                path="product/:id"
                                element={<ProductView />}
                            />
                            <Route path="/cart" element={<Cart />} />
                            {/* <Route path="/admin" element={<AdminDashboard />} /> */}
                            <Route
                                path="/admin/allUsers"
                                element={<AllUsers />}
                            />
                            <Route
                                path="/admin/allDesigners"
                                element={<AllDesigners />}
                            />
                            <Route
                                path="/admin/allAdmins"
                                element={<AllAdmins />}
                            />
                            <Route
                                path="/designer/addProduct"
                                element={<AddProduct />}
                            />

                            <Route
                                path="/designer/products"
                                element={<DesignerProducts />}
                            />
                            <Route
                                path="/designer/products/payment-cancelled"
                                element={<DesignerProducts />}
                            />
                            <Route
                                path="/designer/products/payment-verified"
                                element={<DesignerProducts />}
                            />

                            <Route
                                path="/admin/stats"
                                element={<Dashboard />}
                            />

                            <Route path="/billing" element={<Billiing />} />
                            <Route path="/sign-in" element={<SignIn />} />
                            <Route
                                path="/admin-signin"
                                element={<SignInAdmin />}
                            />

                            <Route path="/sign-up" element={<SignUp />} />
                            <Route
                                path="/order-place"
                                element={<OrderPlace />}
                            />
                            <Route
                                path="/order-place/payment-verified"
                                element={<OrderPlace />}
                            />
                            <Route
                                path="/order-place/payment-cancelled"
                                element={<OrderPlace />}
                            />

                            <Route
                                exact
                                path="/admin"
                                element={<AdminDashboard />}
                            />
                            <Route
                                exact
                                path="/register-designer"
                                element={<RegisterDeisgner />}
                            />
                            <Route
                                exact
                                path="/designer"
                                element={<DesignerDasboard />}
                            />
                            <Route
                                exact
                                path="/create-shop"
                                element={<CreateShop />}
                            />
                            <Route exact path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </>
    )
}

export default App
