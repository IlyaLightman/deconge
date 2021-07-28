import React from 'react'
import { SlidesScreen } from './Slides.style'

type Slide = {
    // simple, image, feedback, jsx (~free)
    type: string,
    content: string,
    animation: string,
    color?: string,
    size?: string
}

interface SlidesProps {
    slides: Array<Slide>
}

export const Slides: React.FC<SlidesProps> = () => {
    return <SlidesScreen

    >
        Slides
    </SlidesScreen>
}
