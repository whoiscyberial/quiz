import React from "react";
import { ChoiceButton } from "./ChoiceButton";

type QuestionProps = {
  question: string;
  answers: string[];
  setChoices: React.Dispatch<React.SetStateAction<string>>;
  choices: string;
};

export const Question = ({ question, answers, setChoices, choices }: QuestionProps) => {
  return (
    <>
      <h1 className="text-2xl font-medium mb-7 text-slate-200">{question}</h1>
      {choices === "" ? (
        <h2 className="-mt-4 mb-7 text-slate-300">
          Тест, в котором нужно ответить на несколько вопросов, чтобы узнать, какой головной убор сегодня Вам стоит надеть.
        </h2>
      ) : (
        <></>
      )}
      {answers.map((answer: string, i: number) => (
        <ChoiceButton setChoices={setChoices} answer={(i + 1).toString()} choices={choices} key={answer}>
          {answer}
        </ChoiceButton>
      ))}
    </>
  );
};
