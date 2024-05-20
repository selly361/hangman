import { LogoIcon } from 'Assets/Icons'
import iconImage from './play-icon.png'
import { Link } from 'react-router-dom'

function HomePage() {
	return (
		<main className='main-menu'>
			<LogoIcon className='main-menu__logo' />
			<Link className='button main-menu__play-button' to='/select-category'>
					<img
						className='main-menu__play-button__img'
						src={iconImage}
						alt='play icon image'
					/>
			</Link>
			<Link className='button--primary' to='guide'>How To Play</Link>
		</main>
	)
}

export default HomePage
