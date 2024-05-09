import { getBoth } from '../lib';

export default async function TestPage() {
	const data = await getBoth();
	return <div>hi{JSON.stringify(data)}</div>;
}
