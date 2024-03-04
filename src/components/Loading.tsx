import ReactLoading from "react-loading";
import { LoadingStyle } from "../assets/LoadingStyle";

export const Loading = () => {
  const { StyedLoading } = LoadingStyle();

  return (
    <StyedLoading>
      <ReactLoading color={"#f5df4d"} type="spin" />
    </StyedLoading>
  );
};
