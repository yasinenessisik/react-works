var kullanicilar = [
    {email:"enessisik@hotmail.com",sifre:"1234"}
]
var tweets = [
    {email:"enessisik@hotmail.com",tweet:"First Tweet."},
    {email:"enessisik@hotmail.com",tweet:"Second Tweetim."},
    {email:"enessisik@hotmail.com",tweet:"Third Tweetim."}
]
var email = prompt("email ? :")
var sifre = prompt("sifre ? :")
function isUserExists(email,sifre){
    for(i = 0; i<kullanicilar.length; i++){
        if(email == kullanicilar[0].email && kullanicilar[0].sifre == sifre){
            return true;
        }
    }
    return false;
}

function giris(){
    if(isUserExists(email,sifre)){
        console.log(tweets)
    }else{
        console.log("Error")
    }

}
giris()