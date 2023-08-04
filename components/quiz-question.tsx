import React from "react";
import styles from "../styles/quiz-styles.module.css"

type QuestionProps = {
  value: string;
};

export default function Question({ value }: QuestionProps) {
  return (
    <h3
      style={{
        width: 368,
        padding: 8,
        border: "1px solid #C0C0C0",
        borderRadius: 8,
        backgroundColor: "#F0F0F0",
        margin: 2,
      }}
    >
      {value}
    </h3>
  );
}
