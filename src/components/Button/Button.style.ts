import styled from 'styled-components'

interface ButtonStyleProps {
    color?: string
    background?: string
    hover?: string
}

export const ButtonStyle = styled.div<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 15px;
  padding: 10px;
  transition: 0.3s;
  background: ${({ background }) => 'white' || background};
  
  p {
    color: ${({ color }) => 'black' || color};
  }
  
  :hover {
    background: ${({ hover }) => 'gray' || hover};
  }
`
