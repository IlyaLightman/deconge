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
    response?: MessageProps
}

export const Messenger: React.FC<MessengerProps> = (
    {
        background,
        msgs, responses, /*collection,*/
        message, response
    }
) => {
    const [collectedItems, setCollectedItems] = useState([] as number[])
    const [dialogue, setDialogue] = useState([0] as number[])

    const dialogueRender: () => JSX.Element[] = () => {
        return dialogue.map((remark, index) => {
            if (index % 2 === 0) {
                return <Message
                    text={ msgs[remark].text }
                    isResponse={ false }
                    key={ `m${ index }` }
                    color={ message?.color }
                    background={ message?.background }
                    hover={ message?.hover }
                />
            } else {
                return <Message
                    text={ responses[remark].text }
                    isResponse={ true }
                    key={ `r${ index }` }
                    color={ message?.color }
                    background={ message?.background }
                    hover={ message?.hover }
                />
            }
        })
    }

    const responsesRender: () => JSX.Element[] = () => {
        return msgs[dialogue[-1]].responses.map(remark => {
            return <Message
                text={ responses[remark].text }
                isResponse={ true }
                key={ `s${ remark }` }
                color={ response?.color }
                background={ response?.background }
                hover={ response?.hover }
                onClick={ () => {
                    setDialogue([
                        ...dialogue, remark, responses[remark].msg
                    ])
                } }
            />
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
                    isResponse={ false }
                    onClick={ () => {
                        setCollectedItems([...collectedItems, 0])
                    } }
                />
                <Message
                    text="Hello, hello!!!!!!"
                    isResponse={ true }
                    onClick={ () => {
                        setCollectedItems([...collectedItems, 0])
                    } }
                />

                { dialogueRender() }
                { responsesRender() }

            </MessengerWorkspace>
        </MessengerScreen>
    </Background>
}
