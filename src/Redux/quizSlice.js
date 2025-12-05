import { createSlice } from '@reduxjs/toolkit';
import questions from './questions';


const initialState = {
questions,
current: 0,
answers: Array(questions.length).fill(null), // store selected option index
score: 0,
timeLeft: 600, // default 10 minutes (seconds) for entire quiz
finished: false
};


const quizSlice = createSlice({
name: 'quiz',
initialState,
reducers: {
selectOption(state, action){
const { qIndex, optionIndex } = action.payload;
state.answers[qIndex] = optionIndex;
},
nextQuestion(state){
if(state.current < state.questions.length - 1) state.current += 1;
},
prevQuestion(state){
if(state.current > 0) state.current -= 1;
},
setCurrent(state, action){
state.current = action.payload;
},
tick(state){
if(state.timeLeft > 0) state.timeLeft -= 1;
else state.finished = true;
},
finishQuiz(state){

// compute score

let s = 0;
state.questions.forEach((q, idx)=>{
if(state.answers[idx] === q.correct) s += 1;
});
state.score = s;
state.finished = true;
},
restart(state){
state.current = 0;
state.answers = Array(state.questions.length).fill(null);
state.score = 0;
state.timeLeft = 600;
state.finished = false;
}
}
});


export const { selectOption, nextQuestion, prevQuestion, tick, finishQuiz, restart, setCurrent } = quizSlice.actions;
export default quizSlice.reducer;
