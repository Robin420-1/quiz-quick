import React from "react";
import Question from "./quiz-question";
import Answer from "./quiz-answer";
import { QABundleProps } from "./quiz-game";
import styles from "../styles/buttons.module.css";

type QuizCardProps = {
  qaBundle: QABundleProps;
  selectFunction: Function;
  confirmFunction: Function;
  selectedAnswer: number;
};

export default function QuizCard({
  qaBundle,
  selectFunction,
  confirmFunction,
  selectedAnswer,
}: QuizCardProps) {
  return (
    <div id="quiz-card">
      <Question value={qaBundle.question} />
      <div
        id="answers"
        className={styles.question}
      >
        <Answer
          value={qaBundle.answerA}
          handleClick={selectFunction}
          num={1}
          selected={selectedAnswer === 1}
        />
        <Answer
          value={qaBundle.answerB}
          handleClick={selectFunction}
          num={2}
          selected={selectedAnswer === 2}
        />
        <br/>
        <Answer
          value={qaBundle.answerC}
          handleClick={selectFunction}
          num={3}
          selected={selectedAnswer === 3}
        />
        <Answer
          value={qaBundle.answerD}
          handleClick={selectFunction}
          num={4}
          selected={selectedAnswer === 4}
        />
        <hr style={{ height: 1, border: "none", backgroundColor: "#C0C0C0" }}/>
        <button
          className={styles.confirmButton}
          onClick={() =>
            confirmFunction(
              Object.values(qaBundle)[selectedAnswer],
              qaBundle.correctAnser
            )
          }
        >
          Confirm Answer
        </button>
      </div>
    </div>
  );
}
