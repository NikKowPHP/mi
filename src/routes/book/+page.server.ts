import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

const PASSWORD = 'privetEmma';

export const actions: Actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();
        const password = data.get('password');

        if (password === PASSWORD) {
            cookies.set('book_access', PASSWORD, {
                path: '/book',
                httpOnly: true,
                sameSite: 'strict',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 30, // 30 days
            });
            throw redirect(303, '/book');
        }

        return fail(401, { error: 'Invalid password. Please try again.' });
    }
};
      