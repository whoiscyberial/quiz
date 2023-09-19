import React, { ReactNode } from "react";

type ChoiceProps = {
  children: ReactNode;
  setChoices: React.Dispatch<React.SetStateAction<string>>;
  answer: string;
  choices: string;
};
export const ChoiceButton = ({ children, setChoices, answer, choices }: ChoiceProps) => {
  return (
    <button
      onClick={() => {
        console.log("clicked: ", answer);
        setChoices(choices + answer);
      }}
      className="flex justify-center items-center text-center bg-cyan-400 text-black w-full rounded-lg my-4 py-3 text-base hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-950 transition-all"
    >
      {children}
    </button>
  );
};
