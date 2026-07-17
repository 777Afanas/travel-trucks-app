
import styles from './Button.module.css';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary' або 'secondary'
  fullWidth = false,   // якщо true, кнопка розтягнеться на 100%
  as: Component = 'button', // ДОДАНО: для гнучкості (button або Link)
  ...props             // ДОДАНО: збирає to, target, rel тощо
}) => {

  // Збираємо класи в один рядок
  const buttonClassName = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : ''
  ].join(' ').trim();

  return (
    <Component
      type={Component === 'button' ? type : undefined} // type потрібен тільки тегу <button>
      className={buttonClassName}
      onClick={onClick}
      {...props} // Автоматично передасть атрибути для Link
    >
      {children}
    </Component>
  );
}; 

// const Button = ({ 
//   children, 
//   onClick, 
//   type = 'button', 
//   variant = 'primary', // 'primary' або 'secondary'
//   fullWidth = false     // якщо true, кнопка розтягнеться на 100%
// }) => {
  
//   // Збираємо класи в один рядок
//   const buttonClassName = [
//     styles.button,
//     styles[variant],
//     fullWidth ? styles.fullWidth : ''
//   ].join(' ').trim();

//   return (
//     <button 
//       type={type} 
//       className={buttonClassName} 
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

export default Button;