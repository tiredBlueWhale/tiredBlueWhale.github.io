const applicationSlugs = ['detail', 'privacy', 'store']

const pathDefaultConfig = {
    showInHeader: true,
    fontFamily: '',
    bgColor: '',
    paths: ['']
}

export const PATHS = {
    home: {
        title: 'Home',
        slug: '',
        ...pathDefaultConfig,
    },
    about: {
        title: 'About',
        slug: 'about',
        ...pathDefaultConfig,
    },
    stayInside: {
        title: 'Stay Inside',
        slug: 'stay-inside',
        showInHeader: true,
        fontFamily: 'font-martian',
        bgColor: 'bg-stay-inside',
        paths: [...applicationSlugs],
    },
    colorAndShape: {
        title: 'Color & Shape',
        slug: 'color-and-shape',
        showInHeader: true,
        fontFamily: 'font-audiowide',
        bgColor: 'bg-color-and-shape',
        paths: [...applicationSlugs],
    },
    tobi2Go: {
        title: 'Tobi2Go',
        slug: 'tobi-2-go',
        showInHeader: true,
        fontFamily: 'font-press-start-2p',
        bgColor: 'bg-tobi-2-go',
        paths: [...applicationSlugs],
    },
    fixedGearCalc: {
        title: 'FixedGearCalc',
        slug: 'fixed-gear-calc',
        showInHeader: true,
        fontFamily: 'font-sf-pro',
        bgColor: 'bg-rose-800',
        paths: [...applicationSlugs],
    },
    playground: {
        title: 'Playground',
        slug: 'playground',
        ...pathDefaultConfig,
        showInHeader: false,
    },
    linktree: {
        title: 'Link Tree',
        slug: 'linktree',
        ...pathDefaultConfig,
    }
}

export const APPLICATIONS = {
    stayInside: {
        landscape: false,
        isNative: false,
        category: 'Game',
        subTitle: 'Fast paced hyper casual mobile game',
        description: 'The goal is to stay inside the outer circle, which changes speed, size and rythm.',
        apple: 'https://apps.apple.com/us/app/stayinside/id6477404555',
        android: 'https://play.google.com/store/apps/details?id=com.tiredbluewhale.stayinside',
        privacyPolicy: 'https://www.iubenda.com/privacy-policy/75552625',
        images: {
            apple: 'stay-inside-ios',
            android: 'stay-inside-android',
        },
        ...PATHS.stayInside
    },
    colorAndShape: {
        landscape: true,
        isNative: false,
        category: 'Game',
        subTitle: 'Fast paced hyper casual mobile game',
        description: `Press the correct color and shape but don't get tricked by the <a href="https://en.wikipedia.org/wiki/Stroop_effect">Stroop effect</a>, among other things.`,
        apple: 'https://apps.apple.com/us/app/stayinside/id6479221105',
        android: 'https://play.google.com/store/apps/details?id=com.tiredbluewhale.colorshape',
        privacyPolicy: 'https://www.iubenda.com/privacy-policy/33098832',
        images: {
            apple: 'color-shape-ios',
            android: 'color-shape-android',
        },
        ...PATHS.colorAndShape
    },
    tobi2Go: {
        landscape: false,
        isNative: false,
        category: 'Utility',
        subTitle: 'Feel good app',
        description: 'Feeling down? In need of motivation? Look no further, press one of the many buttons and get your daily dose of encouragement.',
        apple: 'https://apps.apple.com/us/app/tobi2go/id6478235341',
        android: 'https://play.google.com/store/apps/details?id=com.tiredbluewhale.tobigo',
        privacyPolicy: 'https://www.iubenda.com/privacy-policy/62161094',
        images: {
            apple: 'tobi-2-go-ios',
            android: 'tobi-2-go-android',
        },
        ...PATHS.tobi2Go
    },
    fixedGearCalc: {
        landscape: false,
        isNative: true,
        category: 'Utility',
        subTitle: 'Get your skit patch and ratio',
        description: 'Figure out your optimal setup for your fixed gear or track bike. Get your skit patch, ratio, or the cadence needed for your desired speed.',
        apple: 'https://apps.apple.com/us/app/fixedgearcalc/id6502835601',
        android: 'https://play.google.com/store/apps/details?id=com.tiredbluewhale.fixedgearcalc',
        privacyPolicy: 'https://www.iubenda.com/privacy-policy/98227453',
        images: {
            apple: 'fixed-gear-calc-ios',
            android: 'fixed-gear-calc-android',
        },
        ...PATHS.fixedGearCalc
    }

}

