const sounds = ['alarm', 'Heart', 'dog', 'laugh', 'lion',]
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})
function stopsong() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    })
}