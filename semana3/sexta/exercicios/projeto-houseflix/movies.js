window.onload = () => showMovies(false)
const preMovies = [
    {
        title: "Batman: O Cavaleiro das Trevas",
        description: "Quando a ameaça conhecida como Coringa (Heath Ledger) causa estragos e caos no povo de Gotham, Batman (Christian Bale) deve aceitar um dos maiores testes psicológicos e físicos de sua capacidade de lutar contra a injustiça.",
        actors: "Christian Bale, Heath Ledger, Isaac Bardavid",
        image: "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27224060.jpg%27&ImageUrl=%27224060.jpg%27&EntityType=%27Item%27&EntityId=%2721544%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540"
    },
    {
        title: "Opoderoso Chefão",
        description: "Don Corleone (Marlon Brando) é chefe de uma das famílias de mafiosos italianos mais respeitadas de Nova York. Quando ele é ferido e afastado de suas funções, o filho Michael (Al Pacino) deve tomar as rédeas da situação para acabar com o responsável e manter a honra do pai intacta. Dirigido por Francis Ford Coppola e vencedor de três Oscars, incluindo o de Melhor Filme.",
        actors: "Maron Brando, Al Pacino, James Caan, Robert Duvall",
        image: "https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=85&ImageId=%27178626.png%27&ImageUrl=%27178626.png%27&EntityType=%27Item%27&EntityId=%276907%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540"
    }
]
const formMovies = document.querySelector('#movieForm')
const moviesArray = JSON.parse(localStorage.getItem('movies')) || preMovies

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
    if(clearMovies) {
        movieContent.innerHTML = ''
        moviesArray.forEach((item)=>{
            movieContent.appendChild(loadMoview(item))
        })
        return
    }
    moviesArray.forEach((item)=>{
        movieContent.appendChild(loadMoview(item))
    })
}
const loadMoview = (movie) => {
    const divMovie = document.createElement('div')
    const divTexts = document.createElement('div')
    divTexts.classList.add('texts-movie')
    const title = document.createElement('h2')
    const description = document.createElement('p')
    const actors = document.createElement('p')
    const image = document.createElement('img')
    title.innerHTML = movie.title
    description.innerHTML = movie.description
    actors.innerHTML = `<strong>Atores: </strong> ${movie.actors}`
    image.setAttribute('src', movie.image)
    divMovie.appendChild(image)
    divTexts.appendChild(title)
    divTexts.appendChild(description)
    divMovie.appendChild(divTexts)
    return divMovie
}
const showAddMoviesModal = () => {
    formMovies.classList.toggle('show')
}
