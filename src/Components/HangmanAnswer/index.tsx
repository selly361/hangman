import { useHangman } from 'Contexts'
import React from 'react'

function HangmanAnswer() {
    const { guessedLetters, hangmanItem } = useHangman()

    const words = hangmanItem?.name.includes(' ') ? hangmanItem.name.split(' ') : [hangmanItem.name]

    return (
        <div className='hangman-answer'>
            {words.map((word, wordIndex) => (
                <div key={wordIndex} className='hangman-answer__word'>
                    {word.split('').map((char, charIndex) => (
                        <span
                            key={charIndex}
                            className={`hangman-answer__letter hangman-answer__letter--show ${guessedLetters.includes(char.toLowerCase()) ? 'hangman-answer__letter--show' : ''}`}
                        >
                            {/* {guessedLetters.includes(char.toLowerCase()) ? char : ''} */}
                            {char}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default HangmanAnswer
