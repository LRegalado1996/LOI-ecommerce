import styled from "styled-components";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { FeaturedCategoryPage } from "./pages/FeaturedCategoryPage";

const App = () => {
  const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `;

  return (
    <StyledSection>
      <Header />
      <FeaturedCategoryPage />
      <Footer />
    </StyledSection>
  );
};

export default App;
