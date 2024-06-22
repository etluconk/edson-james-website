import * as React from "react"
import styled from "styled-components"

const AudioPlayer: React.FC = () => {
  return (
    <AudioPlayerContainer>
      <h3>The audio player is in progress, thanks for your patience!</h3>
    </AudioPlayerContainer>
  )
}

export default AudioPlayer

const AudioPlayerContainer = styled.div`
  width: calc(100% - 60px);
  max-width: 680px;

  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 35px;
  border-top: solid 3px rgb(var(--accent-color));
  background-color: var(--page-color);

  position: fixed;
  bottom: 0px;

  z-index: 100;

  h3 {
    font-style: italic;
  }
`