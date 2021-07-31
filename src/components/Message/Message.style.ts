import styled from 'styled-components'

interface MessageStyleProps {
    color?: string
    background?: string
    hover?: string
}

export const MessageStyle = styled.div<MessageStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 15px;
  padding: 10px 25px 10px 25px;
  transition: 0.3s;
  background: ${ ({ background }) => 'white' || background };
  cursor: pointer;
  font-size: 24px;

  p {
    color: ${ ({ color }) => 'black' || color };
  }

  :hover {
    background: ${ ({ hover }) => hover };
  }
`
