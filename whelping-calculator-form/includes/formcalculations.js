function codeAddress() {

  var today = moment().format('YYYY-MM-DD');
  $('#myDate').val(today);

  alert('ok');
}
window.onload = codeAddress;

function myFunction() {

  var x = document.getElementById("myDate").value;
  document.getElementById("demo").innerHTML = x;

  var popcorn = new Date(x);
  var numberOfDaysToAdd = 63;
  popcorn.setDate(popcorn.getDate() + numberOfDaysToAdd);

  var dd = popcorn.getDate();
  var mm = popcorn.getMonth() + 1;
  var y = popcorn.getFullYear();

  var formattedDate = mm + '/' + dd + '/' + y;
  document.getElementById("demo").innerHTML = formattedDate;

}