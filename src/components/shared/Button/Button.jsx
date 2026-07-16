import styles from './Button.module.css';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary' // 'primary' (Show more) или 'secondary' (Load more)
}) => {
  // Динамически объединяем базовый класс кнопки и класс выбранного варианта
  const buttonClassName = `${styles.button} ${styles[variant] || ''}`.trim();

  return (
    <button 
      type={type} 
      className={buttonClassName} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;