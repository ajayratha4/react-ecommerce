import { Box, Card, CardActionArea, Typography } from "@mui/material";
import React from "react";
import { ProductType } from "types";

type ProductCardProps = {
  product: ProductType;
};
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <img src={product.image} height={300} width={250} alt="test" />
        <Box px={1}>
          <Typography
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {product.brand}
          </Typography>
          <Typography
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {product.name}
          </Typography>
          <Typography>Rs .{product.price}</Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
