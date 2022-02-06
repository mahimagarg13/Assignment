function onFormSubmit() {
  var formData = readFormData();
  insertNewRecord(formData);
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["fname"] = document.getElementById("fname").value;
  formData["lname"] = document.getElementById("lname").value;
  formData["age"] = document.getElementById("age").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("customerList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fname;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lname;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.age;
}

function resetForm() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("age").value = "";
}
