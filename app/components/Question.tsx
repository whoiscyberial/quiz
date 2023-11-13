import React from 'react'
import { ChoiceButton } from './ChoiceButton'

type QuestionProps = {
	question: string
	answers: string[]
	setChoices: React.Dispatch<React.SetStateAction<string>>
	choices: string
	result: [number, number, number, number, number]
	setResult: React.Dispatch<React.SetStateAction<[number, number, number, number, number]>>
	experts: Array<Array<number>>
}

export const Question = ({ question, answers, setChoices, choices, result, setResult, experts }: QuestionProps) => {
	const newResult: [number, number, number, number, number] = [0, 0, 0, 0, 0]
	return (
		<>
			<h1 className='text-2xl font-medium mb-7 text-slate-200'>{question}</h1>
			{choices === '' ? (
				<h2 className='-mt-4 mb-7 text-slate-300'>
					Тест, в котором нужно ответить на несколько вопросов, чтобы узнать, какой головной убор сегодня Вам стоит надеть.
				</h2>
			) : (
				<></>
			)}
			{answers.map((answer: string, i: number) => (
				<ChoiceButton
					onClick={() => {
						setChoices(choices + (i + 1).toString())
						result.forEach((value, idx) => {
							newResult[idx] = value + experts[i][idx]
						})

						setResult(newResult)
					}}
					key={answer}
				>
					{answer}
				</ChoiceButton>
			))}
		</>
	)
}
