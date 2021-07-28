import styled from 'styled-components'

interface SimpleSlideStyleProps {

}

export const SimpleSlideStyle = styled.div<SimpleSlideStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

interface TextProps {
    size?: string
    color?: string
}

export const TitleStyle = styled.h1<TextProps>`
  font-size: ${ ({ size }) =>
          size === 'large' ? 72 :
                  size === 'medium' ? 48 :
                          size === 'small' ? 36 : 48
  };
  color: ${ ({ color }) => color && 'white' };
`

export const TextStyle = styled.p<TextProps>`
  font-size: ${ ({ size }) =>
          size === 'large' ? 48 :
                  size === 'medium' ? 36 :
                          size === 'small' ? 24 : 36
  };
  color: ${ ({ color }) => color && 'white' };
`
