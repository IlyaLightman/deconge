import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Slides } from '../src'

const exampleSlides = [
    {
        type: 'simple',
        title: 'Слайдик',
        content: 'Простая слайдовая страничка',
    },
    {
        type: 'simple',
        title: 'Цветастый слайдик',
        content: 'Вот такой вот он',
        size: 'small',
        color: 'cyan',
        highlight: 'black'
    },
    {
        type: 'simple',
        content: 'Ещё один большой простенький слайдик',
        size: 'large'
    },
    {
        type: 'simple',
        title: 'Только тайтл, небольшой',
        size: 'small',
    }
]

const App: React.FC = () => {
    return (
        <Slides
            slides = { exampleSlides }
            animation = 'fadein'
        />
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
