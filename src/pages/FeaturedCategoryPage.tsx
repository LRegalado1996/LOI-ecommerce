import { Loading } from "../components/Loading";
import { CategoryHeader } from "../components/CategoryHeader";
import { ProductCard } from "../components/ProductCard";
import { useFeaturedCategory } from "../hooks/useFeaturedCategory";
import { FeatureCategoryStyle } from "../assets/FeatureCategoryStyle";

export const FeaturedCategoryPage = () => {
  const { loading, categories } = useFeaturedCategory();

  const {
    StyledFeaturedCategory,
    StyledContainerAllCategories,
    StyledContainerCategory,
    StyledContainerProductCard,
    StyledTitle,
  } = FeatureCategoryStyle();

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
            <StyledContainerProductCard>
              {categoria.productos.map((product) => (
                <ProductCard product={product} />
              ))}
            </StyledContainerProductCard>
          </StyledContainerCategory>
        ))}
      </StyledContainerAllCategories>
    </StyledFeaturedCategory>
  );
};
