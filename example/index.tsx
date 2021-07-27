import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Slides } from '../src'

const App: React.FC = () => {
    return (
        <Slides />
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
