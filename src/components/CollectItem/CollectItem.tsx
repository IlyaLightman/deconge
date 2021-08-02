import React from 'react'
import { CollectItemStyle } from './CollectItem.style'

export interface CollectItemProps {
    title?: string
    text?: string
    img?: string
    animation?: string
}

export const CollectItem: React.FC<CollectItemProps> = (
    {
        title, text, img,
        animation
    }
) => {
    return <CollectItemStyle
        animation={ animation }
    >
        { title }
        { text }
        { img }
    </CollectItemStyle>
}
