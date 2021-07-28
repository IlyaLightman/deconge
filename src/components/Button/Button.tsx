import React from 'react'
import { ButtonStyle } from './Button.style'

export interface ButtonProps {
    text: string
    onClick: () => void
    color?: string
    background?: string
    hover?: string
}

export const Button: React.FC<ButtonProps> = (
    {
        text, onClick
    }
) => {
    return <ButtonStyle
        onClick={ onClick }
    >
        { text }
    </ButtonStyle>
}
