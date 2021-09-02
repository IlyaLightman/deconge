import React from 'react'
import { CollectItemStyle } from './CollectItem.style'

import { Button, ButtonStyleProps } from '../Button/Button'

export interface CollectItemProps {
    onClick?: () => void
    title?: string
    text?: string
    img?: string
    animation?: string
    background?: string
    buttonText?: string
    buttonStyle?: ButtonStyleProps
}

export const CollectItem: React.FC<CollectItemProps> = (
    {
        title, text, img,
        animation,
        background,
        onClick,
        buttonText, buttonStyle
    }
) => {
    return <CollectItemStyle
        animation={ animation }
        background={ background }
    >
        { title ? <h3> { title } </h3> : null }
        { text? <p> { text } </p> : null }
        { img }
        <Button
            text={ buttonText || 'Go next' }
            background={ buttonStyle?.background || 'white' }
            hover={ buttonStyle?.hover || 'lightgray' }
            color={ buttonStyle?.color || 'black' }
            onClick={ onClick || (() => { throw new Error }) }
        />
    </CollectItemStyle>
}
