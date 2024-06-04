import { getComponent } from '$lib/page';
import { PATHS } from '$lib/paths';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
// export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {

    // @ts-ignore
    const content = PATHS[params.slug]

    return {
        slug: params.slug,
        component: getComponent(params.slug),
        bgColor: content.bgColor,
        apple: content.apple,
        android: content.android

    }
}