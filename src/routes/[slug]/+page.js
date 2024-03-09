import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';

import StayInside from './StayInside.svelte';
import ColorAndShape from './ColorAndShape.svelte';
import errorPage from '../+error.svelte'
import Tobi2Go from './Tobi2Go.svelte';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
// export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

/**
 * @param {string} slug
 */
export function getComponent(slug) {
    switch (slug) {
        case 'stay-inside':
            return StayInside;
        case 'color-and-shape':
            return ColorAndShape
        case 'tobi-2-go':
            return Tobi2Go
        default:
            return errorPage;
    };
}

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const component = getComponent(params.slug);
    return { component };
}