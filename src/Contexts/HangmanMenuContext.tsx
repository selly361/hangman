import React, {
	createContext,
	useState,
	ReactNode,
	useContext,
	useEffect
} from 'react'
import { useHangman } from './HangmanContext' // Adjust the import path as necessary

type ModalContent = 'lose' | 'win' | 'pause' | null

interface MenuModalContextProps {
	modalContent: ModalContent
	openModal: (content: ModalContent) => void
	closeModal: () => void
}

const MenuModalContext = createContext<MenuModalContextProps | undefined>(
	undefined
)

interface MenuModalProviderProps {
	children: ReactNode
}

const MenuModalProvider = ({ children }: MenuModalProviderProps) => {
	const [modalContent, setModalContent] = useState<ModalContent>(null)

	const { health, hangmanItem, guessedLetters } = useHangman()

	const openModal = (content: ModalContent) => {
		setModalContent(content)
	}

	const closeModal = () => {
		setModalContent(null)
		document.body.style.overflowY = 'auto'
	}

	useEffect(() => {
		if (health <= 0) {
			openModal('lose')
		} else if (hangmanItem.name.toLowerCase().split('').every((letter) => guessedLetters.includes(letter) || letter === ' ')) {
			setTimeout(() => {
				openModal('win')
			}, 250)
		}
	}, [health, hangmanItem.name, guessedLetters])

	useEffect(() => {
		if (modalContent) {
			window.scroll(0, 0)
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'auto'
		}
	}, [modalContent])

	return (
		<MenuModalContext.Provider value={{ modalContent, openModal, closeModal }}>
			{children}
		</MenuModalContext.Provider>
	)
}

const useMenuModal = () => {
	const context = useContext(MenuModalContext)
	if (!context) {
		throw new Error('useMenuModal must be used within a MenuModalProvider')
	}
	return context
}

export { MenuModalProvider, useMenuModal }
