import React from 'react'
import { ButtonStyle } from './Button.style'

export interface ButtonProps {
    text: string
    onClick: () => void
    color?: string
    background?: string
    hover?: string
    style?: React.CSSProperties
}

export const Button: React.FC<ButtonProps> = (
    {
        text, onClick,
        style
    }
) => {
    return <ButtonStyle
        onClick={ onClick }
        style = { style }
    >
        { text }
    </ButtonStyle>
}
