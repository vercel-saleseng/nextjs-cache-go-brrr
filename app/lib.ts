import { cache } from 'react';

export const getBoth = cache(async () => getFetchedData());

export const getData = cache(async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return { date: new Date() };
});

export const getFetchedData = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const data = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
		next: {
			tags: ['fetched'],
		},
	}).then((res) => res.json());
	return { date: new Date(), ...data };
};
