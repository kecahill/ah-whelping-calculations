function onloadFunction() {
  document.getElementById("newDate").style.visibility = "hidden";

  var date = new Date;
  var dateString = date.toString();

  function toJSONLocal(date) {
    var local = new Date(date);
    local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
  }
  document.getElementById("myDate").value = toJSONLocal(date);

}

function myFunction() {

  var x = document.getElementById("myDate").value;
  document.getElementById("newDate").innerHTML = x;

  var getNewDate = new Date(x);
  var numberOfDaysToAdd = 63;
  getNewDate.setDate(getNewDate.getDate() + numberOfDaysToAdd);

  var dd = getNewDate.getDate();
  var mm = getNewDate.getMonth() + 1;
  var y = getNewDate.getFullYear();

  var formattedDate = mm + '/' + dd + '/' + y;
  document.getElementById("newDate").innerHTML = formattedDate;
  document.getElementById("newDate").style.visibility = "visible";

}