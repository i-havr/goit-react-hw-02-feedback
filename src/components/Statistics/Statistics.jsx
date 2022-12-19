import { StatisticsStyled } from './Statistics.styled';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good = {},
  neutral = {},
  bad = {},
  total = {},
  positivePercentage = {},
}) => {
  return (
    <StatisticsStyled>
      {total > 0 ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </StatisticsStyled>
  );
};
