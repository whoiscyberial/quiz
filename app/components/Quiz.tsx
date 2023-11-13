import React, { useState } from 'react'
import { ChoiceButton } from './ChoiceButton'
import { Question } from './Question'
import { Result } from './Result'

export const Quiz = () => {
	const [choices, setChoices] = useState('')

	console.log('choices:', choices)

	const componentMap: { [key: string]: React.ReactNode } = {
		'': <Question choices={choices} answers={questions.start.answers} question={questions.start.question} setChoices={setChoices} />,
		'1': <Question choices={choices} question={questions.season.question} answers={questions.season.answers} setChoices={setChoices} />,
		'11': <Question choices={choices} question={questions.cold.question} answers={questions.cold.answers} setChoices={setChoices} />,
		'12': <Question choices={choices} question={questions.weather.question} answers={questions.weather.answers} setChoices={setChoices} />,
		'13': <Question choices={choices} question={questions.weather.question} answers={questions.weather.answers} setChoices={setChoices} />,
		'14': <Question choices={choices} question={questions.weather.question} answers={questions.weather.answers} setChoices={setChoices} />,
		'121': <Question choices={choices} question={questions.style.question} answers={questions.style.answers} setChoices={setChoices} />,
		'131': <Question choices={choices} question={questions.style.question} answers={questions.style.answers} setChoices={setChoices} />,
		'141': <Question choices={choices} question={questions.style.question} answers={questions.style.answers} setChoices={setChoices} />,
		'122': <Question choices={choices} question={questions.style.question} answers={questions.style.answers} setChoices={setChoices} />,
		'132': <Question choices={choices} question={questions.style.question} answers={questions.style.answers} setChoices={setChoices} />,
		'142': <Question choices={choices} question={questions.style.question} answers={questions.style.answers} setChoices={setChoices} />,
		'1211': <Question choices={choices} question={questions.hot.question} answers={questions.hot.answers} setChoices={setChoices} />,
		'1311': <Question choices={choices} question={questions.hot.question} answers={questions.hot.answers} setChoices={setChoices} />,
		'1411': <Question choices={choices} question={questions.hot.question} answers={questions.hot.answers} setChoices={setChoices} />,
		'1221': <Question choices={choices} question={questions.hot.question} answers={questions.hot.answers} setChoices={setChoices} />,
		'1321': <Question choices={choices} question={questions.hot.question} answers={questions.hot.answers} setChoices={setChoices} />,
		'1421': <Question choices={choices} question={questions.hot.question} answers={questions.hot.answers} setChoices={setChoices} />,

		'111': <Result result={'Шапка-ушанка'} setChoices={setChoices} />,

		'112': <Result result={'Шапка'} setChoices={setChoices} />,
		'123': <Result result={'Шляпа'} setChoices={setChoices} />,
		'133': <Result result={'Шляпа'} setChoices={setChoices} />,
		'143': <Result result={'Шляпа'} setChoices={setChoices} />,
		'1212': <Result result={'Шляпа'} setChoices={setChoices} />,
		'1312': <Result result={'Шляпа'} setChoices={setChoices} />,
		'1412': <Result result={'Шляпа'} setChoices={setChoices} />,
		'1222': <Result result={'Шляпа'} setChoices={setChoices} />,
		'1322': <Result result={'Шляпа'} setChoices={setChoices} />,
		'1422': <Result result={'Шляпа'} setChoices={setChoices} />,

		'12111': <Result result={'Кепка'} setChoices={setChoices} />,
		'13111': <Result result={'Кепка'} setChoices={setChoices} />,
		'14111': <Result result={'Кепка'} setChoices={setChoices} />,
		'12211': <Result result={'Кепка'} setChoices={setChoices} />,
		'13211': <Result result={'Кепка'} setChoices={setChoices} />,
		'14211': <Result result={'Кепка'} setChoices={setChoices} />,

		'12112': <Result result={'Панама'} setChoices={setChoices} />,
		'13112': <Result result={'Панама'} setChoices={setChoices} />,
		'14112': <Result result={'Панама'} setChoices={setChoices} />,
		'12212': <Result result={'Панама'} setChoices={setChoices} />,
		'13212': <Result result={'Панама'} setChoices={setChoices} />,
		'14212': <Result result={'Панама'} setChoices={setChoices} />,
	}

	const renderComponent = (key: string) => {
		return componentMap.hasOwnProperty(key) ? componentMap[key] : null
	}

	return <>{renderComponent(choices)}</>
}

const questions = {
	start: { question: 'Выбор головного убора', answers: ['Начать'] },
	season: { question: 'Какое сейчас время года?', answers: ['Зима', 'Лето', 'Весна', 'Осень'] },
	cold: { question: 'Насколько сейчас холодно?', answers: ['Очень холодно', 'Терпимо'] },
	weather: { question: 'Какая сейчас погода?', answers: ['Солнечно', 'Пасмурно', 'Дождливо'] },
	style: { question: 'Какой стиль предпочитаете?', answers: ['Современный', 'Оффициальный'] },
	hot: { question: 'Сейчас жарко?', answers: ['Нет', 'Да'] },
}

/*
Старт - ''

[1] Какое сейчас время года?
Зима - 1
Лето - 2
Весна - 3
Осень - 4

Зима -> [11] Насколько сейчас холодно?
Очень холодно - 1
Терпимо - 2

!!! Очень холодно -> [111] Шапка-ушанка
!!! Терпимо -> [112] Шапка

Лето, Весна, Осень -> [12] [13] [14] Какая сейчас погода?
Солнечно - 1
Пасмурно - 2
Дождливо - 3

!!! Дождливо -> [123] [133] [143] Шляпа

Солнечно, Пасмурно -> [121] [131] [141] [122] [132] [142] Какой стиль предпочитаете?
Современный - 1
Оффициальный - 2

Современный -> [1211] [1311] [1411] [1221] [1321] [1421] Сейчас жарко?
Нет - 1
Да - 2

!!! Нет -> [12111] [13111] [14111] [12211] [13211] [14211] Кепка
!!! Да -> [12112] [13112] [14112] [12212] [13212] [14212] Панама

!!! Оффициальный -> [1212] [1312] [1412] [1222] [1322] [1422] Шляпа

*/
