import React, { useState } from 'react'
import { ChoiceButton } from './ChoiceButton'
import { Question } from './Question'
import { Result } from './Result'

export const Quiz = () => {
	const [choices, setChoices] = useState('')
	const [result, setResult] = useState<[number, number, number, number, number]>([0, 0, 0, 0, 0])

	console.log('choices:', choices)
	console.log('result: ', result)

	const componentMap: { [key: string]: React.ReactNode } = {
		'': (
			<Question
				choices={choices}
				answers={questions.start.answers}
				question={questions.start.question}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.start}
			/>
		),

		'1': (
			<Question
				choices={choices}
				question={questions.season.question}
				answers={questions.season.answers}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.season}
			/>
		),

		'11': (
			<Question
				choices={choices}
				question={questions.cold.question}
				answers={questions.cold.answers}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.cold}
			/>
		),

		'12': (
			<Question
				choices={choices}
				question={questions.weather.question}
				answers={questions.weather.answers}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.weather}
			/>
		),
		'13': (
			<Question
				choices={choices}
				question={questions.weather.question}
				answers={questions.weather.answers}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.weather}
			/>
		),
		'14': (
			<Question
				choices={choices}
				question={questions.weather.question}
				answers={questions.weather.answers}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.weather}
			/>
		),

		'121': (
			<Question
				choices={choices}
				question={questions.style.question}
				answers={questions.style.answers}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.style}
			/>
		),
		'131': (
			<Question
				choices={choices}
				question={questions.style.question}
				answers={questions.style.answers}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.style}
			/>
		),
		'141': (
			<Question
				choices={choices}
				question={questions.style.question}
				answers={questions.style.answers}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.style}
			/>
		),
		'122': (
			<Question
				choices={choices}
				question={questions.style.question}
				answers={questions.style.answers}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.style}
			/>
		),
		'132': (
			<Question
				choices={choices}
				question={questions.style.question}
				answers={questions.style.answers}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.style}
			/>
		),
		'142': (
			<Question
				choices={choices}
				question={questions.style.question}
				answers={questions.style.answers}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.style}
			/>
		),

		'1211': (
			<Question
				choices={choices}
				question={questions.hot.question}
				answers={questions.hot.answers}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.hot}
			/>
		),
		'1311': (
			<Question
				choices={choices}
				question={questions.hot.question}
				answers={questions.hot.answers}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.hot}
			/>
		),
		'1411': (
			<Question
				choices={choices}
				question={questions.hot.question}
				answers={questions.hot.answers}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.hot}
			/>
		),
		'1221': (
			<Question
				choices={choices}
				question={questions.hot.question}
				answers={questions.hot.answers}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.hot}
			/>
		),
		'1321': (
			<Question
				choices={choices}
				question={questions.hot.question}
				answers={questions.hot.answers}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.hot}
			/>
		),
		'1421': (
			<Question
				choices={choices}
				question={questions.hot.question}
				answers={questions.hot.answers}
				setChoices={setChoices}
				result={result}
				setResult={setResult}
				experts={experts.hot}
			/>
		),
	}

	const renderComponent = (key: string) => {
		return componentMap.hasOwnProperty(key) ? (
			componentMap[key]
		) : (
			<Result
				result={`${findIndexesOfTop3Values(result).map(idx => {
					return ` ${results[idx]}`
				})}`}
				setChoices={setChoices}
				setResult={setResult}
			/>
		)
	}

	return <>{renderComponent(choices)}</>
}

const findIndexesOfTop3Values = (arr: number[]): number[] => {
	const indexedValues = arr.map((value, index) => ({
		value,
		index,
	}))

	indexedValues.sort((a, b) => b.value - a.value)
	const top3Indexes = indexedValues.slice(0, 3).map(({ index }) => index)

	return top3Indexes
}

const results = ['Шапка-ушанка', 'Шапка', 'Кепка', 'Панама', 'Шляпа']

const questions = {
	start: { question: 'Выбор головного убора', answers: ['Начать'] },
	season: { question: 'Какое сейчас время года?', answers: ['Зима', 'Лето', 'Весна', 'Осень'] },
	cold: { question: 'Насколько сейчас холодно?', answers: ['Очень холодно', 'Терпимо'] },
	weather: { question: 'Какая сейчас погода?', answers: ['Солнечно', 'Пасмурно', 'Дождливо'] },
	style: { question: 'Какой стиль предпочитаете?', answers: ['Современный', 'Оффициальный'] },
	hot: { question: 'Сейчас жарко?', answers: ['Нет', 'Да'] },
}

// вопрос: {ответ: оценка}
const experts = {
	start: [[0, 0, 0, 0, 0]],
	season: [
		[5, 4, 2, 2, 2],
		[1, 2, 5, 4, 3],
		[1, 3, 4, 3, 4],
		[1, 3, 4, 3, 4],
	],
	cold: [
		[5, 4, 2, 1, 3],
		[3, 5, 2, 2, 3],
	],
	weather: [
		[1, 2, 5, 4, 3],
		[1, 2, 4, 4, 4],
		[1, 2, 4, 4, 4],
	],
	style: [
		[1, 3, 5, 2, 3],
		[1, 4, 3, 3, 5],
	],
	hot: [
		[1, 3, 3, 3, 5],
		[1, 3, 3, 3, 5],
	],
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
