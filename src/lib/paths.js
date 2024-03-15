const applicationSlugs = ['detail', 'privacy', 'store']

export const PATHS = {
    '': {
        title: 'Home',
        fontFamily: "",
        bgColor: "",
        paths: ['']
    },
    'about': {
        title: 'About',
        fontFamily: "",
        bgColor: "",
        paths: ['']
    },
    'stay-inside': {
        title: 'Stay Inside',
        fontFamily: "font-martian",
        bgColor: "bg-stay-inside",
        paths: [...applicationSlugs]
    },
    'color-and-shape': {
        title: 'Color & Shape',
        fontFamily: "font-audiowide",
        bgColor: "bg-color-and-shape",
        paths: [...applicationSlugs]
    },
    'tobi-2-go': {
        title: 'Tobi2Go',
        fontFamily: "font-press-start-2p",
        bgColor: "bg-tobi-2-go",
        paths: [...applicationSlugs]
    },
}