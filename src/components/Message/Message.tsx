import React from 'react'
import { MessageStyle, MessageStyleProps } from './Message.style'

export { MessageStyleProps }

export interface MessageProps {
    text: string
    isResponse?: boolean
    onClick?: () => void
    color?: string
    background?: string
    hover?: string
    animation?: string
    hoverAnimGradientColors?: string[]
}

export const Message: React.FC<MessageProps> = (
    {
        text, onClick, isResponse,
        color, background, hover,
        animation, hoverAnimGradientColors
    }
) => {

    return <MessageStyle
        onClick={ onClick }
        isResponse={ isResponse }
        color={ color }
        background={ background }
        hover={ hover }
        animation={ animation }
        hoverAnimGradientColors={ hoverAnimGradientColors }
    >
        <p>{ text }</p>
    </MessageStyle>
}
