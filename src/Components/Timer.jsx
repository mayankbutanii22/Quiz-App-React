import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Timer.module.css';


const Timer = ()=>{
const timeLeft = useSelector(s => s.quiz.timeLeft);
const minutes = Math.floor(timeLeft/20).toString().padStart(2,'0');
const seconds = (timeLeft%60).toString().padStart(2,'0');


return (
<div className={styles.timer}>
<div className={styles.label}>Time</div>
<div className={styles.time}>{minutes}:{seconds}</div>
</div>
);
}
export default Timer;