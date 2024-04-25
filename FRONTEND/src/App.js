import React from "react";
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Categories from "./pages/categories/Index";
import CategoriesCreate from "./pages/categories/Create";
import CategoriesUpdate from "./pages/categories/Update";
import Products from "./pages/products/Index";
import ProductsCreate from "./pages/products/Create";
import ProductsUpdate from "./pages/products/Update";
import Keranjangs from "./pages/keranjang/Index";
import KeranjangsCreate from "./pages/keranjang/Create";
import KeranjangsUpdate from "./pages/keranjang/Update";
import Customer from "./pages/customer/Index";
import CustomerCreate from "./pages/customer/Create";
import CustomerUpdate from "./pages/customer/Update";
import Pesanans from "./pages/pesanan/Index";
import PesanansCreate from "./pages/pesanan/Create";
import PesanansUpdate from "./pages/pesanan/Update";
import Contach from "./pages/contact/Index";
import About from "./pages/about/Index";
import Bayar from "./pages/Bayar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/create" element={<CategoriesCreate />} />
          <Route path="/categories/update/:id" element={<CategoriesUpdate />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/create" element={<ProductsCreate />} />
          <Route path="/products/update/:id" element={<ProductsUpdate />} />
          <Route path="/keranjang" element={<Keranjangs />} />
          <Route path="/keranjang/create" element={<KeranjangsCreate />} />
          <Route path="/keranjang/update/:id" element={<KeranjangsUpdate />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/customer/create" element={<CustomerCreate />} />
          <Route path="/customer/update/:id" element={<CustomerUpdate />} />
          <Route path="/pesanan" element={<Pesanans />} />
          <Route path="/pesanan/create" element={<PesanansCreate />} />
          <Route path="/pesanan/update/:id" element={<PesanansUpdate />} />
          <Route path="/contact" element={<Contach />} />
          <Route path="/about" element={<About />} />
          <Route path="/Bayar" element={<Bayar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
