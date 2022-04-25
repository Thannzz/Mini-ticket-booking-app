// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

//displayin wallet amount in h1 tag
let a = JSON.parse(localStorage.getItem('amount'))

let wallet = document.getElementById('wallet')
wallet.innerHTML=a;


//alerting the user
function submit(){
    let wallet_amt = JSON.parse(localStorage.getItem('amount'))

    let oneTicket = 100 ;
    
    let seat = document.getElementById('number_of_seats').value

    let total_amt = seat*oneTicket

    if(wallet_amt>=total_amt){
        alert('Booking Sucessfull !!!')
        wallet_amt = wallet_amt-total_amt
        localStorage.setItem('amount',JSON.stringify(wallet_amt))
        window.location.reload();
        
    }
    else{
        alert("Insufficient Balance !!!")
    }
}

//appending selected movie
let movie = JSON.parse(localStorage.getItem('movie'))

console.log(movie)

let image = document.createElement('img')
image.src = movie.Poster ; 
image.setAttribute('class','imageBox')

let Mname = document.createElement('p')
Mname.innerHTML=movie.Title ;
Mname.setAttribute('class','namebox')

let minidiv = document.createElement('div')

minidiv.append(Mname,image)

let moviesDIv = document.getElementById('movie')

moviesDIv.append(minidiv)




