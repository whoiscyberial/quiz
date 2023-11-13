import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

type ChoiceProps = {
	children: ReactNode
}
export const ChoiceButton = ({ children, onClick }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<motion.button
			whileTap={{ scale: 0.95 }}
			onClick={onClick}
			className='flex justify-center items-center text-center bg-cyan-400 text-black w-full rounded-lg my-4 py-3 text-sm font-medium hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-950 transition-all'
		>
			{children}
		</motion.button>
	)
}
