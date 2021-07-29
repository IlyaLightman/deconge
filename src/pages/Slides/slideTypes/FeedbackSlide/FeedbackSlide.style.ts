import styled from 'styled-components'

interface FeedbackSlideStyleProps {

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
