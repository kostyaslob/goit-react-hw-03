import './App.css';
import { useEffect, useState } from 'react';

import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

export default function App() {
  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("key");
      if (savedValues !== null) {
      return JSON.parse(savedValues);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0
  };
})

  useEffect(() => {
    window.localStorage.setItem("key", JSON.stringify(values));
  }, [values]);

  let totalFeedback = values.good + values.neutral + values.bad;
  let positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    setValues(values => ({
      ...values,
      [feedbackType]: values[feedbackType] + 1
    }));
  }

  const resetFeedback = () => {
    setValues({ good: 0, neutral: 0, bad: 0 })
  }

  return (
    <>
      <Description />
      <Options resetFeedback={resetFeedback} updateFeedback={updateFeedback} totalFeedback={totalFeedback}  />
      {totalFeedback > 0
        ? <Feedback values={values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
        : <Notification />
      }
    </>
  );
};