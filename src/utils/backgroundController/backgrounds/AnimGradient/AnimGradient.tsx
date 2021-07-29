import React from 'react'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    background-position: 0 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0 50%
  }
`

interface AnimGradientStyleProps {
    colors: string[]
    time?: string
}

const AnimGradientStyle = styled.div<AnimGradientStyleProps>`
  animation: ${ animation } ${ ({ time }) => time }s ease infinite;
  
  background-size: ${({ colors }) =>
    `${colors.length * 200}% ${colors.length * 200}%`} !important;

  background: linear-gradient(270deg, ${({ colors }) => colors.join(', ')});
`

export interface AnimGradientProps {
    children: React.ReactNode
    colors: string[]
    time?: string
}

export const AnimGradient: React.FC<AnimGradientProps> = (
    {
        children,
        colors, time
    }
) => {
    return <AnimGradientStyle
        colors={ colors }
        time={ time }
    >
        { children }
    </AnimGradientStyle>
}
