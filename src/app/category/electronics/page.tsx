import React from 'react';
import { Product } from '@/app/types/product';
import ProductGrid from '@/components/products/ProductGrid';

export default async function electronicsPage() {
  const response = await fetch("https://fakestoreapi.com/products/category/electronics");
  const products = await response.json();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <ProductGrid products={products} />
      </div>
    </div>
  )
}
