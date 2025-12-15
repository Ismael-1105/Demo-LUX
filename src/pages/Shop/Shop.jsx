import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { products, categories } from '../../data/products';
import { useCart } from '../../context/CartContext';
import Navbar from '../LandingPage/components/Navbar';
import Footer from '../LandingPage/components/Footer';
import ShopHeader from './components/ShopHeader';
import CategoryTabs from './components/CategoryTabs';
import ProductGrid from './components/ProductGrid';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const { addToCart } = useCart();

  const filteredProducts =
    selectedCategory === 0
      ? products
      : products.filter(p => p.category === categories[selectedCategory]);

  return (
    <>
      <Navbar />

      <Box component="main" sx={{ pt: 10, pb: 12, bgcolor: '#fafafa', minHeight: '100vh' }}>
        <Container maxWidth="lg">
          <ShopHeader />

          <CategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <ProductGrid
            products={filteredProducts}
            onAddToCart={addToCart}
          />
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Shop;
