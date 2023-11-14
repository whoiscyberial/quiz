import React from 'react'
import { ChoiceButton } from './ChoiceButton'
import Confetti from 'react-confetti'

type ResultProps = {
	result: string
	setChoices: React.Dispatch<React.SetStateAction<string>>
	setResult: React.Dispatch<React.SetStateAction<[number, number, number, number, number]>>
}

export const Result = ({ result, setChoices, setResult }: ResultProps) => {
	return (
		<div className='w-full'>
			<Confetti className='w-full h-full min-h-screen' numberOfPieces={100} />
			<h2 className='text-sm font-medium  text-slate-300'>Ваш результат</h2>
			<h1 className='text-5xl font-bold mt-3 mb-16 text-slate-50'>{result}</h1>
			<ChoiceButton
				onClick={() => {
					setChoices('')
					setResult([0, 0, 0, 0, 0])
				}}
			>
				{' '}
				Пройти тест заново{' '}
			</ChoiceButton>
		</div>
	)
}
