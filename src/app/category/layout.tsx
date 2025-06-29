export const metadata = {
  title: '2 Categories',
  description: 'Explore various product categories',
};


export default function layout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
   <div>
          <h1 className="text-3xl font-bold mb-6 text-center">Category</h1>
          {children}

   </div>
     
       
  )};