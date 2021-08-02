import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Slides, Messenger } from '../src'

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

// background types: simple, vanta, animgradient

const App: React.FC = () => {
    return (
        <Messenger
            background={ {
                type: 'animgradient',
                colors: ['#6371f6', '#e65bd8', '#3ef5e1'],
                time: 30
            } }
            msgs={ [
                { text: 'Приветик', responses: [0, 1] },
                { text: 'Как дела?', responses: [2] },
                { text: 'Эмм....', responses: [4] },
                { text: 'Что делаешь?', responses: [3] },
                { text: 'Ну ладно', responses: [], collect: 0 }
            ] }
            responses={ [
                { text: 'Ну привет', msg: 1 },
                { text: 'Здарова неудачник', msg: 2 },
                { text: 'Круто!', msg: 3 },
                { text: 'Глажу котика', msg: 4 },
                { text: 'Чё эмкаешь', msg: 4 }
            ] }
            collection={ [
                { text: 'hi i am collection' }
            ] }
        />
        // <Slides
        //     slides={ exampleSlides }
        //     animation='fadein'
        //     background={{
        //         type: 'vanta',
        //         color: 'lightblue',
        //         vanta: vantaSettings,
        //         colors: ['#6371f6', '#e65bd8', '#3ef5e1'],
        //         time: 30
        //     }}
        // />
    )
}

const vantaSettings = {
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0xee7eff,
    midtoneColor: 0xbf97ef,
    lowlightColor: 0x5d5dfe,
    baseColor: 0xe4efff,
    blurFactor: 0.57,
    speed: 2.20
}

ReactDOM.render(<App/>, document.getElementById('root'))
