import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [state, setState] = useState({ data: null });
	useEffect(() => {
		setState((state) => ({ data: state.data }));
		fetch(url)
			.then((x) => x.text())
			.then((y) => {
				setState({ data: y, loading: false });
			});
	}, [url]);
	return state;
};
