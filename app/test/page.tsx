import { getData } from '../lib';

export default async function TestPage() {
	const data = await getData();
	return <div>{JSON.stringify(data)}</div>;
}
