import React, { useState, useEffect } from 'react'
import { SlidesScreen } from './Slides.style'
import { Redirect } from 'react-router-dom'

import { Background, BackgroundProps }
    from '../../utils/backgroundController/Background/Background'

import SimpleSlide from './slideTypes/SimpleSlide/SimpleSlide'
import ImageSlide from './slideTypes/ImageSlide/ImageSlide'
import FeedbackSlide from './slideTypes/FeedbackSlide/FeedbackSlide'

import Loader from '../../components/utility/Loader/Loader'

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
    buttonPassing?: boolean,
    onButton?: (text: string) => Promise<(text: string) => void>
}

type defaultSlideProps = {
    animation?: string,
    color?: string,
    size?: string,
    highlight?: string
}

interface SlidesProps {
    slides: Array<Slide>,
    redirectAfter?: string,
    animation?: string,
    defaultSlide?: defaultSlideProps
    customLoader?: React.FC
    background: BackgroundProps
}

export const Slides: React.FC<SlidesProps> = (
    {
        slides,
        redirectAfter,
        animation,
        background,
        defaultSlide,
        customLoader
    }
) => {
    const [page, setPage] = useState(0)
    const [btnPage, setBtnPage] = useState([] as number[])
    const [loading, setLoading] = useState(false)

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
                return <SimpleSlide
                    text={ slide.content }
                    title={ slide.title }
                    size={ slide.size || defaultSlide?.size }
                    color={ slide.color || defaultSlide?.color }
                    highlight={ slide.highlight || defaultSlide?.highlight }
                    animation={ slide.animation || animation || defaultSlide?.animation }
                    key={ `s${ Math.floor(Math.random() * 10 ** 5) }` }
                />
            } else if (slide.type === 'image') {
                return <ImageSlide
                    link={ slide.content }
                    size={ slide.size }
                    animation={ slide.animation || animation || defaultSlide?.animation }
                    key={ `i${ Math.floor(Math.random() * 10 ** 5) }` }
                />
            } else if (slide.type === 'feedback') {
                return <FeedbackSlide
                    text={ slide.content }
                    placeholder={ slide.placeholder }
                    onButton={ (text: string) => {
                        if (slide.onButton) {
                            setLoading(true)
                            slide.onButton(text)
                                .then(() => {
                                    setLoading(false)
                                    setPage(page + 1)
                                })
                                .catch((err) => {
                                    console.log(err)
                                    setLoading(false)
                                })
                        } else setPage(page + 1)
                    } }
                    animation={ animation }
                    key={ `f${ Math.floor(Math.random() * 10 ** 5) }` }
                />
            } else {
                throw new Error('Non-existent slide type')
            }
        }), <Redirect to={ `/${ redirectAfter }` }/>]
    }

    return <Background
        type={ background.type || 'simple' }
        color={ background.color || 'lightblue' }
        vanta={ background.vanta }
        colors={ background.colors }
        time={ background.time }
    >
        <SlidesScreen
            onClick={ () => {
                if (!btnPage.includes(page) &&
                    (page < slides.length - 1 + (redirectAfter ? 1 : 0))) {
                    setPage(page + 1)
                }
            } }
        >
            {
                loading ? customLoader ? customLoader : <Loader /> : slidesGenerator()[page]
            }
        </SlidesScreen>
    </Background>
}
