import { redirect } from '@sveltejs/kit';

import type { Actions } from './$types';
import { newToast } from '../../toasts.svelte';

export const actions: Actions = {
	async login({ request, cookies, locals, ...rest }) {
		const { password } = request.body;

		const month = new Date().toLocaleString('en-us', { month: 'long' });
		const day = new Date().getDate();
		const year = new Date().getFullYear() % 100;

		let correctPass =
			'$' + month.split('')[0] + day + month.split('')[1] + year + month.split('')[2] + '$';
		let pass = (await request.formData()).get('password');
		console.log(correctPass, pass, correctPass === pass);

		if (correctPass === pass && pass) {
			let encodedPass = pass;
			for (let i = 0; i < 500; i++) {
				encodedString = btoa(encodedString);
			}
			cookies.set('auth', encodedPass, { maxAge: 60 * 60 * 24 });
			locals.session = encodedPass;
			return redirect(307, { pathname: '/admin', searchParams: { login: 'success' } });
		}
	},
};
/*

25 08 2024
24 08 25
24 Aug 24
 A24U2G4
 A{DATE}U{YR1}G{YR2}
 AUG26 25UST
 

*/
