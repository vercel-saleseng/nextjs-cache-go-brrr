import { getFetchedData } from '../lib';

export default async function TestPage() {
	const data = await getFetchedData();
	return <div>{JSON.stringify(data)}</div>;
}
