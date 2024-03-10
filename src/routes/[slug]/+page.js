import { StayInsideDetail, ColorAndShapeDetail, Tobi2GoDetail } from '$lib/pages';
import errorPage from '../+error.svelte'

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
// export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

/**
 * @param {string} slug
 */
function getComponent(slug) {
    switch (slug) {
        case 'stay-inside':
            return StayInsideDetail;
        case 'color-and-shape':
            return ColorAndShapeDetail;
        case 'tobi-2-go':
            return Tobi2GoDetail;
        default:
            return errorPage;
    };
}

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const component = getComponent(params.slug);
    return { component };
}