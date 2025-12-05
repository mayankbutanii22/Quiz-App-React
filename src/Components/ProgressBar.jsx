import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrent } from '../Redux/quizSlice';
import styles from './ProgressBar.module.css';


const ProgressBar = ()=>{
const {questions, current, answers} = useSelector(s => s.quiz);
const dispatch = useDispatch();
const percent = Math.round(((current+1)/questions.length)*100);


return (
<div>
<div className={styles.wrap} onClick={(e)=>{  e.preventDefault();}}>
<div className={styles.bar} style={{width: percent + '%'}} />
</div>


<div className={styles.grid}>
{questions.map((q, idx)=>{
const answered = answers[idx] !== null;
return (
<button key={q.id} className={`${styles.pill} ${answered?styles.answered:''} ${current===idx?styles.active:''}`} onClick={()=>dispatch(setCurrent(idx))}>{idx+1}</button>
);
})}
</div>
</div>
);
}

export default ProgressBar;