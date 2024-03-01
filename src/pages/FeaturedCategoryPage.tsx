import styled from "styled-components";
import { Loading } from "../components/Loading";
import { CategoryHeader } from "../components/CategoryHeader";
import { ProductCard } from "../components/ProductCard";
import { useFeaturedCategory } from "../hooks/useFeaturedCategory";

export const FeaturedCategoryPage = () => {
  const { loading, categories } = useFeaturedCategory();

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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0px auto;
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
            <CategoryHeader
              title={categoria.nombre}
              description={categoria.descripcion}
            />

            {categoria.productos.map((product) => (
              <ProductCard product={product} />
            ))}
          </StyledContainerCategory>
        ))}
      </StyledContainerAllCategories>
    </StyledFeaturedCategory>
  );
};
