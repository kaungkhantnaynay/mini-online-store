"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import { useGetProductsByCategoryQuery } from '../services/api'

export type ProductType = {
    title: string,
    thumbnail: string,
    price: number,
    rating: number
}


function Products() {
    const {selectedCategory} = useSelector ((state:any)=> state.products)
        const {
          data,
          isLoading,
          isError,
        } = useGetProductsByCategoryQuery(selectedCategory);
  return (
    <div className='grid lg:grid-cols-5 grid-cols-2 max-w-6xl mx-auto mt-6 text-center gap-3 justify-center'>
      {data?.products?.map((product: ProductType,index: number)=>{
        return(
            <React.Fragment key={index}>
                <Product product={product}/>
            </React.Fragment>
            
        )
      })}
    </div>
  )
}

export default Products
