import React, { useRef } from 'react'

const BackgroundMusic = () => {
  const audioRef = useRef(null)

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="./audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={() => audioRef.current.play()}>Play Music</button>
    </>
  )
}

export default BackgroundMusic
