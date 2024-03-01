import { useState } from "react";

export const useProductCard = () => {
  const [isFavorites, setIsFavorites] = useState<boolean>(false);
  const [quantityProducts, setQuantityProducts] = useState<number>(0);

  const handleFavorites = () => {
    setIsFavorites(!isFavorites);
  };
  const handleQuantityProducts = (value: number = 1) => {
    setQuantityProducts(quantityProducts + value);
  };

  return {
    handleFavorites,
    handleQuantityProducts,
    isFavorites,
    quantityProducts,
  };
};
