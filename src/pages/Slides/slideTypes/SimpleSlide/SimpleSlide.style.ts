import styled from 'styled-components'

interface SimpleSlideStyleProps {

}

export const SimpleSlideStyle = styled.div<SimpleSlideStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  cursor: default;
`

interface TextProps {
    size?: string
    color?: string
}

export const TitleStyle = styled.h1<TextProps>`
  font-size: ${ ({ size }) =>
          size === 'large' ? '52px' :
                  size === 'medium' ? '42px' :
                          size === 'small' ? '36px' : '42px'
  };
  color: ${ ({ color }) => color && 'white' };
  margin-bottom: 10px;
`

export const TextStyle = styled.p<TextProps>`
  font-size: ${ ({ size }) =>
          size === 'large' ? '36px' :
                  size === 'medium' ? '28px' :
                          size === 'small' ? '20px' : '28px'
  };
  color: ${ ({ color }) => color && 'white' };
`
