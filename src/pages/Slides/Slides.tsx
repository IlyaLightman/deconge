import React, { useState, useEffect } from 'react'
import { SlidesScreen } from './Slides.style'
import { Redirect } from 'react-router-dom'

import SimpleSlide from './slideTypes/SimpleSlide/SimpleSlide'
import ImageSlide from './slideTypes/ImageSlide/ImageSlide'
import FeedbackSlide from './slideTypes/FeedbackSlide/FeedbackSlide'

type Slide = {
    // simple, image, feedback, jsx (~free)
    type: string,
    content?: string,
    title?: string,
    animation?: string,
    color?: string,
    size?: string,
    highlight?: string,
    placeholder?: string,
    buttonPassing?: boolean
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
    const [btnPage, setBtnPage] = useState([] as number[])

    useEffect(() => {
        slides.forEach((slide, ind) => {
            if (slide.type === 'feedback' || slide.buttonPassing) {
                setBtnPage([...btnPage, ind])
            }
        })
    }, [slides])

    const slidesGenerator = () => {
        return [...slides.map(slide => {
            if (slide.type === 'simple') {
                // setBtnPage([...btnPage, Number(slide.buttonPassing) || 0])
                return <SimpleSlide
                    text={ slide.content }
                    title={ slide.title }
                    size={ slide.size }
                    color={ slide.color }
                    highlight={ slide.highlight }
                    animation={ slide.animation || animation }
                    key={ `s${ Math.floor(Math.random() * 10 ** 5) }` }
                />
            } else if (slide.type === 'image') {
                // setBtnPage([...btnPage, Number(slide.buttonPassing) || 0])
                return <ImageSlide
                    link={ slide.content }
                    size={ slide.size }
                    animation={ slide.animation || animation }
                    key={ `i${ Math.floor(Math.random() * 10 ** 5) }` }
                />
            } else if (slide.type === 'feedback') {
                return <FeedbackSlide
                    text={ slide.content }
                    placeholder={ slide.placeholder }
                    key={ `f${ Math.floor(Math.random() * 10 ** 5) }` }
                />
            } else {
                throw new Error('Non-existent slide type')
            }
        }), <Redirect to={ `/${ redirectAfter }` }/>]
    }

    return <SlidesScreen
        onClick={ () => {
            if (!btnPage.includes(page) &&
                (page < slides.length - 1 + (redirectAfter ? 1 : 0)))
            {
                setPage(page + 1)
            }
        } }
    >
        {
            slidesGenerator()[page]
        }
    </SlidesScreen>
}
