import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from '@mui/material';

function AddToCartBtn() {
  return (
    <button className='flex items-center justify-center rounded-md text-white w-full gap-3 bg-black py-3'>
      <ShoppingCartIcon/>
      <Typography>Add to cart</Typography>
    </button>
  )
}

export default AddToCartBtn
