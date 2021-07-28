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
    highlight?: string
}

// Just Slide with some text
const SimpleSlide: React.FC<SimpleSlideProps> = (
    {
        text, title,
        size, // small, medium, large
        color
    }
) => {
    return (
        <SimpleSlideStyle>
            { title ? <TitleStyle
                size={ size }
                color={ color }
            > { title }
            </TitleStyle> : null }
            { text ? <TextStyle
                size={ size }
                color={ color }
            > { text } </TextStyle> : null }
        </SimpleSlideStyle>
    )
}

export default SimpleSlide
