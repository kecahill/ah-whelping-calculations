function onloadFunction() {
  document.getElementById("someText").style.visibility = "hidden";
}
function myFunction() {
   
  var x = document.getElementById("myDate").value;
  document.getElementById("someText").innerHTML = x;

  var popcorn = new Date(x);
  var numberOfDaysToAdd = 63;
  popcorn.setDate(popcorn.getDate() + numberOfDaysToAdd);

  var dd = popcorn.getDate();
  var mm = popcorn.getMonth() + 1;
  var y = popcorn.getFullYear();

  var formattedDate = mm + '/' + dd + '/' + y;
  document.getElementById("someText").innerHTML = formattedDate;
  document.getElementById("someText").style.visibility = "visible";

}