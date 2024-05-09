import { revalidatePath, revalidateTag } from 'next/cache';

export const GET = () => {
	revalidateTag('test');
	return new Response('ok');
};
