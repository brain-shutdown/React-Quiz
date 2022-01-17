import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
	return (
		// TODO: Change prompt form to question form after start button is clicked
		<section className='quiz quiz-small'>
			<form onSubmit={(e) => e.preventDefault()} className='setup-form'>
				<h2>Setup Quiz</h2>
				<div className='form-control'>
					<label htmlFor='amount'>Number of questions</label>
					<input type='number' name='amount' id='amount' className='form-input' min='1' max='50' defaultValue='10' />
				</div>
				<div className='form-control'>
					<label htmlFor='category'>category</label>
					<select name='category' id='category' className='form-input'>
						<option value='sports'>sports</option>
						<option value='history'>history</option>
						<option value='politics'>politics</option>
					</select>
				</div>
				<div className='form-control'>
					<label htmlFor='difficulty'>Select difficulty</label>
					<select name='difficulty' id='difficulty' className='form-input'>
						<option value='easy'>easy</option>
						<option value='medium'>medium</option>
						<option value='hard'>hard</option>
					</select>
				</div>
				<button type='submit' className='submit-btn'>
					Start
				</button>
			</form>
			<p className='correct-answers'>
				{/* TODO: Change correct answers in state form */}
				Correct answers : 0 / 0
			</p>
			<article className='container'>
				<h2>Question xxx?</h2>
				<div className='btn-container'>
					<button className='answer-btn'>xxx</button>
				</div>
			</article>
			<button className='next-question'>Next question</button>
		</section>
	);
};

export default SetupForm;
