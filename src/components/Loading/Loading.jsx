import { ThreeDots } from "react-loader-spinner";
import "../Loading/Loading.css";

const LoadingComponent = () => {
  return (
    <div className="div-loader">
      <ThreeDots
        visible={true}
        height="70"
        width="70"
        color="#43697f"
        radius=""
        ariaLabel="loading"
        wrapperClass=""
      />
    </div>
  );
};

export default LoadingComponent;
