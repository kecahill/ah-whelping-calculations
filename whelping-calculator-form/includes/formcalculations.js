var currentDate = new Date(); // will give current date

var userDate = new Date(mm,dd,yyyy);

function getEnteredDate()
{  
  // add a day
 
  //display the result
    var divobj =  document.getElementById('newDate');
  
    divobj.style.display='block';
    divobj.innerHTML = "Birthdate: "+userDate;
}