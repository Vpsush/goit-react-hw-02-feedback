import css from './Statistics.module.css';

export const Statistics = () =>
  //   {
  //   good,
  //   neutral,
  //   bad,
  //   countTotalFeedback,
  //   countPositiveFeedbackPercentage,
  // }
  {
    return (
      <div className={css.stat}>
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
      </div>
    );
  };

export default Statistics;
