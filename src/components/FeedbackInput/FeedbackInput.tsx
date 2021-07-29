import React from 'react'
import { FeedbackInputStyle } from './FeedbackInput.style'

export interface FeedbackInputProps {
    onChange: (event: { target: { value: React.SetStateAction<string>; };}) => void
    placeholder?: string
    color?: string
    background?: string
    hover?: string
}

export const FeedbackInput: React.FC<FeedbackInputProps> = (
    {
        placeholder, onChange,
        color, background, hover
    }
) => {
    return <FeedbackInputStyle
        placeholder={ placeholder }
        color={ color }
        background={ background }
        hover={ hover }
        onChange={ onChange }
    >

    </FeedbackInputStyle>
}
