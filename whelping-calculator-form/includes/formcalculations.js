function myFunction() {
    var x =     document.getElementById("myDate").value;
    document.getElementById("demo").innerHTML = x;
  
 var popcorn = new Date;
var numberOfDaysToAdd = 63;
popcorn.setDate(popcorn.getDate() + numberOfDaysToAdd); 
  
  var dd = popcorn.getDate();
var mm = popcorn.getMonth() + 1;
var y = popcorn.getFullYear();
  
var someFormattedDate = mm + '/'+ dd + '/'+ y;
   document.getElementById("demo").innerHTML = someFormattedDate;
  
  
}
