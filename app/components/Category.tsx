import Image from 'next/image'
import React from 'react'
import {categories} from '../dummyData/data'
import { Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../services/api'
import { setSelectedCategory } from '../services/productsSlice'

type CategoryType = {
    slug: string;
    name: string;
}

interface CategoryProps{
    category: CategoryType;
    isLastChild: boolean;
    index: number
}

function Category({category,isLastChild,index}: CategoryProps) {
    const {slug,name} = category;
    const dispatch = useDispatch();
    const {selectedCategory} = useSelector ((state:any)=> state.products)
    const {
      data: products,
      isLoading,
      isError,
    } = useGetProductsByCategoryQuery(selectedCategory);
    const isActive = selectedCategory === slug;
  return (
    <div onClick={()=> dispatch(setSelectedCategory(slug))} className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image src={categories[index]?.img} alt={name} width={500} height={500} className="w-10 object-cover mt-2 mx-auto"/>
      <Typography variant="subtitle2" className="text-center" sx={{mt:1}}>{name}</Typography>
    </div>
  )
}

export default Category
