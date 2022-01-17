import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';
function App() {
	const { loading } = useGlobalContext();

	if (loading) return <Loading />;

	return (
		<main>
			{/* TODO: Show modal only after all questions have been presented */}
			<Modal />
			<SetupForm />
		</main>
	);
}

export default App;
