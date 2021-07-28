import React from 'react'
import { FeedbackSlideStyle } from './FeedbackSlide.style'

import { ButtonProps, Button } from '../../../../components/Button/Button'

interface FeedbackSlideProps {
    text?: string
    placeholder?: string
    animation?: string
    color?: string
    button?: ButtonProps
}

const FeedbackSlide: React.FC<FeedbackSlideProps> = () => {
    return <FeedbackSlideStyle>
        <Button text='Ок' />
    </FeedbackSlideStyle>
}

export default FeedbackSlide
