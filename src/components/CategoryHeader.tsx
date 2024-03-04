import { CategoryHeaderStyle } from "../assets/CategoryHeaderStyle";
import { useCutText } from "../hooks/useCutText";

interface Props {
  title: string;
  description: string;
}

export const CategoryHeader = ({ title, description }: Props) => {
  const customDescription = useCutText(description, 250);
  const { StyledContainerCategoryHeader, StyledTitle, StyledDescription } =
    CategoryHeaderStyle();

  return (
    <StyledContainerCategoryHeader>
      <StyledTitle>
        Nuevas Ofertas en: <strong>{title}</strong>
      </StyledTitle>
      <StyledDescription>{customDescription}</StyledDescription>
    </StyledContainerCategoryHeader>
  );
};
