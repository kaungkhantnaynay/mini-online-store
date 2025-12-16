"use client"
import React from 'react'
import Image from 'next/image'
import { Rating, Typography } from '@mui/material'
import { ProductType } from './Products'
import AddToCartBtn from './AddToCartBtn'

interface ProductProps {
    product: ProductType
}

function Product({product}:ProductProps) {
  return (
    <div className='flex flex-wrap content-between bg-gray-200 p-3 rounded-xl'>
      <div>
        <Image src={product.thumbnail} alt='Product Image' width={200} height={200}></Image>
        <Typography>
            {product.title}
        </Typography>
        <Typography>
            {product.price}
        </Typography>
        <Rating name="read-only" value={product.rating} readOnly />
        </div>
        <AddToCartBtn/>
    </div>
  )
}

export default Product
