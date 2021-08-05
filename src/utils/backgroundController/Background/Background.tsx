import React from 'react'
import { BackgroundStyle } from './Background.style'
import { VantaPanel, VantaSettings } from '../backgrounds/VantaPanel/VantaPanel'
import { AnimGradient } from '../backgrounds/AnimGradient/AnimGradient'

// import VantaPanel from '../backgrounds/VantaPanel/VantaPanel'

export interface BackgroundProps {
    children?: React.ReactNode
    // simple, vanta, animgradinent
    type: string
    color?: string,
    colors?: string[]
    vanta?: VantaSettings
    time?: string
}

export const Background: React.FC<BackgroundProps> = (
    {
        children,
        color,
        type,
        colors,
        vanta,
        time
    }
) => {
    return <BackgroundStyle color={ color }>
        {
            type === 'simple' ? children :
                type === 'vanta' ?
                    <VantaPanel
                        effect="fog"
                        settings={ vanta as VantaSettings }
                    >
                        { children }
                    </VantaPanel> :
                    <AnimGradient
                        colors={ colors as string[] }
                        time={ time }
                    >
                        { children }
                    </AnimGradient>
        }
    </BackgroundStyle>
}
