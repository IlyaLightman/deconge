import styled, { css } from 'styled-components'
import { leftFadein, rightFadein } from '../componentsAnimations'

interface MessageStyleProps {
    isResponse: boolean
    color?: string
    background?: string
    hover?: string
    animation?: string
    hoverAnimGradientColors?: string[]
}

export const MessageStyle = styled.div<MessageStyleProps>`
  display: flex;
  max-width: 45%;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 15px;
  padding: 5px 35px 5px 35px;
  transition: 0.7s;
  background: ${ ({ background }) => background || 'white' };
  cursor: pointer;
  margin-bottom: 24px;

  ${ ({ isResponse }) => isResponse ?
          css`
            margin-right: 0;
            margin-left: auto;
          ` :
          css`
            margin-left: 0;
            margin-right: auto;
          `
  }

  ${ ({ animation }) =>
          animation === 'leftFadein' ? css`animation: ${ leftFadein } 0.4s ease-out` :
                  animation === 'rightFadein' ? css`animation: ${ rightFadein } 0.4s ease-out` : null
  };

  ${ ({ hoverAnimGradientColors }) => hoverAnimGradientColors ? css`
    background: linear-gradient(to right, ${ hoverAnimGradientColors.join(', ') });
    background-size: ${ hoverAnimGradientColors.length * 100 }% auto;
  ` : '' }
  p {
    color: ${ ({ color }) => 'black' || color };
    font-size: 20px;
  }

  :hover {
    ${ ({ hoverAnimGradientColors, hover }) => hoverAnimGradientColors ?
            css`
              background-position: right center;` :
            css`
              background: ${ hover };` }
  }
`
