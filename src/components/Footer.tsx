import { FooterStyle } from "../assets/FooterStyle";

export const Footer = () => {
  const { StyedFooter } = FooterStyle();

  return (
    <StyedFooter>
      <img
        src="https://d391ci4kxgasl8.cloudfront.net/_img_empresas/loi-la-oferta-irresistible.png"
        alt="Logo de LOI"
      />
    </StyedFooter>
  );
};
