import styled from "styled-components";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { FeaturedCategoryPage } from "./pages/FeaturedCategoryPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

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
