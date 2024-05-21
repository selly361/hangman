import React from 'react'
import { IInstructionCardProps } from './InstructionCard.types'

function InstructionCard({ index, title, description }: IInstructionCardProps) {


  return (
    <div className='instruction-card' key={title}>
        <h2 className='instruction-card__title'>0{index + 1}</h2>
        <h3 className='instruction-card__sub-title'>{title}</h3>
        <p className='instruction-card__description'>{description}</p>
    </div>
  )
}

export default InstructionCard