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

  useEffect(() => {
    console.log(categories);
  }, [categories]);

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

  const StyledContainerAllCategories = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  const StyledContainerCategory = styled.section`
    width: calc(50% - 15px);
    margin-bottom: 15px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 16px;
  `;

  const StyledTitle = styled.h2`
    font-size: 22px;
    margin: 15px 0px;
    font-weight: 600;
    color: rgb(1, 78, 203);
  `;

  return (
    <StyledFeaturedCategory>
      {loading && <Loading />}

      <StyledTitle>¡Es nuevo y destacado!</StyledTitle>

      <StyledContainerAllCategories>
        {categories.map((categoria) => (
          <StyledContainerCategory>
            <CategoryHeader />

            {categoria.productos.map((article) => (
              <ProductCard />
            ))}
            <ProductCard />
          </StyledContainerCategory>
        ))}
      </StyledContainerAllCategories>
    </StyledFeaturedCategory>
  );
};
