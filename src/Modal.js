import React from 'react';
import { useGlobalContext } from './context';

const Modal = () => {
	return (
		<div className='modal-container'>
			<div className='modal-content'>
				{/* TODO: Change message depending on correct answers */}
				{/* TODO: Change percentage of correct answers */}
				<h2>Congratulations!</h2>
				<p>You answered 0% of questions correctly</p>
				<button className='close-btn'>Play Again</button>
			</div>
		</div>
	);
};

export default Modal;
