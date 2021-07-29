import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min'

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const VantaPanel = (props: { children: React.ReactNode }) => {
    const [vantaEffect, setVantaEffect] = useState(0 as any)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x174193
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
        {props.children}
    </div>
}

export default VantaPanel