import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from '../styles/Calender.module.css'
import 'react-calendar/dist/Calendar.css';

function MyCalender() {
    const [value, onChange] = useState(new Date());
    return (
    <div className={styles.center}>
        <div className={styles.content}>
            <h1>Calender</h1>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>  
  </div>
  
  )
  }
  
  export default MyCalender