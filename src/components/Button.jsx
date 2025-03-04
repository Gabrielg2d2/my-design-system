import PropTypes from "prop-types";

const Button = ({ children, variant = "primary" }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold transition";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>{children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
