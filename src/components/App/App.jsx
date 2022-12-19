import React from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
// import { Button } from 'components/Button/Button';
import { StyledApp } from './App.styled';

class App extends React.Component {
  //   static defaultProps = { initialValue: 0 };

  //   static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  valueIncrement = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <StyledApp>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.valueIncrement}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={
              Math.round(this.countPositiveFeedbackPercentage()) || 0
            }
          />
        </Section>
      </StyledApp>
    );
  }
}

export default App;
