import React from 'react';
import Options from './Options';
import styles from './Question.module.css';


const Question = ({data, index})=>{
return (
<div className={styles.card}>
<div className={styles.qText}><strong>{index+1}.</strong> {data.question}</div>
<Options qIndex={index} options={data.options} />
</div>
);
}
export default Question;