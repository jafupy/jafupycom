import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (!event.url.pathname.startsWith('/admin')) {
		const cookie = event.cookies.get('auth');
		if (cookie) {
			event.locals.session = cookie;
		} else return resolve(event);
	}
	// console.log(Object.keys(event).sort());
	return resolve(event);
};
