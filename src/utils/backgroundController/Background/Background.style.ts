import styled from 'styled-components'

interface BackgroundStyleProps {
    color?: string
}

export const BackgroundStyle = styled.div<BackgroundStyleProps>`
  height: 100%;
  width: 100%;
  background: ${({ color }) => color || 'white' };
`
