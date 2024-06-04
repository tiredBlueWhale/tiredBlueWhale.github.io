import { StayInsideDetail, ColorAndShapeDetail, Tobi2GoDetail, ErrorPage, ColorAndShape, StayInside, Tobi2Go, FixedGearCalc } from "./pages";

/**
 * @param {string} slug
 */
export function getComponent(slug) {
    switch (slug) {
        case 'stay-inside':
            return StayInside;
        case 'color-and-shape':
            return ColorAndShape;
        case 'tobi-2-go':
            return Tobi2Go;
        case 'fixed-gear-calc':
            return FixedGearCalc;
        default:
            return ErrorPage;
    };
}

/**
 * @param {string} slug
 */
export function getDetailComponent(slug) {

    switch (slug) {
        case 'stay-inside':
            return StayInsideDetail;
        case 'color-and-shape':
            return ColorAndShapeDetail;
        case 'tobi-2-go':
            return Tobi2GoDetail;
        case 'fixed-gear-calc':
            return ErrorPage;
        default:
            return ErrorPage;
    };
}