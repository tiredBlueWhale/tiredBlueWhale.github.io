const applicationSlugs = ['detail', 'privacy', 'store']

export const PATHS = {
    '': {
        title: 'Home',
        slug: '',
        showInHeader: true,
        fontFamily: '',
        bgColor: '',
        paths: ['']
    },
    'about': {
        title: 'About',
        slug: 'about',
        showInHeader: true,
        fontFamily: '',
        bgColor: '',
        paths: ['']
    },
    'stay-inside': {
        title: 'Stay Inside',
        slug: 'stay-inside',
        showInHeader: true,
        fontFamily: 'font-martian',
        bgColor: 'bg-stay-inside',
        paths: [...applicationSlugs],
        apple: 'https://apps.apple.com/us/app/stayinside/id6477404555',
        android: 'https://play.google.com/store/apps/details?id=com.tiredbluewhale.stayinside',
        privacyPolicy: 'https://www.iubenda.com/privacy-policy/75552625'
    },
    'color-and-shape': {
        title: 'Color & Shape',
        slug: 'color-and-shape',
        showInHeader: true,
        fontFamily: 'font-audiowide',
        bgColor: 'bg-color-and-shape',
        paths: [...applicationSlugs],
        apple: 'https://apps.apple.com/us/app/stayinside/id6479221105',
        android: 'https://play.google.com/store/apps/details?id=com.tiredbluewhale.colorshape',
        privacyPolicy: 'https://www.iubenda.com/privacy-policy/33098832'
    },
    'tobi-2-go': {
        title: 'Tobi2Go',
        slug: 'tobi-2-go',
        showInHeader: true,
        fontFamily: 'font-press-start-2p',
        bgColor: 'bg-tobi-2-go',
        paths: [...applicationSlugs],
        apple: 'https://apps.apple.com/us/app/tobi2go/id6478235341',
        android: 'https://play.google.com/store/apps/details?id=com.tiredbluewhale.tobigo',
        privacyPolicy: 'https://www.iubenda.com/privacy-policy/62161094'
    },
    'fixed-gear-calc': {
        title: 'FixedGearCalc',
        slug: 'fixed-gear-calc',
        showInHeader: true,
        fontFamily: '',
        bgColor: 'bg-neutral-800',
        paths: [...applicationSlugs],
        apple: 'https://apps.apple.com/us/app/fixedgearcalc/id6502835601',
        android: 'https://play.google.com/store/apps/details?id=com.tiredbluewhale.fixedgearcalc',
        privacyPolicy: 'https://www.iubenda.com/privacy-policy/98227453'
    },
    'playground': {
        title: 'Playground',
        slug: 'playground',
        showInHeader: false,
        fontFamily: '',
        bgColor: '',
        paths: ['']
    },
    'linktree': {
        title: 'Link Tree',
        slug: 'linktree',
        showInHeader: true,
        fontFamily: '',
        bgColor: '',
        paths: ['']
    }
}