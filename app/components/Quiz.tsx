import React, { useState } from "react";
import { ChoiceButton } from "./ChoiceButton";
import { Question } from "./Question";
import { Result } from "./Result";

export const Quiz = () => {
  const [choices, setChoices] = useState("");

  console.log("choices:", choices);
  return (
    <>
      {choices === "" ? <Question choices={choices} answers={questions.start.answers} question={questions.start.question} setChoices={setChoices} /> : <></>}
      {choices === "1" ? <Question choices={choices} answers={questions.season.answers} question={questions.season.question} setChoices={setChoices} /> : <></>}
      {choices === "11" ? <Question choices={choices} answers={questions.cold.answers} question={questions.cold.question} setChoices={setChoices} /> : <></>}
      {choices === "12" || choices === "13" || choices === "14" ? (
        <Question choices={choices} answers={questions.weather.answers} question={questions.weather.question} setChoices={setChoices} />
      ) : (
        <></>
      )}
      {choices[1] != "1" && (choices.slice(2) == "1" || choices.slice(2) == "2") ? (
        <Question choices={choices} answers={questions.style.answers} question={questions.style.question} setChoices={setChoices} />
      ) : (
        <></>
      )}
      {choices.slice(2) === "11" || choices.slice(2) == "21" ? (
        <Question choices={choices} answers={questions.hot.answers} question={questions.hot.question} setChoices={setChoices} />
      ) : (
        <></>
      )}

      {choices === "111" ? <Result result="Шапка-ушанка" setChoices={setChoices} /> : <></>}
      {choices === "112" ? <Result result="Шапка" setChoices={setChoices} /> : <></>}
      {choices.slice(2) === "111" || choices.slice(2) === "211" ? <Result result="Кепка" setChoices={setChoices} /> : <></>}
      {choices.slice(2) === "112" || choices.slice(2) === "212" ? <Result result="Панама" setChoices={setChoices} /> : <></>}
      {choices.slice(2) === "12" || choices.slice(2) === "22" || choices.slice(2) == "3" ? <Result result="Шляпа" setChoices={setChoices} /> : <></>}
    </>
  );
};

const questions = {
  start: { question: "Выбор головного убора", answers: ["Начать"] },
  season: { question: "Какое сейчас время года?", answers: ["Зима", "Лето", "Весна", "Осень"] },
  cold: { question: "Насколько сейчас холодно?", answers: ["Очень холодно", "Терпимо"] },
  weather: { question: "Какая сейчас погода?", answers: ["Солнечно", "Пасмурно", "Дождливо"] },
  style: { question: "Какой стиль предпочитаете?", answers: ["Современный", "Оффициальный"] },
  hot: { question: "Сейчас жарко?", answers: ["Нет", "Да"] },
};
