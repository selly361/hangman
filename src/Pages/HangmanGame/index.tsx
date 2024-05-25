import { useParams } from 'react-router-dom'
import * as Types from 'Types'
import { AlphabetButtons, HangmanAnswer, MenuModal } from 'Components'
import { useHangman, useMenuModal } from 'Contexts'
import { HeartIcon, MenuIcon } from 'Assets/Icons'
import { Fragment, useEffect } from 'react'

function HangmanGame() {
	const { category } = useParams()

	const { setCategory, health } = useHangman()
	const { modalContent, openModal } = useMenuModal()
	
	useEffect(() => {
		setCategory(category as Types.TCategory)
	}, [category])

	return (
		<Fragment>
			{modalContent ? <MenuModal /> : null}
			<main className='hangman-game-page'>
				<section className='hangman-game-page__top-section'>
					<div className='hangman-game-page__top-section__menu-button-container'>
						<button className='button--circle' onClick={() => openModal('pause')}>
							<MenuIcon />
						</button>
						<h2 className='hangman-game-page__top-section__menu-button-container__title'>
							{category}
						</h2>
					</div>

					<div className='hangman-game-page__top-section__health-bar-container'>
						<div className='hangman-game-page__top-section__health-bar-container__bar-container'>
							<div
								style={{ width: `${health}%` }}
								className='hangman-game-page__top-section__health-bar-container__bar-container__bar'
							></div>
						</div>

						<HeartIcon />
					</div>
				</section>
				<HangmanAnswer />
				<AlphabetButtons />
			</main>
		</Fragment>
	)
}

export default HangmanGame
