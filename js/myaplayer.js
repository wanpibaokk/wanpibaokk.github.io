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
            url: '/music/眼泪在飞-幼稚园杀手.mp3'
        },
        {
            name: '感动',
            artist: '南征北战',
            url: '/music/感动-南征北战.mp3'
        },
        {
            name: '巨人的肩膀',
            artist: '醉人',
            url: '/music/巨人的肩膀-醉人.mp3'
        },
        {
            name: '南征北战',
            artist: '南征北战',
            url: '/music/南征北战-南征北战.mp3'
        },
        {
            name: '史诗',
            artist: '蛋堡',
            url: '/music/史诗-蛋堡.mp3'
        },
        {
            name: '你最爱的东西',
            artist: '国蛋',
            url: '/music/你最爱的东西-国蛋.mp3'
        },
        {
            name: 'Light it Up',
            artist: '国蛋',
            url: '/music/Light it Up-国蛋.mp3'
        },
        {
            name: 'Can\'t leave this game',
            artist: '瘦子E.SO',
            url: '/music/Can\'t leave this game-瘦子.mp3'
        },
        {
            name: '自己都不自己',
            artist: '瘦子E.SO',
            url: '/music/自己都不自己-瘦子.mp3'
        },
        {
            name: '你懂我意思吗',
            artist: '瘦子E.SO',
            url: '/music/你懂我意思吗-瘦子.mp3'
        },
        {
            name: '冲的太快',
            artist: '瘦子E.SO',
            url: '/music/冲的太快-瘦子.mp3'
        },
        {
            name: 'Winter Lane',
            artist: 'Nujabes',
            url: '/music/Winter Lane-Nujabes.mp3'
        },
        {
            name: 'Luv(sic.) (pt 3 Instrumentals)',
            artist: 'Nujabes',
            url: '/music/Luv(sic.) (pt 3 Instrumentals)-Nujabes.mp3'
        }
    ]
});