import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/app/types/product';

interface ProductCardProps {
  product: Product;
  showViewDetails?: boolean;
  showAddToCart?: boolean;
  centered?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  showViewDetails = true,
  showAddToCart = false,
  centered = false
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex justify-center items-center h-48 p-4 bg-white">
        <Image 
          src={product.image} 
          alt={product.title} 
          width={120} 
          height={120} 
          className="object-contain max-h-full" 
        />
      </div>
      
      <div className="p-5">
        <h2 className={`font-semibold text-lg line-clamp-2 mb-2 h-14 ${centered ? 'text-center' : ''}`}>
          {product.title}
        </h2>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>
        
        <div className={`mt-auto pt-2 border-t ${centered ? 'flex flex-col items-center' : ''}`}>
          <span className="inline-block px-2 py-1 bg-gray-100 text-xs rounded-full mb-2">
            {product.category}
          </span>
          <p className="text-xl font-bold text-gray-800 mb-3">
            ${product.price.toFixed(2)}
          </p>
          
          {showViewDetails && (
            <Link 
              href={`/products/${product.id}`} 
              className="block w-full py-2 px-4 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              View Details
            </Link>
          )}
          
          {showAddToCart && (
            <Link 
              href={`/cart`} 
              className="block w-full py-2 px-4 bg-green-600 text-white text-center rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              Add to Cart
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
