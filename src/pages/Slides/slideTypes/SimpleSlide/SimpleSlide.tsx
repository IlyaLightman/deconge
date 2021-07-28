import React from 'react'
import {
    SimpleSlideStyle,
    TextStyle,
    TitleStyle
} from './SimpleSlide.style'

interface SimpleSlideProps {
    text?: string
    title?: string
    effect?: string
    size?: string
    color?: string
    highlight?: string,
    animation?: string
}

// Just Slide with some text
const SimpleSlide: React.FC<SimpleSlideProps> = (
    {
        text, title,
        size, // small, medium, large
        color, highlight,
        animation // none, fadein
    }
) => {
    return (
        <SimpleSlideStyle animation={ animation }>
            { title ? <TitleStyle
                size={ size }
                color={ color }
                highlight={ highlight }
            > { title }
            </TitleStyle> : null }
            { text ? <TextStyle
                size={ size }
                color={ color }
                highlight={ highlight }
            > { text } </TextStyle> : null }
        </SimpleSlideStyle>
    )
}

export default SimpleSlide
