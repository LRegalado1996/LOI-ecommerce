import ReactLoading from "react-loading";
import styled from "styled-components";

export const Loading = () => {
  const StyedLoading = styled.div`
    position: absolute;
    width: calc(100% - 40px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 20px;
  `;

  return (
    <StyedLoading>
      <ReactLoading color={"#f5df4d"} type="spin" />
    </StyedLoading>
  );
};
