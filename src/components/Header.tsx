import styled from "styled-components";

export const Header = () => {
  const StyledHeader = styled.header`
    height: 40px;
    background: #EEE;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0px 20px;
    margin-bottom: 20px
  `;
  return (
    <StyledHeader>
      <h1>LOI</h1>
    </StyledHeader>
  );
};
