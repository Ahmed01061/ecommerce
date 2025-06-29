import Link from "next/link";

export default function Home() {
  return (
    <>
    <div 
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage: "url('/store-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 1
      }}
    ></div>
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-white bold">Welcome to Our E-commerce Store</h1>
      <p className="text-white bold">Explore our wide range of products!</p>
    <div className="relative mt-8 w-full max-w-4xl h-64">
   
        <div className="flex gap-4 justify-center absolute w-full">
          <Link href="/products" className="bg-blue-600 text-white px-4 py-2 rounded">
          All Products
          </Link>
          <Link href="/category" className="bg-blue-600 text-white px-4 py-2 rounded">
          Categories
          </Link>
        </div>
         
          
      </div>
      </div>
    </>
     
  
  );
}
