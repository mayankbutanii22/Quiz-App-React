import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { restart } from '../Redux/quizSlice';
import styles from './Result.module.css';


const Result = ()=>{
const { score, questions, answers } = useSelector(s => s.quiz);
const dispatch = useDispatch();


return (
<div className={styles.wrap}>
<div className={styles.card}>
<h2>Your Results</h2>
<p className={styles.big}>{score} / {questions.length}</p>
<p className={styles.hint}>Score: {(score/questions.length*100).toFixed(1)}%</p>


<div className={styles.actions}>
<button className={styles.restart} onClick={()=>dispatch(restart())}>Restart Quiz</button>
</div>


<div className={styles.review}>
<h3>Review Answers</h3>
<ol>
{questions.map((q, idx)=>{
const user = answers[idx];
const correct = q.correct;
return (
<li key={q.id} className={user===correct?styles.ok:styles.bad}>
<div className={styles.q}>{q.question}</div>
<div className={styles.ans}>Your answer: {user===null? 'No Answer' : q.options[user]}</div>
<div className={styles.ans}>Correct: {q.options[correct]}</div>
</li>
);
})}
</ol>
</div>
</div>
</div>
);
}


export default Result;