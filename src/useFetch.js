import { useState } from 'react';
import axios from 'axios';

const responses = {
	0: 'Success',
	1: 'No Results',
	2: 'Invalid Parameter',
	3: 'Token Not Found',
	4: 'Empty Token',
};

const useFetch = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState(null);

	function resetData() {
		setError(false);
		setData(null);
		setLoading(false);
	}

	const fetchData = async (url) => {
		setLoading('Loading...');
		setError(false);
		try {
			const response = await axios.get(url);
			if (response.data) {
				if (response.data.response_code > 0) throw new Error(responses[response.data.response_code]);
				setData(response.data);
			}
			setLoading(false);
		} catch (error) {
			setError(error.message);
			setLoading(false);
		}
	};

	return { loading, error, data, fetchData, resetData };
};

export default useFetch;
