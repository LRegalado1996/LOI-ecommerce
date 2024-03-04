import { HeaderStyle } from "../assets/HeaderStyle";

export const Header = () => {
  const { StyledHeader } = HeaderStyle();

  return (
    <StyledHeader>
      <h1>LOI</h1>
    </StyledHeader>
  );
};
