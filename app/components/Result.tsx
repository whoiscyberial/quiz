import React from "react";
import { ChoiceButton } from "./ChoiceButton";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

type ResultProps = {
  result: string;
  setChoices: React.Dispatch<React.SetStateAction<string>>;
};

export const Result = ({ result, setChoices }: ResultProps) => {
  const { width, height } = useWindowSize();

  return (
    <div className="w-full">
      <Confetti width={width} height={height} numberOfPieces={100} />
      <h2 className="text-sm font-medium  text-slate-300">Ваш результат</h2>
      <h1 className="text-5xl font-bold mt-3 mb-16 text-slate-50">{result}</h1>
      <ChoiceButton setChoices={setChoices} answer="" choices="">
        {" "}
        Пройти тест заново{" "}
      </ChoiceButton>
    </div>
  );
};
