import { StyledButton } from "./Button.styled";

const Button = ({ children, color, background }) => {
  return (
    <StyledButton color={color} background={background}>
      {children}
    </StyledButton>
  );
};

export default Button;
