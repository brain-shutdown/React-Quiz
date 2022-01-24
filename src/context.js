import React, { useState, useContext, useEffect } from 'react';
import useFetch from './useFetch';

const url = 'https://opentdb.com/api.php?';
const table = {
	sports: 21,
	history: 23,
	politics: 24,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isSetupVisible, setIsSetupVisible] = useState(true);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [params, setParams] = useState({ amount: 10, category: 'sports', difficulty: 'easy' });
	const { data: questions, loading, error, resetData, fetchData } = useFetch();

	useEffect(() => {
		if (questions && !error) {
			setIsSetupVisible(false);
		}
	}, [questions, error]);

	function resetQuestionnaire() {
		setIsModalVisible(false);
		setIsSetupVisible(true);
		setCurrentQuestion(0);
		setCorrectAnswers(0);
		resetData();
	}

	function handleSubmit(e) {
		fetchData(`${url}amount=${params.amount}&category=${table[params.category]}&difficulty=${params.difficulty}&type=multiple`);
		e.preventDefault();
	}

	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		setParams({ ...params, [name]: value });
	}

	function checkAnswer(e, correctAnswer) {
		if (e.target.innerHTML === correctAnswer) {
			setCorrectAnswers((prevVal) => prevVal + 1);
		}
		nextQuestion();
	}

	function nextQuestion() {
		if (currentQuestion === questions.results.length - 1) {
			return setIsModalVisible(true);
		}
		setCurrentQuestion((prevVal) => prevVal + 1);
	}

	return (
		<AppContext.Provider
			value={{
				isSetupVisible,
				isModalVisible,
				questions,
				loading,
				error,
				currentQuestion,
				correctAnswers,
				checkAnswer,
				nextQuestion,
				handleSubmit,
				handleChange,
				resetQuestionnaire,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
