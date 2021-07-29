import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Slides } from '../src'

const exampleSlides = [
    {
        type: 'simple',
        title: 'Слайдик',
        content: 'Простая слайдовая страничка'
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
        type: 'feedback',
        content: 'Введите чёнить',
        placeholder: 'Вот сюда вот',
        onButton: feedback => console.log('fb', feedback)
    },
    {
        type: 'simple',
        content: 'Ещё один большой простенький слайдик',
        size: 'large'
    },
    {
        type: 'simple',
        title: 'Только тайтл, небольшой',
        size: 'small'
    },
    {
        type: 'image',
        content: 'https://www.webturizm.ru/storage/photos/estonia/estonia-15963.jpg',
        size: 'medium'
    }
]

const App: React.FC = () => {
    return (
        <Slides
            slides={ exampleSlides }
            animation='fadein'
            background={{
                type: 'simple',
                color: 'lightblue'
            }}
        />
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
