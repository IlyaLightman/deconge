import React, { useState } from 'react'
import { MessengerScreen, MessengerMenu, MessengerWorkspace } from './Messenger.style'
// import { Redirect } from 'react-router-dom'

import { Message, MessageProps } from '../../components/Message/Message'
import { Button, ButtonProps } from '../../components/Button/Button'

import { Background, BackgroundProps }
    from '../../utils/backgroundController/Background/Background'

type msg = {
    text: string, responses: number[], collect: number
}
type response = {
    text: string, msg: number
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
    const [collectedItems, setCollectedItems] = useState([] as number[])
    const [dialogue, setDialogue] = useState([0] as number[])

    const dialogueRender = () => {
        return dialogue.map((remark, ind) => {

        })
    }

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
                Collected { collectedItems.length } / 15

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
                    isResponse={false}
                    onClick={ () => {
                        setCollectedItems([...collectedItems, 0])
                    } }
                />
                <Message
                    text="Hello, hello!!!!!!"
                    isResponse={true}
                    onClick={ () => {
                        setCollectedItems([...collectedItems, 0])
                    } }
                />
            </MessengerWorkspace>
        </MessengerScreen>
    </Background>
}
