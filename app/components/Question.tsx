import React from 'react'
import { ChoiceButton } from './ChoiceButton'
import { AnimatePresence, motion } from 'framer-motion'

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
		<AnimatePresence>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={choices}>
				<h1 className='text-2xl font-medium mb-7'>{question}</h1>
				{choices === '' ? (
					<h2 className='-mt-4 mb-8 text-neutral-300'>
						Тест, в котором нужно ответить на несколько вопросов, чтобы узнать, какой головной убор сегодня Вам стоит надеть.
					</h2>
				) : (
					<></>
				)}
				{answers.map((answer: string, i: number) => (
					<ChoiceButton
						key={answer}
						onClick={() => {
							setChoices(choices + (i + 1).toString())
							result.forEach((value, idx) => {
								newResult[idx] = value + experts[i][idx]
							})

							setResult(newResult)
						}}
					>
						{answer}
					</ChoiceButton>
				))}
			</motion.div>
		</AnimatePresence>
	)
}
