import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Slides } from '../src'

const exampleSlides = [
    {
        type: 'simple',
        content: 'Простая слайдовая страничка',
        title: 'Слайдик'
    }
]

const App: React.FC = () => {
    return (
        <Slides
            slides = { exampleSlides }
        />
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
