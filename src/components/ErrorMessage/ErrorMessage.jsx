import style from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={style.location}>     
      <p className={style.error}>{message}</p>      
    </div>
  );
}

export default ErrorMessage;