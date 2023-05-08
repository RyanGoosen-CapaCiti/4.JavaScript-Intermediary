const vacancyContent = document.getElementById('vacancy-content');

const vacancyBtn = document.getElementById('vacancy-cv');

function openPopupVacancy ()
{

    window.open('vacancypopup.html', 'Popup', 'width=750,height=500');

}
function uploadFileVacancy () {
    //gets the file input element
    const fileInput = document.getElementById('fileName');
    //checks if a file was selected
    if (fileInput.isDefaultNamespace.length > 0){
        //Creates a new formData object

        let formData = new FormData();
//add the selected file to the formData object
        formData.append('file', fileInput.files[0]);

//sends the formData to the server using fetch()
fetch('upload',{
    method: 'POST',
    body:formData
})
//upload should contain the server-side url
.then(response =>{
    //handles the server response
    if (response.ok){
        alert('File uploaded successfully!');  
    } else {
        alert('Error uploading file.');   
    }
})
.catch(error => {
    alert('Error uploading file.'); 
});

    } else {
        alert('Please select a file to upload.');   
    }
// fetch() returns a promise, so we use the catch() method to handle any errors that occur during the file upload process
}

