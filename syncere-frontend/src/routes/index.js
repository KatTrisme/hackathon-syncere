import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../sections/home';
import QRScanner from '../sections/qr-scanner';
import AdminCreateProduct from '../sections/admin-create-product';
import QrScannerResults from '../sections/qr-scanner-results';
import AdminUpdateProduct from '../sections/admin-update-product';
import AdminUpdateProductForm from '../sections/admin-update-product-form';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scan-qr" element={<QRScanner />} />
      <Route path="/create-product" element={<AdminCreateProduct />}/>
      <Route path="/qr-scan-results" element={<QrScannerResults/>}/>
      <Route path="/update-product" element={<AdminUpdateProduct/>}/>
      <Route path="/update-product-form" element={<AdminUpdateProductForm/>}/>
    </Routes>
  )
}
