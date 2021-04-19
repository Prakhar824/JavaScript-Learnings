/* function ageInDays(){
    var birthYear = prompt("Enter your birth year.");
    var currentYear = new Date().getFullYear();
    var ageInDayss = (currentYear - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1); 
} */

// Other way to implement the ageInDays function

function ageInDays(){
    var birthYear = prompt("Enter your birth year.");
    var currentYear = new Date().getFullYear();
    var ageInDayss = (currentYear - birthYear) * 365;
    var h1 = document.createElement('h1');
   // var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.innerHTML = 'You are ' + ageInDayss + ' days old';
    document.getElementById("flex-box-result").appendChild(h1); 
}