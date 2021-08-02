import styled, { css } from 'styled-components'
import { leftFadein, rightFadein } from '../componentsAnimations'

interface CollectItemProps {
    animation?: string
}

export const CollectItemStyle = styled.div<CollectItemProps>`
  animation: ${ ({ animation }) =>
          animation === 'none' ? null :
          animation === 'leftFadein' ? css`${ leftFadein } 0.4s ease-out` :
          animation === 'rightFadein' ? css`${ rightFadein } 0.4s ease-out` : null
  };
`
