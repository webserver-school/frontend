import React from 'react'
import ReactPlayer from 'react-player'
import styles from '../styles/Videoplayer.module.css'

function MyVideoplayer() {
    return (
        <div className={styles.center}>
            <div className={styles.content}>
                <h2>Videoplayer</h2>
                <ReactPlayer url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' playing={true} />
            </div>
      </div>
  )
  }

  export default MyVideoplayer