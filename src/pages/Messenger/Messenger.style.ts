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
`

export const MessengerMenu = styled.div<MessengerMenuProps>`
  display: flex;
  margin-top: 6%;
  width: 15%;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid black;
`

export const MessengerWorkspace = styled.div<MessengerWorkspaceProps>`
  display: flex;
  margin: 6% 0 100px 5%;
  width: 65%;
  align-items: start;
  flex-direction: column;
  border: 1px solid black;
`
