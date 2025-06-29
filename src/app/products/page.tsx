import React from 'react'
import { Product } from '@/app/types/product';
import ProductGrid from '@/components/products/ProductGrid';

export const metadata = {
  title: 'Products',
  description: 'Browse our collection of products',
};

export default async function productsPage() {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
        <ProductGrid products={products} />
      </div>
    </div>
  )
}
