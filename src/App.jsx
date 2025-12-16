import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import LandingPage from './pages/LandingPage/LandingPage';
import Shop from './pages/Shop/Shop';
import Login from './pages/Login/Login';
import Checkout from './pages/Checkout/Checkout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <div className="App">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/tienda" element={<Shop />} />
                <Route path="/login" element={<Login />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route 
                  path="/admin" 
                  element={<ProtectedRoute requireAdmin={true} element={<AdminDashboard />} />} 
                />
              </Routes>
            </div>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
