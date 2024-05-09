import { revalidatePath, revalidateTag } from 'next/cache';

export const GET = () => {
	revalidateTag('fetched');
	return new Response('ok');
};
