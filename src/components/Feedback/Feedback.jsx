import css from "./Feedback.module.css"

export default function Feedback({ values, totalFeedback, positiveFeedback }) {
    return (
        <div className={css.feedback}>
          <p>Good: {values.good}</p>
          <p>Neutral: {values.neutral}</p>
          <p>Bad: {values.bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positiveFeedback}%</p>
        </div>
    )
}