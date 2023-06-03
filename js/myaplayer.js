const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    theme: '#393E46',
    volume: 1.0,
    listMaxHeight: 20,
    audio: [
        {
            name: '眼泪在飞',
            artist: '幼稚园杀手',
            url: '/music/眼泪在飞-幼稚园杀手.mp3',
            cover: '/img/眼泪在飞.jpg'
        },
        {
            name: '感动',
            artist: '南征北战',
            url: '/music/感动-南征北战.mp3',
            cover: '/img/感动.jpg'
        },
        {
            name: '巨人的肩膀',
            artist: '醉人',
            url: '/music/巨人的肩膀-醉人.mp3',
            cover: '/img/巨人的肩膀.jpg'
        },
        {
            name: '南征北战',
            artist: '南征北战',
            url: '/music/南征北战-南征北战.mp3',
            cover: '/img/南征北战.jpg'
        },
        {
            name: '史诗',
            artist: '蛋堡',
            url: '/music/史诗-蛋堡.mp3',
            cover: '/img/史诗.jpg'
        },
        {
            name: '你最爱的东西',
            artist: '国蛋',
            url: '/music/你最爱的东西-国蛋.mp3',
            cover: '/img/你最爱的东西.jpg'
        },
        {
            name: 'Light it Up',
            artist: '国蛋',
            url: '/music/Light it Up-国蛋.mp3',
            cover: '/img/Light it Up.jpg'
        },
        {
            name: 'Can\'t leave this game',
            artist: '瘦子E.SO',
            url: '/music/Can\'t leave this game-瘦子.mp3',
            cover: '/img/can leave.jpg'
        },
        {
            name: '自己都不自己',
            artist: '瘦子E.SO',
            url: '/music/自己都不自己-瘦子.mp3',
            cover: '/img/自己都不自己.jpg'
        },
        {
            name: '你懂我意思吗',
            artist: '瘦子E.SO',
            url: '/music/你懂我意思吗-瘦子.mp3',
            cover: '/img/你懂我意思吗.jpg'
        },
        {
            name: '冲的太快',
            artist: '瘦子E.SO',
            url: '/music/冲的太快-瘦子.mp3',
            cover: '/img/冲的太快.jpg'
        },
        {
            name: 'Winter Lane',
            artist: 'Nujabes',
            url: '/music/Winter Lane-Nujabes.mp3',
            cover: '/img/Winter Lane.jpg'
        },
        {
            name: 'Luv(sic.) (pt 3 Instrumentals)',
            artist: 'Nujabes',
            url: '/music/Luv(sic.) (pt 3 Instrumentals)-Nujabes.mp3',
            cover: '/img/Luv.jpeg'
        }
    ]
});