import { useHangman } from 'Contexts'
import React from 'react'

function AlphabetButtons() {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')


	const { guessedLetters, handleGuess } = useHangman()

	return (
		<div className='alphabet-buttons'>
			{alphabet.map((letter) => (
				<button
					className='button--letter-button'
					key={letter}
					onClick={() => handleGuess(letter.toLowerCase())}
					disabled={guessedLetters.includes(letter.toLowerCase())}
				>
					{letter}
				</button>
			))}
		</div>
	)
}

export default AlphabetButtons
