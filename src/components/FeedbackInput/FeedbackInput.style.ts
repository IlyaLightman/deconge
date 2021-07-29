import styled from 'styled-components'

interface FeedbackInputStyleProps {
    color?: string
    background?: string
    hover?: string
}

export const FeedbackInputStyle = styled.textarea<FeedbackInputStyleProps>`
  font-family: 'Roboto', sans-serif;
  width: 700px;
  height: 250px;
  margin: 30px;
  padding: 25px;
  border: 0;
  border-radius: 15px;
  transition: 0.3s;
  background: ${({ background }) => background || 'white'};
  color: ${({ color }) => color || 'black'};
  
  :hover {
    background: ${({ hover }) => hover || 'lightgray'};
  }
`
