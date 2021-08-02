import styled, { css } from 'styled-components'

interface MessageStyleProps {
    isResponse: boolean
    color?: string
    background?: string
    hover?: string
}

export const MessageStyle = styled.div<MessageStyleProps>`
  display: flex;
  max-width: 45%;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 15px;
  padding: 10px 25px 10px 25px;
  transition: 0.3s;
  background: ${ ({ background }) => 'white' || background };
  cursor: pointer;
  font-size: 24px;

  ${ ({ isResponse }) => isResponse ?
          css`
            margin-right: 0;
            margin-left: auto;
          ` :
          css`
            margin-left: 0;
            margin-right: auto;
          `
  }
  
  p {
    color: ${ ({ color }) => 'black' || color };
  }

  :hover {
    background: ${ ({ hover }) => hover };
  }
`
