import { error } from '@sveltejs/kit';
import { APPLICATIONS } from '$lib/data';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
// export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {

    const data = Object.values(APPLICATIONS).find(({ slug }) => slug === params.slug)

    if (!data)
        error(404, 'Not found');

    switch (params.slug) {
        case 'stay-inside':
            return {
                titleClass: "font-bold text-shadow shadow-stay-inside-shadow",
                ...data,
            }
        default:
            return data;
    }
}