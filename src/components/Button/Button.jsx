import { StyledButton } from './Button.styled';

export const Button = ({ type = 'button', children, actionHandler }) => {
  return (
    <StyledButton type={type} onClick={actionHandler}>
      {children}
    </StyledButton>
  );
};
