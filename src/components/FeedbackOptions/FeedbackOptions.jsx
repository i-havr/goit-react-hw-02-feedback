import { FeedbackOptionsStyled } from './FeedbackOptions.styled';
import { Button } from 'components/Button/Button';

export const FeedbackOptions = ({ options = {}, onLeaveFeedback = {} }) => {
  return (
    <FeedbackOptionsStyled>
      {options.map(option => {
        return (
          <Button key={option} actionHandler={() => onLeaveFeedback(option)}>
            {option[0].toUpperCase() + option.slice(1)}
          </Button>
        );
      })}
    </FeedbackOptionsStyled>
  );
};
