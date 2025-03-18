import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthLayout from "./Data/AuthLayout";
import { AuthProvider } from "./Context/AuthContex";
import { ProductProvider } from "./Context/ProductContext";
import { CartProvider } from "./Context/CartContext";
import { FavouriteProvider } from "./Context/FavouriteContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import ProductDetail from "./Pages/ProductDetail";
import Account from "./Pages/AccountInformation";
import ProtectedRoute from "./Data/ProtectedRoute";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<App />}>
				<Route path="" element={<Home />} />
				<Route
					path="about"
					element={
						<ProtectedRoute>
							<About />
						</ProtectedRoute>
					}
				/>
				<Route
					path="product/:cat"
					element={
						<ProtectedRoute>
							<Product />
						</ProtectedRoute>
					}
				/>
				<Route
					path="product"
					element={
						<ProtectedRoute>
							<Product />
						</ProtectedRoute>
					}
				/>
				<Route
					path="contact"
					element={
						<ProtectedRoute>
							<Contact />
						</ProtectedRoute>
					}
				/>
				<Route
					path="cart"
					element={
						<ProtectedRoute>
							<Cart />
						</ProtectedRoute>
					}
				/>
				<Route
					path="account"
					element={
						<ProtectedRoute>
							<Account />
						</ProtectedRoute>
					}
				/>
				<Route
					path="product/productDetail/:id"
					element={
						<ProtectedRoute>
							<ProductDetail />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/productDetail/:id"
					element={
						<ProtectedRoute>
							<ProductDetail />
						</ProtectedRoute>
					}
				/>
				<Route
					path="product/:cat/productDetail/:id"
					element={
						<ProtectedRoute>
							<ProductDetail />
						</ProtectedRoute>
					}
				/>
			</Route>
			<Route element={<AuthLayout />}>
				<Route path="login" element={<Login />} />
				<Route path="sign" element={<Signin />} />
			</Route>
		</>,
	),
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<CartProvider>
				<ProductProvider>
					<FavouriteProvider>
						<RouterProvider router={router} />
					</FavouriteProvider>
				</ProductProvider>
			</CartProvider>
		</AuthProvider>
	</React.StrictMode>,
);
