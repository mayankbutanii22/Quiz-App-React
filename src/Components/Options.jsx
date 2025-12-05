import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOption } from '../Redux/quizSlice';
import styles from './Options.module.css';


const Options = ({qIndex, options})=>{
const dispatch = useDispatch();
const selected = useSelector(s => s.quiz.answers[qIndex]);


return (
<div className={styles.options}>
{options.map((opt, idx)=>{
const active = selected === idx;
return (
<button key={idx} className={`${styles.opt} ${active?styles.active:''}`} onClick={()=>dispatch(selectOption({qIndex, optionIndex: idx}))}>
<span className={styles.letter}>{String.fromCharCode(65+idx)}</span>
<span className={styles.optText}>{opt}</span>
</button>
);
})}
</div>
);
}


export default Options;