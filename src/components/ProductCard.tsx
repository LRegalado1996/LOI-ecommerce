import { Producto } from "../interfaces/reqArticlesApi";
import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as filledHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useProductCard } from "../hooks/useProductCard";
import {ProductCardStyle} from "../assets/ProductCardStyle";

interface Porps {
  product: Producto;
}

export const ProductCard = ({ product }: Porps) => {
  const {
    handleFavorites,
    handleQuantityProducts,
    isFavorites,
    quantityProducts,
  } = useProductCard();

  const {
    StyledContainerProduct,
    StyledPhoto,
    StyledContainerRate,
    StyledProductTitulo,
    StyledProductSubtitulo,
    StyledProductFabricante,
    StyledPrecio,
    StyledPrecioMercado,
    StyledPorcentajeDescuento,
    StylesFavoritesbutton,
    StylesAddToCartButton,
    StylesButtonsContainer,
    StylesTrashButton,
    StylesQuantityProducts,
    StylesPlusButton,
    StylesinBagAlert,
  } = ProductCardStyle();

  return (
    <StyledContainerProduct key={product.id}>
      <StyledPhoto src={product.foto} alt={product.foto_alt} />
      <StyledContainerRate>
        <span>Calificaciones: {product.calificaciones.cantidad || 0}</span>
        {product.calificaciones.promedio && (
          <Rating
            readonly
            allowFraction
            size={15}
            initialValue={Number(product.calificaciones.promedio)}
          />
        )}
      </StyledContainerRate>

      <StyledProductTitulo>{product.titulo}</StyledProductTitulo>
      <StyledProductSubtitulo>{product.subtitulo}</StyledProductSubtitulo>
      <StyledProductFabricante>
        {product.fabricante.nombre}
      </StyledProductFabricante>

      <StyledPorcentajeDescuento>
        {product.porcentaje_descuento}% OFF
      </StyledPorcentajeDescuento>
      <StyledPrecioMercado>
        {product.moneda} {product.precio_mercado}
      </StyledPrecioMercado>
      <StyledPrecio>
        {product.moneda} {product.precio}
      </StyledPrecio>

      <StylesFavoritesbutton onClick={handleFavorites}>
        <FontAwesomeIcon
          icon={isFavorites ? filledHeart : emptyHeart}
          color={isFavorites ? "#ff0033" : "#014ecb"}
        />
      </StylesFavoritesbutton>

      {quantityProducts === 0 ? (
        <StylesAddToCartButton onClick={() => handleQuantityProducts()}>
          Agregar al carrito
        </StylesAddToCartButton>
      ) : (
        <>
          <StylesinBagAlert>Ya en el Carrito</StylesinBagAlert>
          <StylesButtonsContainer>
            <StylesTrashButton onClick={() => handleQuantityProducts(-1)}>
              {quantityProducts === 1 ? (
                <FontAwesomeIcon icon={faTrash} />
              ) : (
                "-"
              )}
            </StylesTrashButton>
            <StylesQuantityProducts>{quantityProducts}</StylesQuantityProducts>
            <StylesPlusButton onClick={() => handleQuantityProducts()}>
              +
            </StylesPlusButton>
          </StylesButtonsContainer>
        </>
      )}
    </StyledContainerProduct>
  );
};
