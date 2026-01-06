import Quantity from "@/app/components/Quantity";
import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import { green, red } from "@mui/material/colors";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function ProductDetail() {
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Grid container spacing={6}>

        {/* LEFT: Product Image */}
        <Grid size={{xs:12, md:6}}>
          <Box
            component="img"
            src=""
            alt="Product"
            sx={{
              width: "100%",
              borderRadius: 2,
              objectFit: "contain",
            }}
          />
        </Grid>

        {/* RIGHT: Product Info */}
        <Grid size={{xs:12, md:6}}>
          {/* Product Title */}
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Product Title
          </Typography>

          {/* Categories */}
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Categories:{" "}
            <span style={{ color: "#2e7d32" }}>
              Grocery, Home Appliance, Office Elements
            </span>
          </Typography>

          {/* Price */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, my: 2 }}>
            <Typography
              variant="body1"
              sx={{ textDecoration: "line-through", color: "gray" }}
            >
              $460.00
            </Typography>
            <Typography variant="h5" color="success.main" fontWeight={600}>
              $340.00
            </Typography>
          </Box>

          {/* Quantity + Add to Cart */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, my: 3 }}>
            <Quantity />
            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{ px: 4 }}
            >
              Add to cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail;
