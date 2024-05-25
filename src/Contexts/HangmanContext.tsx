import {
	createContext,
	useState,
	ReactNode,
	useContext,
	useEffect
} from 'react'
import * as Types from 'Types'
import data from 'Assets/Data/hangmanData.json'

interface HangmanContextProps {
	hangmanItem: Types.IHangmanItem
	health: number
	guessedLetters: string[]
	handleGuess: (letter: string) => void
	reset: () => void
	playAgain: () => void
	setCategory: (category: Types.TCategory) => void
	category: Types.TCategory
}

const HangmanContext = createContext<HangmanContextProps | undefined>(undefined)

interface HangmanProviderProps {
	children: ReactNode
}

const HangmanProvider = ({ children }: HangmanProviderProps) => {
	const [category, setCategory] = useState<Types.TCategory>('Animals')
	const [categoryData, setCategoryData] = useState<Types.IHangmanItem[]>(data.categories[category])
	const [health, setHealth] = useState(100)
	const [guessedLetters, setGuessedLetters] = useState<string[]>([])
	const [hangmanItem, setHangmanItem] = useState<Types.IHangmanItem>(categoryData[Math.floor(Math.random() * categoryData.length)])

	const handleGuess = (letter: string) => {
		setGuessedLetters(prev => [...prev, letter])

		if (!hangmanItem.name.toLowerCase().includes(letter)) {
			setHealth(prevHealth => prevHealth - 12.5)
		}
	}

	const reset = () => {
		setGuessedLetters([])
		setHealth(100)
	}

	const playAgain = () => {
		setGuessedLetters([])
		setHangmanItem(randomize())
		setHealth(100)
	}

	const randomize = () => categoryData[Math.floor(Math.random() * categoryData.length)]

	useEffect(() => {
		const newCategoryData = data.categories[category]
		setCategoryData(newCategoryData)
		setHangmanItem(newCategoryData[Math.floor(Math.random() * newCategoryData.length)])
		reset()
	}, [category])

	return (
		<HangmanContext.Provider
			value={{
				hangmanItem,
				health,
				guessedLetters,
				handleGuess,
				setCategory,
				category,
				reset,
				playAgain
			}}
		>
			{children}
		</HangmanContext.Provider>
	)
}

const useHangman = () => {
	const context = useContext(HangmanContext)
	if (!context) {
		throw new Error('useHangman must be used within a HangmanProvider')
	}
	return context
}

export { HangmanProvider, useHangman }