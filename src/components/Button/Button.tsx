import React from 'react'
import { ButtonStyle, ButtonStyleProps } from './Button.style'

export { ButtonStyleProps }

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
        color, background, hover,
        style
    }
) => {
    return <ButtonStyle
        onClick={ onClick }
        color={ color }
        background={ background }
        hover={ hover }
        style = { style }
    >
        <p> { text } </p>
    </ButtonStyle>
}
