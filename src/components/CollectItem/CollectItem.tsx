import React from 'react'
import { CollectItemStyle } from './CollectItem.style'

import { Button, ButtonProps } from '../Button/Button'

export interface CollectItemProps {
    onClick: () => void
    title?: string
    text?: string
    img?: string
    animation?: string
    background?: string
    button?: ButtonProps
}

export const CollectItem: React.FC<CollectItemProps> = (
    {
        title, text, img,
        animation,
        background,
        onClick,
        button
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
            text={ button?.text || 'Go next' }
            background={ button?.background || 'white' }
            hover={ button?.hover || 'lightgray' }
            color={ button?.color || 'black' }
            onClick={ onClick }
        />
    </CollectItemStyle>
}
