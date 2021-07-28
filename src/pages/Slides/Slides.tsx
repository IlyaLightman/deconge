import React, { useState } from 'react'
import { SlidesScreen } from './Slides.style'
import { Redirect } from 'react-router-dom'

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
    slides: Array<Slide>,
    redirectAfter?: string
}

export const Slides: React.FC<SlidesProps> = (
    {
        slides, redirectAfter
    }
) => {
    const [page, setPage] = useState(0)

    const slidesGenerator: () => JSX.Element[] = () => {
        return [...slides.map(slide => {
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
        }), <Redirect to={ `/${ redirectAfter }` }/>]
    }

    return <SlidesScreen
        onClick={ () => {
            if (page < slides.length - 1 + (redirectAfter ? 1 : 0)) {
                setPage(page + 1)
            }
        } }
    >
        { slidesGenerator()[page] }
    </SlidesScreen>
}
