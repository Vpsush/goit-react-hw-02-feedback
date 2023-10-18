// import { Component } from 'react';
// // import { Statistics } from '../Statistics/Statistics';
// import { Statistics } from '../Statistics/Statistics';
// import css from './Counter.module.css';

// class Counter extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClickGood = e => {
//     this.setState(prevState => {
//       return { good: prevState.good + 1 };
//     });
//   };

//   handleClickNeutral = e => {
//     this.setState(prevState => {
//       return { neutral: prevState.neutral + 1 };
//     });
//   };

//   handleClickBad = e => {
//     this.setState(prevState => {
//       return { bad: prevState.bad + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, bad, neutral } = this.state;
//     return good + bad + neutral;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return Math.round((good / total) * 100) || 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const totalPercentage = this.countPositiveFeedbackPercentage();
//     return (
//       <div>
//         <h2>Please leave feedback</h2>
//         <div className={css.bntContainer}>
//           <button onClick={this.handleClickGood}>Good</button>
//           <button onClick={this.handleClickNeutral}>Neutral</button>
//           <button onClick={this.handleClickBad}>Bad</button>
//         </div>
//         <h3>Statistics</h3>
//         <div>
//           <span className={css.numbersName}>
//             Good: <p className={css.numbers}> {this.state.good}</p>
//           </span>
//           <span className={css.numbersName}>
//             Neutral: <p className={css.numbers}> {this.state.neutral}</p>
//           </span>
//           <span className={css.numbersName}>
//             Bad: <p className={css.numbers}> {this.state.bad}</p>
//           </span>
//           <span className={css.numbersName}>
//             Total:
//             <p className={css.numbers}> {this.countTotalFeedback()}</p>
//           </span>
//           <span className={css.numbersName}>
//             Positive Feedback:
//             <p className={css.numbers}>
//               {this.countPositiveFeedbackPercentage()} %
//             </p>
//           </span>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;

//   {
//           // <Statistics
//           //   good={this.good}
//           //   neutral={this.neutral}
//           //   bad={this.bad}
//           //   total={this.totalFeedback}
//           //   positivePercentage={this.totalPercentage}
//           // />
//           <div className={css.stat}>
//             <h3>Statistics</h3>
//             <div>
//               <span className={css.numbersName}>
//                 Good: <p className={css.numbers}>{this.state.good}</p>
//               </span>
//               <span className={css.numbersName}>
//                 Neutral: <p className={css.numbers}>{this.state.neutral}</p>
//               </span>
//               <span className={css.numbersName}>
//                 Bad: <p className={css.numbers}>{this.state.bad}</p>
//               </span>
//               <span className={css.numbersName}>
//                 Total:
//                 <p className={css.numbers}>{this.countTotalFeedback()}</p>
//               </span>
//               <span className={css.numbersName}>
//                 Positive Feedback:
//                 <p className={css.numbers}>
//                   {this.countPositiveFeedbackPercentage()} %
//                 </p>
//               </span>
//             </div>
//           </div>
//         }

// class Counter extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   //   handleClickGood = e => {
//   //     this.setState(prevState => {
//   //       return { good: prevState.good + 1 };
//   //     });
//   //   };

//   //   handleClickNeutral = e => {
//   //     this.setState(prevState => {
//   //       return { neutral: prevState.neutral + 1 };
//   //     });
//   //   };

//   //   handleClickBad = e => {
//   //     this.setState(prevState => {
//   //       return { bad: prevState.bad + 1 };
//   //     });
//   //   };

//   //   countTotalFeedback = () => {
//   //     const { good, bad, neutral } = this.state;
//   //     return good + bad + neutral;
//   //   };
//   //   countPositiveFeedbackPercentage = () => {
//   //     const { good } = this.state;
//   //     const total = this.countTotalFeedback();
//   //     return Math.round((good / total) * 100) || 0;
//   //   };

//   render() {
//     return (
//       <div>
//         <h2>Please leave feedback</h2>
//         <div className={css.bntContainer}>
//           <button onClick={this.handleClickGood}>Good</button>
//           <button onClick={this.handleClickNeutral}>Neutral</button>
//           <button onClick={this.handleClickBad}>Bad</button>
//         </div>
//         {
//           // <Statistics
//           //   good={this.good}
//           //   neutral={this.neutral}
//           //   bad={this.bad}
//           //   total={this.totalFeedback}
//           //   positivePercentage={this.totalPercentage}
//           // />
//           <div className={css.stat}>
//             <h3>Statistics</h3>
//             <div>
//               <span className={css.numbersName}>
//                 Good: <p className={css.numbers}>{this.state.good}</p>
//               </span>
//               <span className={css.numbersName}>
//                 Neutral: <p className={css.numbers}>{this.state.neutral}</p>
//               </span>
//               <span className={css.numbersName}>
//                 Bad: <p className={css.numbers}>{this.state.bad}</p>
//               </span>
//               <span className={css.numbersName}>
//                 Total:
//                 <p className={css.numbers}>{this.countTotalFeedback()}</p>
//               </span>
//               <span className={css.numbersName}>
//                 Positive Feedback:
//                 <p className={css.numbers}>
//                   {this.countPositiveFeedbackPercentage()} %
//                 </p>
//               </span>
//             </div>
//           </div>
//         }
//       </div>
//     );
//   }
// }

// export default Counter;

// // const handleOption = option => {
// //   this.setState(prevState => {
// //     return {
// //       [option]: prevState[option] + 1,
// //     };
// //   });
// // };

// // let totalGood = 0;
// // let totalNeutral = 0;
// // let totalBad = 0;

// // const Counter = () => {
// //   function handleClick() {
// //     totalGood += 1;
// //   }
// //   return (
// //     <div>
// //       <h2>Please leave feedback</h2>
// //       <div className={css.bntContainer}>
// //         <button type="button" onClick={handleClick}>
// //           Good
// //         </button>
// //         <button type="button" onClick={handleClick}>
// //           Neutral
// //         </button>
// //         <button type="button" onClick={handleClick}>
// //           Bad
// //         </button>
// //       </div>
// //       <h3>Statistics</h3>
// //       <div>
// //         <span>
// //           Good: <p>{totalCood}</p>
// //         </span>
// //         <span>
// //           Neutral: <p>{totalNeutral}</p>
// //         </span>
// //         <span>
// //           Bad: <p>{totalBad}</p>
// //         </span>
// //       </div>
// //     </div>
// //   );
// // };
