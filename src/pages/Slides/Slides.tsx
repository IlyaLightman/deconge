import React, { useState } from 'react'
import { SlidesScreen } from './Slides.style'
import { Redirect } from 'react-router-dom'

import SimpleSlide from './slideTypes/SimpleSlide/SimpleSlide'
import ImageSlide from './slideTypes/ImageSlide/ImageSlide'

type Slide = {
    // simple, image, feedback, jsx (~free)
    type: string,
    content?: string,
    title?: string,
    animation?: string,
    color?: string,
    size?: string,
    highlight?: string
}

interface SlidesProps {
    slides: Array<Slide>,
    redirectAfter?: string,
    animation?: string
}

export const Slides: React.FC<SlidesProps> = (
    {
        slides,
        redirectAfter,
        animation
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
                    highlight={ slide.highlight }
                    animation={ slide.animation || animation }
                    key={ `s${ Math.floor(Math.random() * 10 ** 5) }` }
                />
            else if (slide.type === 'image')
                return <ImageSlide
                    animation={ slide.animation || animation }
                    link={ slide.content }
                    size={ slide.size }
                />
            else
                return <SimpleSlide
                    text={ slide.content }
                    title={ slide.title }
                    size={ slide.size }
                    color={ slide.color }
                    highlight={ slide.highlight }
                    animation={ animation }
                    key={ `s${ Math.floor(Math.random() * 10 ** 5) }` }
                />
        }), <Redirect to={ `/${ redirectAfter }` }/>]
    }

    return <SlidesScreen
        onClick={ () => {
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
