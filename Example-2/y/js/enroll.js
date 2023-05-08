const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) =>{
  e.preventDefault();
  console.log("Form has been submitted");
  
});
function emptyName() {
  var error = document.getElementById('nameError');
  var regName = /^[a-zA-Z]/;
  var fName = document.getElementById('Name').value;
  if (document.getElementById("Name").value == "" ){
    
    document.getElementById('Name').style.borderColor = "red";
    error.textContent = "YOUR NAME CAN'T BE EMPTY!";
    error.style.color = "red";
    return false;
  } else if(!regName.test(fName)){
    document.getElementById('Name').style.borderColor = "red";
    document.getElementById('Name').focus();
    error.textContent = "YOUR NAME IS INVALID!";
    error.style.color = "red";
    return false;
  }else{
    document.getElementById('Name').style.borderColor = "green";
    error.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

function emptySurname() {
  var error = document.getElementById('surnameError');
  var regName = /^[a-zA-Z]/;
  var lName = document.getElementById('Surname').value;
  if (document.getElementById("Surname").value == "" ){
    document.getElementById('Surname').style.borderColor = "red";
    error.textContent = "YOUR SURNAME CAN'T BE EMPTY!";
    error.style.color = "red";
    return false;

  } else if(!regName.test(lName)){
    document.getElementById('Surname').style.borderColor = "red";
    document.getElementById('Surname').focus();
    error.textContent = "PLEASE ENTER A VALID SURNAME!";
    error.style.color = "red";
    return false;
  }else{
    document.getElementById('Surname').style.borderColor = "green";
    error.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

function emptyIDNumber(){
  var error = document.getElementById('idError');
  if (document.getElementById("IDNo").value == "" || isNaN(document.getElementById('IDNo').value)){
    document.getElementById('IDNo').style.borderColor = "red";
    error.textContent = "PLEASE ENTER A VALID ID NUMBER!";
    error.style.color = "red";
    return false;
    
  } else  if (document.getElementById('IDNo').value.length >0 &&
    document.getElementById('IDNo').value.length < 13){
    error.textContent = "ID NUMBER MUST BE 13 DIGITS!";
    document.getElementById('IDNo').style.borderColor = "red";
    error.style.color = "red";
  }
  else{
    document.getElementById('IDNo').style.borderColor = "green";
    error.textContent = "";
  }
}

function emptyDateOfBirth(){
  var error = document.getElementById('dobError');
  if (document.getElementById("DoB").value == "" ){
    error.textContent = "DATE OF BIRTH IS REQUIRED!";
    error.style.color = "red";
    document.getElementById('DoB').style.borderColor = "red";
    return false;
  } else{
    document.getElementById('DoB').style.borderColor = "green";
  }
}

function emptyAge(){
  var error = document.getElementById('ageError');
  if (document.getElementById("Age").value == ""){ 
    document.getElementById('Age').style.borderColor = "red";
    error.textContent = "AGE IS REQUIRED!";
    error.style.color = "red";
    return false;

  }
  else if (document.getElementById("Age").value < 5 || document.getElementById("Age").value > 18){
    document.getElementById('Age').style.borderColor = "red";
    error.textContent = "AGE MUST BE BETWEEN 5 AND 18!";
    error.style.color = "red";
    return false;
    
  } else{
      document.getElementById('Age').style.borderColor = "green";
      error.textContent = "";
      return true;
    }
}

function emptyGrade(){
  var error = document.getElementById('gradeError');
  if (document.getElementById("Grade").value == "" ){ 
    document.getElementById('Grade').style.borderColor = "red";
    error.textContent = "GRADE IS REQUIRED!";
    error.style.color = "red";
    return false;

  }else if(document.getElementById("Grade").value < 1 || document.getElementById("Grade").value > 12){
    document.getElementById('Grade').style.borderColor = "red";
    error.textContent = "GRADE MUST BE BETWEEN 1 AND 12!";
    error.style.color = "red";
    return false;

  }else{
    document.getElementById('Grade').style.borderColor = "green";
    error.textContent = "";
    return true;
  }
}

function emptyEmail(){
  var error = document.getElementById('emailError');
  if (document.getElementById("email").value == "" ){
    
    document.getElementById('email').style.borderColor = "red";
    error.textContent = "VALID EMAIL ADDRESS IS REQUIRED!";
    error.style.color = "red";
    return false;
  } else{
    document.getElementById('email').style.borderColor = "green";
    error.style.color = "";
    return true;
  }
}

function emptyPhoneNumber(){
  var error = document.getElementById('phoneError');
  if (document.getElementById("phone").value == "" || isNaN(document.getElementById('phone').value)){
    error.textContent = "PLEASE ENTER A VALID PHONE NUMBER!";
    document.getElementById('phone').style.borderColor = "red";
    error.style.color = "red";
    return false;

  }else if (document.getElementById('phone').value.length > 0 && document.getElementById('phone').value.length < 10){
    error.textContent = "ENTER A VALID PHONE NUMBER!";
    document.getElementById('phone').style.borderColor = "red";
    error.style.color = "red";
    document.getElementById('phone').focus();
    return false;

   } else{
    document.getElementById('phone').style.borderColor = "green";
    error.textContent = "";
    return true;
  }
}


function emptyAddress(){
  if (document.getElementById("address").value == "" ){
  
    document.getElementById('address').style.borderColor = "red";
    return false;
  } else{
    document.getElementById('address').style.borderColor = "green";
    return true;
  }
}









