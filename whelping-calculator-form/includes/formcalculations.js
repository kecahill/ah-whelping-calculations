function myFunction() {
    var x =     document.getElementById("myDate").value;
    document.getElementById("demo").innerHTML = x;
  
 var demo = new Date;
var numberOfDaysToAdd = 63;
demo.setDate(demo.getDate() + numberOfDaysToAdd); 
  
  var dd = demo.getDate();
var mm = demo.getMonth() + 1;
var y = demo.getFullYear();
  
var someFormattedDate = mm + '/'+ dd + '/'+ y;
   document.getElementById("demo").innerHTML = someFormattedDate;
  
  
}
