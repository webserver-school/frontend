import { useState } from 'react'
import styles from '../styles/Clock.module.css'

function MyClock() {
    let [date, setDate] = useState(new Date().toLocaleString('en-us') );

    setInterval(() => {
    setDate(new Date().toLocaleString('en-us'));
    }, 1000);
    return (<div className={styles.center}>
        <div className={styles.content}>    
        <h3>Digital Clock:</h3>
        <p> { date } </p>
        </div>
  </div>
  
  )
  }
  
  export default MyClock