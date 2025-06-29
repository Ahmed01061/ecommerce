import Link from 'next/link'
import React from 'react'




export default function categoryPage() {
  return (
    <div>
      <div className="flex gap-4 items-center justify-center absolute w-full">
          <Link href="/category/electronics" className="bg-blue-600 text-white px-4 py-2 rounded">
          Electronics
          </Link>
          <Link href="/category/jewelery" className="bg-blue-600 text-white px-4 py-2 rounded">
          Jewelry
          </Link>
        </div>
    </div>
  )
}
