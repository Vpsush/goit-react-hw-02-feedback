import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import css from 'index.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    feedbackGiven: false,
  };

  handleButtonClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
      feedbackGiven: true,
    }));
  };

  render() {
    const { good, neutral, bad, feedbackGiven } = this.state;
    const totalFeedback = good + neutral + bad;
    const totalPercentage =
      totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;

    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            handleClick={this.handleButtonClick}
          />
        </Section>
        <Section title="Statistics">
          {feedbackGiven ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={totalFeedback}
              totalPercentage={totalPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
