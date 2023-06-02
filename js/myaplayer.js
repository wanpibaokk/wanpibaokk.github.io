const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    loop: 'all',
    order: 'list',
    preload: 'metadata',
    volume: 1.0,
    audio: [
        {
            name: '111',
            artist: '111',
            url: '/music/都市.mp3'
        }
    ]
});