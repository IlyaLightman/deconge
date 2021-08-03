import styled from 'styled-components'

interface MessengerScreenProps {

}

interface MessengerMenuProps {

}

interface MessengerWorkspaceProps {

}

export const MessengerScreen = styled.div<MessengerScreenProps>`
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  overflow: hidden;
`

export const MessengerMenu = styled.div<MessengerMenuProps>`
  display: flex;
  margin-top: 6%;
  width: 12%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 24px;
`

export const MessengerWorkspace = styled.div<MessengerWorkspaceProps>`
  display: flex;
  margin: 6% 0 100px 8%;
  width: 65%;
  align-items: start;
  flex-direction: column;
`
