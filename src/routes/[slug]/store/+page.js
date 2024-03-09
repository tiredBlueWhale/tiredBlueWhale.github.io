import { getComponent } from '../+page';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {

    return {
        slug: params.slug,
        component: getComponent(params.slug)
    }
}