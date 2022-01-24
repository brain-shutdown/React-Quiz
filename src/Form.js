import React from 'react';
import { useGlobalContext } from './context';

const Form = () => {
	const { handleSubmit, handleChange, error } = useGlobalContext();

	return (
		<form onSubmit={(e) => handleSubmit(e)} className='setup-form'>
			<h2>Setup Quiz</h2>
			<div className='form-control'>
				<label htmlFor='amount'>Number of questions</label>
				<input onChange={(e) => handleChange(e)} type='number' name='amount' id='amount' className='form-input' min='1' max='50' defaultValue='10' />
			</div>
			<div className='form-control'>
				<label htmlFor='category'>category</label>
				<select onChange={(e) => handleChange(e)} name='category' id='category' className='form-input'>
					<option value='sports'>sports</option>
					<option value='history'>history</option>
					<option value='politics'>politics</option>
				</select>
			</div>
			<div className='form-control'>
				<label htmlFor='difficulty'>Select difficulty</label>
				<select onChange={(e) => handleChange(e)} name='difficulty' id='difficulty' className='form-input'>
					<option value='easy'>easy</option>
					<option value='medium'>medium</option>
					<option value='hard'>hard</option>
				</select>
			</div>
			{error && <p className='error'>{error}</p>}
			<button type='submit' className='submit-btn'>
				Start
			</button>
		</form>
	);
};

export default Form;
