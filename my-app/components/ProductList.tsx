import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const ProductList = () => {
    const products = [
        { id: 1, name: 'Product 1', price: '$10' },
        { id: 2, name: 'Product 2', price: '$20' },
        { id: 3, name: 'Product 3', price: '$30' },
    ];
  return (
      <div id="product" className="px-4 md:px-12 py-5 md:py-10 flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {products.map((product, index) => (
                  <Link href="/product/123" key={index} >
                      <Image src="/dummy-img.jpg" alt="your choise" width={1000} height={1000} className="max-w-[17rem]
                       h-72 object-center rounded-lg"/>
                      <div>
                          <h2 className="font-semibold text-lg text-black">A very good watch</h2>
                          <p className="font-medium text-sm mt-1 text-gray-700">$1200</p>
                      </div>
                  </Link>
              ))}
          </div>
    </div>
  )
}

export default ProductList