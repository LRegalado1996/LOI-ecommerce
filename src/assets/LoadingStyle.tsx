import styled from "styled-components";

export const LoadingStyle = () => {
  const StyedLoading = styled.div`
    position: absolute;
    width: calc(100% - 40px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 20px;
  `;
  return { StyedLoading };
};
