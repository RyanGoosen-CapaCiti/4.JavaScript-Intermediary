

const popupContainer = document.getElementById('popup-container1');
//btn in iframe
const enrollBtn1 = document.getElementById('enrollBtn');

const appContents = document.getElementById('appContent');



//listens to when Enroll button is clicked/redirects to enrollment page
popupContainer.addEventListener('click', (event) => {
  if (event.target === popupContainer) {
    popupContainer.style.display = 'none';
  }
});



//date function

function enrollDateNotice(){
  const startDate = new Date('2023-04-02');
const endDate = new Date('2023-04-28');
    const currentDate = new Date();
    //  const currentDate = new Date('2023-04-29'); TESTING PURPOSES
    if ((currentDate >= startDate)&&(currentDate <= endDate)){
      //displays appContents
       valueStatus='block';
        appContents.style.color = 'white';
alert('Applications are open!');
    }
    else {
      valueStatus='none';
        appContents.style.color = 'white';
     
       alert('Application are closed!!');
        enrollBtn1.disabled=true;
    }
  }

//automatically shows pop after 1 second
  setTimeout(() => {
    popupContainer.style.display = 'block';
  }, 1000);




//function that automatically displays whether applications open or not
  function noticeStatus (){
    const startDate = new Date('2023-04-02');
const endDate = new Date('2023-04-28');
    const currentDate = new Date();
   // const currentDate = new Date('2023-04-29'); TESTING PURPOSES

    if ((currentDate >= startDate)&&(currentDate <= endDate)){
      valueStatus='block';
      appContents.innerHTML='Applications are open!';
      appContents.style.color = 'white';

  }
  else {
      valueStatus='none';
      appContents.style.color = 'white';
     appContents.innerHTML='Application are closed!';
   
      enrollBtn1.disabled=true;
  }
}
