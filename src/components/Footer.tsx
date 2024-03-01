import styled from "styled-components";

export const Footer = () => {
  const StyedFooter = styled.footer`
    background: #f5df4d;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <StyedFooter>
      <img src="https://d391ci4kxgasl8.cloudfront.net/_img_empresas/loi-la-oferta-irresistible.png" />
    </StyedFooter>
  );
};
