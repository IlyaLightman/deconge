import styled, { css } from 'styled-components'
import { leftFadein, rightFadein } from '../componentsAnimations'

interface CollectItemProps {
    animation?: string
    background?: string
}

export const CollectItemStyle = styled.div<CollectItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px 40px;
  margin: 25px auto 25px auto;
  border-radius: 10px;

  background: ${ ({ background }) => background || 'white' };

  animation: ${ ({ animation }) =>
          animation === 'none' ? null :
                  animation === 'leftFadein' ? css`${ leftFadein } 0.4s ease-out` :
                          animation === 'rightFadein' ? css`${ rightFadein } 0.4s ease-out` : null
  };

  p {
    font-size: 24px;
  }
  
  img {
    margin: 20px;
  }
`
