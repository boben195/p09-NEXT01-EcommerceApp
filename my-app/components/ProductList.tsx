"use client"

import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Image from 'next/image';
import axios from 'axios';


interface Product {
    _id: string;
    image: string;
    name: string;
    price: number;
    }

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("api/fetch-products")
        .then((responce) => setProducts(responce.data.products));
        
}, [])

  return (
      <div id="product" className="px-4 md:px-12 py-5 md:py-10 flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {products.map((product: Product, index) => (
                  <Link href={`/product/${product._id}`} key={index} >
                      <Image src={product.image} alt="your choise" width={1000} height={1000} className="max-w-[17rem]
                       h-72 object-center object-cover rounded-lg"/>
                      <div>
                          <h2 className="font-semibold text-lg text-black">{ product.name}</h2>
                          <p className="font-medium text-sm mt-1 text-gray-700">{ product.price}</p>
                      </div>
                  </Link>
              ))}
          </div>
    </div>
  )
}

export default ProductList