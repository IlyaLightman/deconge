import styled, { css } from 'styled-components'
import { fadein } from '../../SlidesAnimations'

interface FeedbackSlideStyleProps {
    animation?: string
}

interface TextProps {
    size?: string
    color?: string,
    highlight?: string
}

export const FeedbackSlideStyle = styled.div<FeedbackSlideStyleProps>`
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  animation: ${ ({ animation }) =>
          animation === 'none' ? null :
          animation === 'fadein' ? css`${fadein} 0.6s ease-out` : null };
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
