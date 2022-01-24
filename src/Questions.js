import React from 'react';
import { useGlobalContext } from './context';

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}

	return array;
}

const Questions = () => {
	const { currentQuestion, correctAnswers, questions, checkAnswer, nextQuestion } = useGlobalContext();
	let { correct_answer, question, incorrect_answers } = questions?.results[currentQuestion];
	let answers = shuffle([...incorrect_answers, correct_answer]);

	return (
		<>
			<p className='correct-answers'>
				Correct answers : {correctAnswers} / {currentQuestion}
			</p>
			<article className='container'>
				<h2 dangerouslySetInnerHTML={{ __html: question }} />
				<div className='btn-container'>
					{answers.map((answer, index) => {
						return <button key={index} onClick={(e) => checkAnswer(e, correct_answer)} className='answer-btn' dangerouslySetInnerHTML={{ __html: answer }} />;
					})}
				</div>
			</article>
			<button className='next-question' onClick={nextQuestion}>
				Next question
			</button>
		</>
	);
};

export default Questions;
