"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavItems({ item }: { item: { name: string; href: string } }) {
  const pathname = usePathname();

  return (
          <Link
            href={item.href} 
            className={`font-medium ${
              pathname === item.href 
                ? "text-blue-600 font-semibold" 
                : "text-gray-800 hover:text-blue-600"
            }`}
          >
            {item.name}
          </Link>
        
  );
}
