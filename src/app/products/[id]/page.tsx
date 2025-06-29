import React from 'react'
import { Product } from '@/app/types/product';
import ProductCard from '@/components/products/ProductCard';

export default async function productPage({ params }: { params: { id: string } }) {
  const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product: Product = await response.json();

  return (
    <div>
      <div className="max-w-3xl mx-auto p-6">
        <ProductCard 
          product={product} 
          showViewDetails={false} 
          showAddToCart={true} 
          centered={true} 
        />
      </div>
    </div>
  )
}
