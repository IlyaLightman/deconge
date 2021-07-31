import React, { useState } from 'react'
import { MessengerScreen, MessengerMenu, MessengerWorkspace } from './Messenger.style'
// import { Redirect } from 'react-router-dom'

import { Message, MessageProps } from '../../components/Message/Message'
import { Button, ButtonProps } from '../../components/Button/Button'

import { Background, BackgroundProps }
    from '../../utils/backgroundController/Background/Background'

type response = {
    text: string, msg: number
}
type msg = {
    text: string, responses: number[], collect: number
}
type collectItem = {
    title: string, text: string, img: string
}

interface MessengerProps {
    responses: response[]
    msgs: msg[]
    collection: collectItem[]
    background: BackgroundProps
    button?: ButtonProps
    message?: MessageProps
}

export const Messenger: React.FC<MessengerProps> = (
    {
        background
    }
) => {
    const [collectedItems, setCollectedItems] = useState(0)

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
                Collected { collectedItems } / 15

                <Button
                    text="Go away"
                    onClick={ () => {
                    } }
                    style={ {
                        width: '100%',
                        padding: '10px 0 10px 0'
                    } }
                />
            </MessengerMenu>
            <MessengerWorkspace>
                hello
                <Message
                    text="Hello, hello"
                    onClick={ () => {
                        setCollectedItems(collectedItems + 1)
                    } }
                />
            </MessengerWorkspace>
        </MessengerScreen>
    </Background>
}
