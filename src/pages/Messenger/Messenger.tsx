import React from 'react'
import { MessengerScreen, MessengerMenu, MessengerWorkspace } from './Messenger.style'
// import { Redirect } from 'react-router-dom'

import { Button, ButtonProps } from '../../components/Button/Button'

import { Background, BackgroundProps }
    from '../../utils/backgroundController/Background/Background'

interface MessengerProps {
    background: BackgroundProps
    button?: ButtonProps

}

export const Messenger: React.FC<MessengerProps> = (
    {
        background
    }
) => {
    return <Background
        type={ background.type || 'simple' }
        color={ background.color || 'lightblue' }
        vanta={ background.vanta }
        colors={ background.colors }
        time={ background.time }
    >
        <MessengerScreen

        >
            <MessengerMenu>
                Collected 0 / 15
                <Button
                    text='Go away'
                    onClick={() => {}}
                    style={{
                        width: '100%',
                        padding: '10px 0 10px 0'
                    }}
                />
            </MessengerMenu>
            <MessengerWorkspace>
                hello
            </MessengerWorkspace>
        </MessengerScreen>
    </Background>
}
