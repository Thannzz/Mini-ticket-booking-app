// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


//displayin wallet amount in h1 tag
let a = JSON.parse(localStorage.getItem('amount'))

let wallet = document.getElementById('wallet')
wallet.innerHTML=a;

//fetching api call for movies
async function searchMovies(){
    try{
        let input = document.getElementById('search').value
    

        const url = `http://www.omdbapi.com/?apikey=188cb6a&s=${input}`

        let res = await fetch(url)

        let data = await res.json()

        let movies = data.Search

        // console.log(movies)

        // appending(movies)
        return movies ;
    
    }

    catch(error){
        console.log('Error :',error)
    }
    
}


//appending movies to movies-id
function appending(data){
    let movie = document.getElementById('movies')

    movie.innerHTML=null ;

    data.forEach(function(el){
        
    let minidiv = document.createElement('div')

        let image = document.createElement('img')
        image.src = el.Poster ; 

        let name = document.createElement('p')
        name.innerHTML=el.Title ;

        let btn = document.createElement('button')
        btn.innerHTML='Book Now'
        btn.onclick=()=>{
            bookTicket(el)
        }
        btn.setAttribute('class','book_now')

        minidiv.append(image,name,btn)

        movie.append(minidiv)
    })
}

//assembling in one function
async function main() {
    let data = await searchMovies()

    if(data === undefined)
    {
        return false
    }

    appending(data)
}

//debouncing
let id ;
function debouncing(func,delay){
    if(id){
        clearTimeout(id)
    }
    id= setTimeout(function(){
        func()
    },delay)
}

//creating loval storage for booking tikcets
JSON.parse(localStorage.getItem('movie'))||[]

//passing the details into local storage for selected movies
function bookTicket(el){
    localStorage.setItem('movie',JSON.stringify(el))

    window.location.href='checkout.html'

}





