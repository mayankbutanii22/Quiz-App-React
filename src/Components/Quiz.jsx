import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from './Question';
import Timer from './Timer';
import ProgressBar from './ProgressBar';
import Result from './Result';
import { nextQuestion, prevQuestion, tick, finishQuiz } from '../Redux/quizSlice';
import styles from './Quiz.module.css';


const Quiz = ()=>{
const dispatch = useDispatch();
const { questions, current, finished, timeLeft } = useSelector(s => s.quiz);


// Timer interval

useEffect(()=>{
if(finished) return;
const id = setInterval(()=>{
dispatch(tick());
},1000);
return ()=>clearInterval(id);
},[dispatch, finished]);


useEffect(()=>{
if(timeLeft === 0) dispatch(finishQuiz());
},[timeLeft, dispatch]);


if(finished) return <Result />;


const q = questions[current];


return (
<div className={styles.container}>
<div className={styles.header}>
<h2 className={styles.title}>MCQ-Test</h2>
<Timer />
</div>


<ProgressBar />


<Question key={q.id} data={q} index={current} />


<div className={styles.controls}>
<button className={styles.btn} onClick={()=>dispatch(prevQuestion())} disabled={current===0}>Previous</button>
<div className={styles.centerHint}><span className={styles.hint}>Question {current+1} of {questions.length}</span></div>
<button className={styles.btn} onClick={()=>dispatch(nextQuestion())} disabled={current===questions.length-1}>Next</button>
</div>


<div className={styles.footerActions}>
<button className={styles.finish} onClick={()=>dispatch(finishQuiz())}>Finish Quiz</button>
</div>
</div>
);
}

export default Quiz;