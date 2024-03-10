const applicationSlugs = ['privacy', 'store']

export const PATHS = {
    '/': { title: 'Home', fontFamily: "", paths: [] },
    '/about': { title: 'About', fontFamily: "", paths: [] },
    '/stay-inside': { title: 'Stay Inside', fontFamily: "font-martian", paths: [...applicationSlugs] },
    '/color-and-shape': { title: 'Color & Shape', fontFamily: "font-audiowide", paths: [...applicationSlugs] },
    '/tobi-2-go': { title: 'Tobi2Go', fontFamily: "font-press-start-2p", paths: [...applicationSlugs] },
    // '/maze': { title: 'Maze', paths: ['privacy'] },
}