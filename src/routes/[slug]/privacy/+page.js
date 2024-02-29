import { error } from '@sveltejs/kit';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
// export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {

    // const component = getComponent(params.slug);
    // if (component !== null) {
    //     return { component };
    // }

    switch (params.slug) {
        case 'stay-inside':
            return {
                title: "Stay Inside",
                headerClass: "text-2xl md:text-4xl lg:text-6xl font-martian",
                titleClass: "font-bold text-shadow shadow-stay-inside-shadow",
                iubenda: "https://www.iubenda.com/privacy-policy/75552625",
            }
        case 'color-and-shape':
            return {
                title: "Color&Shape",
                headerClass: "text-2xl md:text-4xl lg:text-6xl",
                titleClass: "font-audiowide",
                iubenda: "https://www.iubenda.com/privacy-policy/33098832",
            }
        case 'tobi-2-go':
            return {
                title: "Tobi2Go",
                headerClass: "text-2xl md:text-4xl lg:text-6xl",
                titleClass: "text-xl md:text-2xl lg:text-4xl font-press-start-2p",
                iubenda: "https://www.iubenda.com/privacy-policy/62161094",
            }
        default:
            error(404, 'Not found');
    };


}