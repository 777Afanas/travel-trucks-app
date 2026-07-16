import { ClipLoader } from "react-spinners";
import style from "./Loader.module.css";

const Loader = ({ message }) => {
  return (
    <div className={style.location}>     
      <p className={style.loader}>{message}</p>
     <ClipLoader
        color="#4fa94d"
        loading={true}         
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;