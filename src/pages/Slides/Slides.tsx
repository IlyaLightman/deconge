import React from 'react'
import { SlidesScreen } from './Slides.style'

import SimpleSlide from './slideTypes/SimpleSlide/SimpleSlide'

type Slide = {
    // simple, image, feedback, jsx (~free)
    type: string,
    content: string,
    title?: string,
    animation?: string,
    color?: string,
    size?: string
}

interface SlidesProps {
    slides: Array<Slide>
}

export const Slides: React.FC<SlidesProps> = (
    {
        slides
    }
) => {
    const slidesGenerator: () => JSX.Element[] = () => {
        return slides.map(slide => {
            switch (slide.type) {
                case 'simple':
                    return <SimpleSlide
                        text={ slide.content }
                        title={ slide.title }
                    />
                default:
                    return <SimpleSlide
                        text={ slide.content }
                        title={ slide.title }
                    />
            }
        })
    }

    return <SlidesScreen

    >
        { slidesGenerator()[0] }
    </SlidesScreen>
}
