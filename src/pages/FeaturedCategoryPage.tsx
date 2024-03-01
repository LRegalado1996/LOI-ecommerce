import { useEffect, useState } from "react";
import styled from "styled-components";
import { Loading } from "../components/Loading";
import { CategoryHeader } from "../components/CategoryHeader";
import { ProductCard } from "../components/ProductCard";
import { reqArticles } from "../api/reqArticles";
import { CategoriasDestacada } from "../interfaces/reqArticlesApi";

export const FeaturedCategoryPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<CategoriasDestacada[]>([]);

  useEffect(() => {
    uploadArticles();
  }, []);

  const uploadArticles = async () => {
    const resp = await reqArticles.get("/index.php", {
      params: {
        ctrl: "index",
        act: "categoriasDestacadas",
      },
    });

    if (resp.data.length > 0) {
      setCategories(resp.data);
      setLoading(false);
    }
  };

  const StyledFeaturedCategory = styled.section`
    flex: 1;
    padding: 0px 20px;
    position: relative;
  `;
  return (
    <StyledFeaturedCategory>
      {loading && <Loading />}
      {categories.map((categoria) => (
        <p>{categoria.nombre}</p>
      ))}
      <CategoryHeader />
      <ProductCard />
    </StyledFeaturedCategory>
  );
};
