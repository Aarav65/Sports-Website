// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDatyDaowxeo1TO4gF764nTX5DwvyWCFwo",
    authDomain: "sports-website-e4af4.firebaseapp.com",
    databaseURL: "https://sports-website-e4af4-default-rtdb.firebaseio.com",
    projectId: "sports-website-e4af4",
    storageBucket: "sports-website-e4af4.appspot.com",
    messagingSenderId: "462548796008",
    appId: "1:462548796008:web:c8a8f6554b13c51a9cf1dd"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  

function aboutCricket()
{
    window.open("https://www.britannica.com/sports/cricket-sport", '_blank');
}

function cricketItem()
{
    window.open("https://www.amazon.in/s?k=cricket+items&ref=nb_sb_noss_1", '_blank')
}

function cricketGame()
{
    window.open("https://dlcl.in/registration", '_blank') 
}

function howToPlayCricket()
{
    window.open(" https://youtu.be/yPXAzgwwo0A", '_blank')
}





function howTolayBadminton()
{
    window.open("https://youtu.be/LPpBk3Iy-WI", '_blank')
}

function aboutBadminton()
{
    window.open("https://www.badmintonwa.org.au/where-play/about-game#:~:text=Badminton%20is%20a%20racket%20sport,is%20divided%20by%20a%20net.&text=It%20is%20also%20a%20technical,development%20of%20sophisticated%20racket%20movements.", '_blank')
}

function badmintonItem()
{
    window.open("https://www.amazon.in/s?k=badminton+items&ref=nb_sb_noss", '_blank')
}

function badmintonGame()
{
    window.open("http://upba.org.in/", '_blank')
}






function howToPlayHockey()
{
    window.open("https://youtu.be/IZCzbslH8jo", '_blank')
}

function abouthockey()
{
    window.open("https://www.britannica.com/sports/field-hockey", '_blank')
}

function hockeyItem()
{
    window.open("https://www.amazon.in/s?k=Hockey+items&ref=nb_sb_noss_1", '_blank')
}

function hockeyGame()
{
    window.open("https://www.hockeyindia.org/schedule/national-tournaments-2021-all", '_blank')
}

user_name = localStorage.getItem("user_name");

function on()
{
msg = document.getElementById("cb").value;
firebase.database().ref(user_name).push({
  name:user_name,
  message:msg
 });

document.getElementById("cb").value = "";
}