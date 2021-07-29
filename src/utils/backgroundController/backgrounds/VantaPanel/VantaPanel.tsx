import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min'
// @ts-ignore
import FOG from 'vanta/dist/vanta.fog.min'

export interface VantaSettings {
    minHeight?: number
    minWidth?: number
    highlightColor?: string
    midtoneColor?: string
    lowlightColor?: string
    baseColor?: string
    blurFactor?: string
    speed?: string
}

interface VantaPanelProps {
    children: React.ReactNode
    effect: string
    settings: VantaSettings
}

export const VantaPanel: React.FC<VantaPanelProps> = (
    {
        children,
        effect,
        settings
    }
) => {
    const [vantaEffect, setVantaEffect] = useState(0 as any)
    const myRef = useRef(null)
    useEffect(() => {
        console.log(settings)
        if (!vantaEffect) {
            const options = {
                minHeight: settings.minHeight,
                minWidth: settings.minWidth,
                highlightColor: settings.highlightColor,
                midtoneColor: settings.midtoneColor,
                lowlightColor: settings.lowlightColor,
                baseColor: settings.baseColor,
                blurFactor: settings.blurFactor,
                speed: settings.speed
            }

            if (effect === 'fog')
                setVantaEffect(FOG({
                    el: myRef.current,
                    THREE: THREE,
                    ...options
                }))
            else if (effect === 'net')
                setVantaEffect(FOG({
                    el: myRef.current,
                    THREE: THREE,
                    ...options
                }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])


    return <div ref={myRef} style={{
        width: '100%',
        height: '100%'
    }}>
        { children }
    </div>
}
