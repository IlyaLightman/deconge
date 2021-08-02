import React from 'react'
import { MessageStyle } from './Message.style'

export interface MessageProps {
    text: string
    isResponse: boolean
    onClick?: () => void
    color?: string
    background?: string
    hover?: string
    animation?: string
}

export const Message: React.FC<MessageProps> = (
    {
        text, onClick, isResponse,
        color, background, hover,
        animation
    }
) => {

    return <MessageStyle
        onClick={ onClick }
        isResponse={ isResponse }
        color={ color }
        background={ background }
        hover={ hover }
        animation={ animation }
    >
        { text }
    </MessageStyle>
}
