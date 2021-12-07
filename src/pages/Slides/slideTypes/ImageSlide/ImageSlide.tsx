import React from 'react'
import { ImageSlideStyle } from './ImageSlide.style'

interface ImageSlideProps {
    link?: string,
    size?: string,
    animation?: string,
    effect?: string
}

const ImageSlide: React.FC<ImageSlideProps> = (
    {
        animation,
        link,
        size
    }
) => {
    return <ImageSlideStyle
        animation={ animation }
        src={ link }
        size={ size }
    />
}

export default ImageSlide
