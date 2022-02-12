const urlAPI = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=`${search.value}`&page=1'
const searchAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='
const imgPATH = 'https://image.tmdb.org/t/p/w1280'

const main = document.querySelector('.main')
const search = document.querySelector('.search')
const form = document.querySelector('.form')

showMovies(urlAPI);

function showMovies(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            data.results.forEach(element => {
                const el = document.createElement('div')
                const image = document.createElement('img')
                const text = document.createElement('h2')
                const description = document.createElement('p')
                const release = document.createElement('p')

                description.classList.add('description')
                release.classList.add('release')

                text.innerHTML = `${element.title}`
                description.innerHTML = `${element.overview}`
                release.innerHTML = `${'Release date: ' + element.release_date}`
                image.src = imgPATH + element.poster_path
                
                el.appendChild(image)
                el.appendChild(text)
                el.appendChild(description)
                el.appendChild(release)
                main.appendChild(el)
                
            })
        })
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    main.innerHTML = ''

    const searchTerm = search.value

    if(searchTerm) {
        showMovies(searchAPI + searchTerm)
    }
})
