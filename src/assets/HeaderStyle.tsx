import styled from "styled-components";

export const HeaderStyle = () => {

  const StyledHeader = styled.header`
  height: 40px;
  background: #f5df4d;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0px 20px;
  margin-bottom: 20px
`;

  return {StyledHeader}
}
