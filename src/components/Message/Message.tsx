import React from 'react'
import { MessageStyle } from './Message.style'

export interface MessageProps {
    text: string
    onClick: () => void
    isResponse: boolean
    color?: string
    background?: string
    hover?: string
}

export const Message: React.FC<MessageProps> = (
    {
        text, onClick, isResponse,
        color, background, hover
    }
) => {

    return <MessageStyle
        onClick={ onClick }
        isResponse={ isResponse }
        color={ color }
        background={ background }
        hover={ hover }
    >
        { text }
    </MessageStyle>
}
