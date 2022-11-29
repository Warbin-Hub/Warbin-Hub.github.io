document.addEventListener('DOMContentLoaded', () => {
  const apContainer = document.createElement('div')
  apContainer.id = 'aplayer'
  document.body.append(apContainer)
  const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    audio: [
      {
        name: 'name',
        artist: 'artist',
        url: 'url.mp3',
        cover: 'cover.jpg',
      },
    ],
  })
})
