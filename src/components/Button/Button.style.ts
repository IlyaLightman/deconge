import styled from 'styled-components'

export interface ButtonStyleProps {
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
  padding: 10px 15px 10px 15px;
  transition: 0.3s;
  background: ${ ({ background }) => background || 'white' };
  cursor: pointer;
  font-size: 24px;

  p {
    padding: 0;
    margin: 0;
  }
  
  p {
    color: ${ ({ color }) => color || 'black' };
  }
  
  :hover {
    background: ${ ({ hover }) => hover || 'gray' };
  }
`
