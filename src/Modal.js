import React from 'react';
import { useGlobalContext } from './context';

const Modal = () => {
	const { isModalVisible, currentQuestion, correctAnswers, resetQuestionnaire } = useGlobalContext();
	let percentage = parseFloat((correctAnswers / (currentQuestion + 1)) * 100).toFixed(2);

	let message = 'Congratulations!';
	if (percentage < 50 && currentQuestion > 0) {
		message = 'You suck!';
	}
	return (
		<div className={`modal-container ${isModalVisible && 'isOpen'}`}>
			<div className='modal-content'>
				<h2>{message}</h2>
				<p>You answered {percentage}% of questions correctly</p>
				<button className='close-btn' onClick={resetQuestionnaire}>
					Play Again
				</button>
			</div>
		</div>
	);
};

export default Modal;
