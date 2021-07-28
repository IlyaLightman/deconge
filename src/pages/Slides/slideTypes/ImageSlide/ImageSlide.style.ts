import styled, { css } from 'styled-components'
import { fadein } from '../../SlidesAnimations'

interface ImageSlideStyleProps {
    animation?: string
    size?: string
}

export const ImageSlideStyle = styled.img<ImageSlideStyleProps>`
  width: ${ ({ size }) =>
          size === 'large' ? '70%' :
          size === 'medium' ? '45%' :
          size === 'small' ? '30%' : '45%'
  };

  animation: ${ ({ animation }) =>
          animation === 'none' ? null :
          animation === 'fadein' ? css`${fadein} 0.6s ease-out` : null };
`
