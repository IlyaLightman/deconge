import React from 'react'
import { BackgroundStyle } from './Background.style'
// import VantaPanel from '../backgrounds/VantaPanel/VantaPanel'

export interface BackgroundProps {
    children: React.ReactNode
    // simple, vanta, animgradinent
    type: string
    color: string
}

export const Background: React.FC<BackgroundProps> = (
    {
        children,
        color
    }
) => {
    return <BackgroundStyle color={ color }>
        { children }
    </BackgroundStyle>
}
