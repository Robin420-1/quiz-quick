import React, { useState } from "react";
import QuizCard from "./quiz-card";
import { useRouter } from 'next/router';
import { QABundle } from "@prisma/client";

export type QABundleProps = {
  number: number;
  question: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  correctAnswer: 1 | 2 | 3 | 4;
};

type QuizGameProps = {
  QABundles: QABundle[];
}

export default function QuizGame({ QABundles }: QuizGameProps) {
  console.log(QABundles)
  const router = useRouter();
  const questionAnswerBundles: QABundle[] = QABundles;
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gamestate, setGamestate] = useState("ongoing");

  function alter(num: number, by?: number) {
    return num + (by || 1);
  }

  function selectAnswer(answerNum: number, answerVal: string) {
    if (answerNum !== selectedAnswer) {
      setSelectedAnswer(answerNum);
    }
  }

  function confirmAnswer(answerVal: string, correctAnswer: number) {
    if (selectedAnswer === 0) {
      alert("Please Select an Answer!");
    } else if (selectedAnswer === correctAnswer && gamestate === "ongoing") {
      setScore(alter(score, 5));
      if (alter(currentQuestion) < questionAnswerBundles.length) {
        setCurrentQuestion(alter(currentQuestion));
      } else {
        setGamestate("over");
      }
    } else if (selectedAnswer !== correctAnswer && gamestate === "ongoing") {
      setScore(alter(score, -3));
      if (alter(currentQuestion) < questionAnswerBundles.length) {
        setCurrentQuestion(alter(currentQuestion));
      } else {
        setGamestate("over");
      }
    } else {
      alert("The game is over! Do you want to reset?");
    }
    setSelectedAnswer(0);
  }

  function reset() {
    setCurrentQuestion(0);
    setSelectedAnswer(0);
    setScore(0);
    setGamestate("ongoing");
  }

  return (
    <>
      <h1>Quiz:</h1>
      <QuizCard
        qaBundle={questionAnswerBundles[currentQuestion]}
        selectFunction={selectAnswer}
        confirmFunction={confirmAnswer}
        selectedAnswer={selectedAnswer}
      />
      <p>Score: {score}</p>
      <button
        style={{ color: "#FF0000", borderColor: "#F00000" }}
        onClick={reset}
      >
        Reset
      </button>
    </>
  );
}
