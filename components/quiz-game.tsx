import React, { useState } from "react";
import QuizCard from "./quiz-card";

export type QABundleProps = {
  question: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  correctAnser: 1 | 2 | 3 | 4;
};

export default function QuizGame() {
  const questionAnswerBundles: QABundleProps[] = [
    {
      question: "What does the acronym 'HTTP' stand for in web development?",
      answerA: "Hypertext Transfer Protocol",
      answerB: "Hyperlink Text Transmission Protocol",
      answerC: "Hypertext Technical Protocol",
      answerD: "Hypertext Tracking Protocol",
      correctAnser: 1,
    },
    {
      question: "What is the purpose of the 'git clone' command in Git?",
      answerA: "Create a new branch",
      answerB: "Commit changes to the repository",
      answerC: "Download a copy of a repository",
      answerD: "Push changes to a remote repository",
      correctAnser: 3,
    },
    {
      question:
        "Which programming language is commonly used for developing Android applications?",
      answerA: "Java",
      answerB: "Python",
      answerC: "C#",
      answerD: "Ruby",
      correctAnser: 1,
    },
    {
      question: "What is the true and only equality operator in JavaScript™",
      answerA: "=",
      answerB: "==",
      answerC: "===",
      answerD: "====",
      correctAnser: 3,
    },
    {
      question: "What does CSS stand for in web development?",
      answerA: "Creative Styling System",
      answerB: "Cascading Style Sheets",
      answerC: "Computer Scripting Syntax",
      answerD: "Code Styling Standards",
      correctAnser: 2,
    },
    {
      question: "What is the result of the following expression: 5 + 7 * 2?",
      answerA: "24",
      answerB: "19",
      answerC: "22",
      answerD: "42",
      correctAnser: 2,
    },
    {
      question:
        "In object-oriented programming, what is the process of creating an instance of a class called?",
      answerA: "Inheritance",
      answerB: "Polymorphism",
      answerC: "Encapsulation",
      answerD: "Instantiation",
      correctAnser: 4,
    },
    {
      question:
        "Which keyword is used to declare a variable that can hold a value of any data type in Python?",
      answerA: "int",
      answerB: "str",
      answerC: "any",
      answerD: "var",
      correctAnser: 4,
    },
    {
      question: "What is the purpose of the 'break' statement in a loop?",
      answerA: "Skip the current iteration and move to the next one",
      answerB: "End the loop and exit its execution",
      answerC: "Restart the loop from the beginning",
      answerD: "Pause the loop temporarily",
      correctAnser: 2,
    },
    {
      question: "What does API stand for in programming?",
      answerA: "Application Program Interface",
      answerB: "Advanced Programming Interface",
      answerC: "Algorithmic Programming Integration",
      answerD: "Application Protocol Integration",
      correctAnser: 1,
    },
  ];
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

  function confirmAnswer(answerVal: string, correctAnser: number) {
    if (selectedAnswer === 0) {
      alert("Please Select an Answer!");
    } else if (selectedAnswer === correctAnser && gamestate === "ongoing") {
      setScore(alter(score, 5));
      if (alter(currentQuestion) < questionAnswerBundles.length) {
        setCurrentQuestion(alter(currentQuestion));
      } else {
        setGamestate("over");
      }
    } else if (selectedAnswer !== correctAnser && gamestate === "ongoing") {
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
