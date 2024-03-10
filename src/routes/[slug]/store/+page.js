import { StayInside, ColorAndShape, Tobi2Go } from '$lib/pages';
import errorPage from '../../+error.svelte'

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
            return { component: StayInside, color: "bg-stay-inside" };
        case 'color-and-shape':
            return { component: ColorAndShape, color: "bg-color-and-shape" };
        case 'tobi-2-go':
            return { component: Tobi2Go, color: "bg-lime-700" };
        default:
            return { component: errorPage, color: "" };
    };
}

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        slug: params.slug,
        ...getComponent(params.slug)
    }
}