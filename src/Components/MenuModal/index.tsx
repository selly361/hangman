import { useHangman, useMenuModal } from 'Contexts'
import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function MenuModal() {
	const { modalContent, closeModal } = useMenuModal()
	const { playAgain } = useHangman()
	const navigate = useNavigate()

	let text = ''
	let buttonText = 'Play again!'

	switch (modalContent) {
		case 'lose':
			text = 'You Lose'
			break
		case 'pause':
			text = 'Paused'
			buttonText = 'Continue'
			break
		case 'win':
			text = 'You Win'
			break
	}


	function handleNewCategory(){
		closeModal()
		navigate('/select-category')
	}


	function handleClick(){
		if(modalContent === 'pause'){
			closeModal()
		} else {
			playAgain()
			closeModal()
		}
	}


	return (
		<Fragment>
			<div className='overlay' />
			<div className='menu-modal'>
				<div className='headingXL-container menu-modal__status-container'>
					<p
						className='headingXL shadow menu-modal__status-container__status'
						aria-hidden='true'
					>
						{text}
					</p>
					<p className='headingXL menu-modal__status-container__status'>
						{text}
					</p>
				</div>
				<fieldset className='menu-modal__buttons'>
					<button onClick={handleClick} className='button--primary'>{buttonText}</button>
					<button className='button--primary' onClick={handleNewCategory}>
						NEW CATEGORY
					</button>
					<button className='button--quit-game'>QUIT GAME</button>
				</fieldset>
			</div>
		</Fragment>
	)
}

export default MenuModal
