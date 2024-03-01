import { useEffect, useState } from "react";
import styled from "styled-components";
import { Loading } from "../components/Loading";


export const FeaturedCategoryPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setLoading(true);
  // }, []);

  const StyledFeaturedCategory = styled.section`
    flex: 1;
    padding: 0px 20px;
    position: relative;
  `;
  return (
    <StyledFeaturedCategory>
      {loading && <Loading/>}
    </StyledFeaturedCategory>
  );
};
