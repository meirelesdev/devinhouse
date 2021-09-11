window.onload = () => showMovies(true)
const formMovies = document.querySelector('#movieForm')
const moviesArray = JSON.parse(localStorage.getItem('movies')) || []

formMovies.addEventListener('submit', event => {
    event.preventDefault()
    let movie = {
        title: document.querySelector('#movieTitle').value,
        description: document.querySelector('#description').value,
        actors: document.querySelector('#actors').value,
        image: document.querySelector('#image').value
    }
    const alertDiv = document.querySelector('.alert')
    if(movie.title  === "" || movie.description === "" || movie.actors  === "" || movie.image === "") {
        alertDiv.classList.add('red')
        alertDiv.style = 'display: flex'
        alertDiv.innerHTML = 'Existem campos vazios'
        setTimeout(function(){
            alertDiv.innerHTML = ''
            alertDiv.style = 'display: none'
            alertDiv.classList.remove('red')
        }, 2000)
        return
    }
    moviesArray.push(movie)
    localStorage.setItem('movies', JSON.stringify(moviesArray))
    alertDiv.classList.add('green')
    alertDiv.style = 'display: flex'
    alertDiv.innerHTML = 'Filme salvo com sucesso.'
    showMovies(true)
    setTimeout(function(){
        alertDiv.classList.remove('green')
        alertDiv.innerHTML = ''
        alertDiv.style = 'display: none'
        formMovies.reset()
        showAddMoviesModal()
    }, 2000)
})
const showMovies = (clearMovies = false ) =>{
    const movieContent = document.querySelector('.content')
    if(moviesArray.length === 0) {
        movieContent.innerHTML = 'Sem filmes disponiveis.'
        return
    }    
    moviesArray.forEach((item)=>{
        movieContent.appendChild(loadMoview(item))
    })
    console.log('aqui carrega os filmes')
}
const loadMoview = (movie) => {
    const divMovie = document.createElement('div')
    const title = document.createElement('h2')
    const description = document.createElement('p')
    const actors = document.createElement('p')
    const image = document.createElement('img')
    title.innerHTML = movie.title
    description.innerHTML = movie.description
    actors.innerHTML = movie.actors
    image.setAttribute('src', movie.image)
    divMovie.appendChild(image)
    divMovie.appendChild(title)
    divMovie.appendChild(description)
    divMovie.appendChild(actors)
    return divMovie
}
const showAddMoviesModal = () => {
    formMovies.classList.toggle('show')
}
