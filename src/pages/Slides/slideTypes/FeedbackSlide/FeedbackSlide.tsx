import React, { useState } from 'react'
import { FeedbackSlideStyle } from './FeedbackSlide.style'

import { ButtonProps, Button } from '../../../../components/Button/Button'
import { FeedbackInputProps, FeedbackInput } from '../../../../components/FeedbackInput/FeedbackInput'
import { TextStyle } from '../SimpleSlide/SimpleSlide.style'

interface FeedbackSlideProps {
    text?: string
    placeholder?: string
    animation?: string
    size?: string
    color?: string
    highlight?: string
    button?: ButtonProps
    input?: FeedbackInputProps
    onButton: (input: string) => void
}

const FeedbackSlide: React.FC<FeedbackSlideProps> = (
    {
        onButton, animation,
        text, placeholder,
        size, color, highlight
    }
) => {
    const [input, setInput] = useState('')

    return <FeedbackSlideStyle
        animation={ animation }
    >
        { text ? <TextStyle
            size={ size }
            color={ color }
            highlight={ highlight }
        > { text } </TextStyle> : null }

        <FeedbackInput
            placeholder={ placeholder }
            onChange={(event: { target: { value: React.SetStateAction<string> } }) => setInput(event.target.value)}
        />

        <Button
            text='Ок'
            onClick={ () => onButton(input) }
        />
    </FeedbackSlideStyle>
}

export default FeedbackSlide
