import { BackButton, InstructionCard } from 'Components'
import instructionsData from 'Assets/Data/instructionsData.json'

function GuidePage() {
	return (
		<main className='guide-page'>
			<section className='guide-page__top-section'>
				<BackButton />
				<div className='headingXL-container'>
					<p className='headingXL shadow' aria-hidden='true'>How To Play</p>
					<p className='headingXL'>How To Play</p>
				</div>
			</section>

      <section className='guide-page__instructions'>
        {instructionsData.map((instructionData, index) => (
          <InstructionCard {...{...instructionData, index}} />
        ))}
      </section>
		</main>
	)
}

export default GuidePage
