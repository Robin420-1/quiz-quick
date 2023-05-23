import React from "react";
import styles from "../styles/buttons.module.css";

type AnswerProps = {
  value: String;
  handleClick: Function;
  num: number;
  selected: boolean;
};

export default function Answer({
  value,
  handleClick,
  num,
  selected,
}: AnswerProps) {
  return (
    <button
      className={selected ? styles.checkedAnswerButton : styles.answerButton}
      onClick={() => handleClick(num, value)}
    >
      {value}
    </button>
  );
}
