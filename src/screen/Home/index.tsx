import { Box } from "@mui/material";
import { Apis } from "apis/const";
import useAxios from "apis/useAxios";
import HorizontalSkeleton from "common/Skeleton/HorizontalSkeleton";
import ProductCard from "components/ProductCard";
import React from "react";
import { ProductType } from "types";

const Home = () => {
  const { response = [], loading } = useAxios<ProductType[]>(Apis.Product);

  if (loading) {
    return (
      <HorizontalSkeleton
        width={300}
        height={400}
        dummyArr={Array.from(Array(10).keys())}
      />
    );
  }

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-evenly" gap={2}>
      {response.map((product) => {
        return (
          <Box key={product.id}>
            <ProductCard product={product} />
          </Box>
        );
      })}
    </Box>
  );
};

export default Home;
