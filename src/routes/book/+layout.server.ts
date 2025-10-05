import type { LayoutServerLoad } from './$types';

const PASSWORD = 'privetEmma';

export const load: LayoutServerLoad = ({ cookies }) => {
    const access = cookies.get('book_access');

    if (access === PASSWORD) {
        return { authorized: true };
    }

    return { authorized: false };
};
      