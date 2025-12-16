"use client"
import React from 'react'
import Category from './Category';
import { categories } from '../dummyData/data';
import { useGetCategoriesQuery } from '../services/api';
import { Container, Grid, Typography } from '@mui/material';

type CategoryApiItem = {
  slug: string;
  name: string;
}

function Categories() {
  const categoriesData = useGetCategoriesQuery(null);
  const {data, isError, isLoading} = categoriesData;
  const categories = data?.slice(0,6)
  return (
    <>
    <Container maxWidth="xl">
      {isLoading && <Typography>Loading...</Typography>} {/* // If loading: show "Loading…" */}
      {isError && <Typography>Error Occured</Typography>} 
      {/* // If error: show "Error Occurred" */}
      <Grid container sx={{mt:10, border:"1px solid #333"}}>
        {categories?.map((category: CategoryApiItem, index:number) =>{
          const lastChild = categories.length -1;
          const isLastChild = lastChild === index;
          return(
            <React.Fragment key={index}>
              <Category category={category} index={index} isLastChild={isLastChild}/>
            </React.Fragment>
          )
        })}
      </Grid>
    </Container>
    </>
  )
}

export default Categories
