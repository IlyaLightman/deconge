import React from 'react'
import { BackgroundStyle } from './Background.style'
import { VantaPanel, VantaSettings } from '../backgrounds/VantaPanel/VantaPanel'

// import VantaPanel from '../backgrounds/VantaPanel/VantaPanel'

export interface BackgroundProps {
    children: React.ReactNode
    // simple, vanta, animgradinent
    type: string
    color: string,
    vanta?: VantaSettings
}

export const Background: React.FC<BackgroundProps> = (
    {
        children,
        color,
        type,
        vanta
    }
) => {
    return <BackgroundStyle color={ color }>
        {
            type === 'simple' ? children :
                <VantaPanel
                    effect='fog'
                    settings={ vanta as VantaSettings }
                >
                    { children }
                </VantaPanel>
        }
    </BackgroundStyle>
}
