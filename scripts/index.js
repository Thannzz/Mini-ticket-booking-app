
//creating local storage with key 'amount'
JSON.parse(localStorage.getItem('amount'))||[]

//adding amount to wallet
var amt = 0 ;
function addmoney(){
    let input = document.getElementById('amount').value ;
    
    amt = amt + Number(input) ;
    
    localStorage.setItem('amount',JSON.stringify(amt))

    let money = JSON.parse(localStorage.getItem('amount'))
    
    let wallet = document.getElementById('wallet')
    wallet.innerHTML=money
}












































// if(localStorage.getItem("wallet")===null)
//   {
//     localStorage.setItem("wallet",JSON.stringify([]));
//   }

//   var wallet =0

//   function addtoWallet(a){

//     var btn = document.getElementById("amount").value;
//     // console.log(btn)

//     var amt = 0

//     amt = amt + Number(btn) ;

//     wallet = wallet + amt;

//     localStorage.setItem("wallet",JSON.stringify(wallet))