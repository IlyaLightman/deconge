import React from 'react'
import { FeedbackSlideStyle } from './FeedbackSlide.style'

import { ButtonProps, Button } from '../../../../components/Button/Button'

interface FeedbackSlideProps {
    text?: string
    placeholder?: string
    animation?: string
    color?: string
    button?: ButtonProps
    onButton: () => void
}

const FeedbackSlide: React.FC<FeedbackSlideProps> = (
    {
        onButton
    }
) => {
    return <FeedbackSlideStyle>
        <Button
            text='Ок'
            onClick={ onButton }
        />
    </FeedbackSlideStyle>
}

export default FeedbackSlide
