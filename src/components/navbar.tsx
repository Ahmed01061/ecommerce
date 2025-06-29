import React from 'react'
import NavItems from './navItems';

const navItems = [
  { name: 'Store', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Category', href: '/category' },
  { name: 'Cart', href: '/cart' }
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-8 justify-between">
          {navItems.map(item => (
            <li key={item.name}>
              <NavItems item={item} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
