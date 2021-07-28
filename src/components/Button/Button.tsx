import React from 'react'
import { ButtonStyle } from './Button.style'

export interface ButtonProps {
    text: string
    color?: string
    background?: string
    hover?: string
}

export const Button: React.FC<ButtonProps> = (
    {
        text
    }
) => {
    return <ButtonStyle>
        { text }
    </ButtonStyle>
}
