//uppgift 1 - start
var rndarray = [];
var len = 10;
//random number loop
for(var i = 0;i<len;)
{
    var rndnum = Math.floor(Math.random() * 101); 
    if (rndarray.includes(rndnum)==false) {
        rndarray.push(rndnum);
        i++;
    }
}
console.log("Osorterad array " + rndarray);
//sortering med en function
rndarray.sort(function(a, b) {return a - b;});
console.log("Sorterad array " + rndarray);
//uppgift 1 - end



//uppgift 2 - start

function validate(){
    let user = document.getElementById('user').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let pass2 = document.getElementById('pass2').value;
    let box = document.getElementById('box').checked;

    if (user == "" || email == "" || pass == "" || pass2 == "")
    {
        alert("Everything is not filled in!");
    }
    else if (pass.length < 6) {
        alert("Passowrd is to short!");
    }
    else if (pass != pass2){
        alert("The password does nto match!");
    }
    else if (!email.includes("@")) {
        alert("Incorrect email")
    }
    else if (box == false)
    {
        alert("You did not check the checkbox!");
    }
    else {
        window.open("html/ty.html")
        alert("Thank you for your registration!");
    }
    

}