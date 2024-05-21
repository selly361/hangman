import { useNavigate } from 'react-router-dom'
import { BackIcon } from 'Assets/Icons'

function BackButton() {
	const navigate = useNavigate()

	return (
		<button className='button--circle' onClick={() => navigate(-1)} aria-label='Go back'>
			<BackIcon />
		</button>
	)
}

export default BackButton
