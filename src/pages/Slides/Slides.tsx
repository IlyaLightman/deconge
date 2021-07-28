import React, { useState } from 'react'
import { SlidesScreen } from './Slides.style'
// import { Redirect } from 'react-router-dom'

import SimpleSlide from './slideTypes/SimpleSlide/SimpleSlide'
import { Redirect } from 'react-router-dom'

type Slide = {
    // simple, image, feedback, jsx (~free)
    type: string,
    content?: string,
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

    const slidesGenerator = () => {
        return [...slides.map(slide => {
            if (slide.type === 'simple')
                return <SimpleSlide
                    text={ slide.content }
                    title={ slide.title }
                    size={ slide.size }
                    color={ slide.color }
                    key={ `s${ Math.floor(Math.random() * 10 ** 5) }` }
                />
            else
                return <SimpleSlide
                    text={ slide.content }
                    title={ slide.title }
                    size={ slide.size }
                    color={ slide.color }
                    key={ `s${ Math.floor(Math.random() * 10 ** 5) }` }
                />
        }), <Redirect to={ `/${ redirectAfter }` }/>]
    }

    return <SlidesScreen
        onClick={ () => {
            console.log(slidesGenerator())
            if (page < slides.length - 1 + (redirectAfter ? 1 : 0)) {
                setPage(page + 1)
            }
        } }
    >
        {
            slidesGenerator()[page]
        }
    </SlidesScreen>
}
