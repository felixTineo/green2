import './button.scss';
import classnames from 'classnames';

const Button = ({ id, color, size, onClick, type, children, title }) => (
  <div className="my_button">
    <button
      id={id}
      title={title}
      color={color}  
      onClick={onClick}
      type={type}
      className={classnames({
        my_button: true,
        md: size === "md",
        lg: size === "lg",
        light: color === "light",
        dark: color ==="dark"
      })}
    >
      {children}
    </button>  
  </div>
);

export default Button;
