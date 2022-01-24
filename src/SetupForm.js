import React from 'react';
import { useGlobalContext } from './context';
import Questions from './Questions';
import Form from './Form';

const SetupForm = () => {
	const { isSetupVisible, error } = useGlobalContext();

	return (
		<section className={`quiz ${isSetupVisible && 'quiz-small'}`}>
			{isSetupVisible && <Form />}
			{!isSetupVisible && !error && <Questions />}
		</section>
	);
};

export default SetupForm;
