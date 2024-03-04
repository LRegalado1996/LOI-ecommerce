import styled from "styled-components";

export const CategoryHeaderStyle = () => {
  const StyledContainerCategoryHeader = styled.div`
    width: 95%;
    margin: 15px auto;
  `;

  const StyledTitle = styled.h3`
    font-size: 14px;
    color: rgb(0, 72, 128);
    text-align: center;
    font-weight: normal;
    margin-bottom: 5px;
  `;

  const StyledDescription = styled.p`
    font-size: 11px;
    color: rgba(0, 72, 128, 0.8);
    text-align: justify;
    margin-bottom: 15px;
  `;

  return { StyledContainerCategoryHeader, StyledTitle, StyledDescription };
};
