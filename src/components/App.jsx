// import { Statistics } from '../components/Statistics/Statistics';
// import { Notification } from '../components/Notification/Notification';
// import Counter from '../components/Counter/Counter';
import { Component } from 'react';
import css from 'index.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = e => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handleClickNeutral = e => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleClickBad = e => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  render() {
    // const { good, neutral, bad } = this.state;
    // const totalFeedback = this.countTotalFeedback();
    // const totalPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div className={css.bntContainer}>
          <button onClick={this.handleClickGood}>Good</button>
          <button onClick={this.handleClickNeutral}>Neutral</button>
          <button onClick={this.handleClickBad}>Bad</button>
        </div>
        {/* <Statistics /> */}
        {/* <Statistics
        
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={totalPercentage}
        /> */}
        {/* <h3>Statistics</h3>
        <div>
          <span className={css.numbersName}>
            Good: <p className={css.numbers}> {this.state.good}</p>
          </span>
          <span className={css.numbersName}>
            Neutral: <p className={css.numbers}> {this.state.neutral}</p>
          </span>
          <span className={css.numbersName}>
            Bad: <p className={css.numbers}> {this.state.bad}</p>
          </span>
          <span className={css.numbersName}>
            Total:
            <p className={css.numbers}> {this.countTotalFeedback()}</p>
          </span>
          <span className={css.numbersName}>
            Positive Feedback:
            <p className={css.numbers}>
              {this.countPositiveFeedbackPercentage()} %
            </p>
          </span>
        </div> */}
      </div>
    );
  }
}
export default App;

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

// handleClickGood = e => {
//   this.setState(prevState => {
//     return { good: prevState.good + 1 };
//   });
// };

// render() {
//   const { good, neutral, bad } = this.state;
//   const totalFeedback = this.countTotalFeedback();
//   const totalPercentage = this.countPositiveFeedbackPercentage();
//   return (
//     <div>
//       <h2>Please leave feedback</h2>
//       <div className={css.bntContainer}>
//         <button onClick={this.handleClickGood}>Good</button>
//         <button onClick={this.handleClickNeutral}>Neutral</button>
//         <button onClick={this.handleClickBad}>Bad</button>
//       </div>
//       {totalFeedback !== 0 ? (
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={totalFeedback}
//           positivePercentage={totalPercentage}
//         />
//       ) : (
//         <Notification message="There is no feedback" />
//       )}

// {
/* <div className={css.stat}>
          <h3>Statistics</h3>
          <div>
            <span className={css.numbersName}>
              Good: <p className={css.numbers}>{this.state.good}</p>
            </span>
            <span className={css.numbersName}>
              Neutral: <p className={css.numbers}>{this.state.neutral}</p>
            </span>
            <span className={css.numbersName}>
              Bad: <p className={css.numbers}>{this.state.bad}</p>
            </span>
            <span className={css.numbersName}>
              Total:
              <p className={css.numbers}>{this.countTotalFeedback()}</p>
            </span>
            <span className={css.numbersName}>
              Positive Feedback:
              <p className={css.numbers}>
                {this.countPositiveFeedbackPercentage()} %
              </p>
            </span>
          </div>
        </div> */
// }
// </div>
// );
// };
// }

// export default App;
