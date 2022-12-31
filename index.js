var row = 1;
var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);



function displayDetails() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var skills = document.getElementById("skills").value;

  if(!name|| !email|| !age|| !gender|| !skills) {
    alert("Please fill all the details");
    return;
  }

  var display = document.getElementById("display");

  var newRow = display.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML = name;
  cell2.innerHTML = email;
  cell3.innerHTML = age;
  cell4.innerHTML = gender;
  cell5.innerHTML = skills;

  row++;

}










































var submit = document.getEelementById("submit");



submit.addEventListener("click, displayDetails");
var row = 1;

function displayDetails() {
var name = document.getEelementById("name").value;
var email = document.getEelementById("email").value;
var website = document.getEelementById("website").value;
var image = document.getEelementById("image-link").value;
var gender = document.getEelementById("gender").value;
var skills = document.getEelementById("skills").value;

if(!name||!email||!website||!image||!gender||!skills) {
  alert("please fill all the boxes");
  return;
}

}
