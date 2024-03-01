import styled from "styled-components";
import { Producto } from "../interfaces/reqArticlesApi";
import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as filledHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useProductCard } from "../hooks/useProductCard";

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

  const StyledContainerProduct = styled.article`
    width: 30%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    position: relative;
    margin-bottom: 15px;
    height: 450px;
  `;

  const StyledPhoto = styled.img`
    width: 100%;
    height: fit-content;
  `;

  const StyledContainerRate = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 10px auto;
    font-size: 0.8rem;
    height: 35px;
  `;

  const StyledProductTitulo = styled.h2`
    font-size: 0.8rem;
    margin: 5px 0 5px;
    flex: 1;
  `;
  const StyledProductSubtitulo = styled.h3`
    font-size: 0.8rem;
    font-weight: normal;
    overflow: hidden;
  `;

  const StyledProductFabricante = styled.h4`
    font-size: 0.8rem;
    font-weight: normal;
    margin: 5px 0 10px;
  `;

  const StyledPrecio = styled.p`
    font-weight: bold;
    color: rgb(0, 72, 128);
    font-size: 1rem;
    margin-bottom: 15px;
  `;
  const StyledPrecioMercado = styled.p`
    font-size: 0.9rem;
    color: rgb(89, 89, 89);
    text-decoration: line-through;
  `;
  const StyledPorcentajeDescuento = styled.p`
    font-weight: bold;
    font-size: 14px;
    color: rgb(170, 32, 46);
  `;

  const StylesFavoritesbutton = styled.button`
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 25px;
    background: transparent;
    box-shadow: none;
    border: none;
  `;

  const StylesAddToCartButton = styled.button`
    min-height: 40px;
    font-size: 14px;
    cursor: pointer;
    text-align: center;
    margin: 0px;
    color: white;
    background-color: rgb(1, 78, 203);
    border: 1px solid rgb(1, 78, 203);
    border-radius: 50px;
  `;

  const StylesButtonsContainer = styled.div`
    display: flex;
    min-height: 40px;
    font-size: 14px;
    border-radius: 50px;
    overflow: hidden;
  `;

  const StylesTrashButton = styled.button`
    font-size: 10px;
    background-color: rgb(1, 78, 203);
    color: #fff;
    box-shadow: none;
    border: none;
    width: 30px;
  `;

  const StylesQuantityProducts = styled.span`
    font-size: 14px;
    background: transparent;
    box-shadow: none;
    border: none;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const StylesPlusButton = styled.button`
    font-size: 20px;
    background-color: rgb(1, 78, 203);
    color: #fff;
    box-shadow: none;
    border: none;
    width: 40px;
  `;

  const StylesinBagAlert = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 10px;
    background: #7ed56f;
    color: #fff;
    box-shadow: none;
    border: none;
    border-radius: 100%;
    padding: 10px;
    width: 40px;
    text-align: center;
  `;

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
