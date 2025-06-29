import React from 'react'

export default function loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-600"></div>
    </div>
  )
}
