import React from 'react'
import { MessageStyle } from './Message.style'

export interface MessageProps {
    text: string
    onClick: () => void
    color?: string
    background?: string
    hover?: string
}

export const Message: React.FC<MessageProps> = (
    {
        text, onClick
    }
) => {

    return <MessageStyle
        onClick={ onClick }
    >
        { text }
    </MessageStyle>
}
