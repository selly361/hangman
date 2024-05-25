import { BackButton } from 'Components'
import hangmanData from 'Assets/Data/hangmanData.json'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useHangman, useMenuModal } from 'Contexts'

function SelectCategory() {
	const categories = Object.keys(hangmanData.categories)

	const { reset } = useHangman()
	const { closeModal } = useMenuModal()

	useEffect(() => {
		document.body.style.overflowY = ''
		closeModal()
		reset()
	}, [])

	return (
		<main className='select-category-page'>
			<section className='select-category-page__top-section'>
				<BackButton />
				<div className='headingXL-container'>
					<p className='headingXL shadow' aria-hidden='true'>
						Pick a Category
					</p>
					<p className='headingXL'>Pick a Category</p>
				</div>
			</section>

			<section className='select-category-page__categories'>
				{categories.map((category) => (
					<Link
						className='button--category'
						key={category}
						to={`/select-category/${category}`}
					>
						{category}
					</Link>
				))}
			</section>
		</main>
	)
}

export default SelectCategory
