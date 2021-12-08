import styled, { css } from 'styled-components'
import { fadein } from '../../SlidesAnimations'

interface SimpleSlideStyleProps {
    animation?: string,
    effect?: string
}

export const SimpleSlideStyle = styled.div<SimpleSlideStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  cursor: default;

  animation: ${ ({ animation }) =>
          animation === 'none' ? null :
                  animation === 'fadein' ? css`${ fadein } 0.6s ease-out` : null };
`

interface TextProps {
    size?: string
    color?: string,
    highlight?: string
}

export const TitleStyle = styled.h1<TextProps>`
  font-size: ${ ({ size }) =>
          size === 'large' ? '52px' :
                  size === 'medium' ? '42px' :
                          size === 'small' ? '36px' : '42px'
  };
  color: ${ ({ color }) => color || 'black' };
  margin-bottom: 10px;
  padding: 10px;
  background: ${ ({ highlight }) => highlight || null };
`

export const TextStyle = styled.p<TextProps>`
  font-size: ${ ({ size }) =>
          size === 'large' ? '36px' :
                  size === 'medium' ? '28px' :
                          size === 'small' ? '20px' : '28px'
  };
  color: ${ ({ color }) => color || 'black' };
  margin-top: 0;
  padding: 5px;
  background: ${ ({ highlight }) => highlight || null };
`
