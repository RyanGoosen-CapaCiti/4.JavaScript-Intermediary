function one1(){
  let popupWidth = 500;
  let popupHeight = 350;
  let left = (screen.width / 2) - (popupWidth / 2);
  let top = (screen.height / 2) - (popupHeight / 2);
  let newWin = window.open("popup_evil.html", "hello", "width=500,height=350,left=" + left + ",top=" + top);
  test.focus();
};

let popups = [];

function openMultiplePopups() {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const popupWidth = 400;
  const popupHeight = 400;
  const popupGap = 20; // gap between popups in pixels
  let popupLeft = 0;
  let popupTop = 0;

  for (let i = 0; i < 10; i++) {
    const features = `width=${popupWidth},height=${popupHeight},left=${popupLeft},top=${popupTop}`;
    const newWindow = window.open("about:blank", "popup" + i, features);
    newWindow.document.write("<h1 style='font-size:5em;'>Mwahaha &#128520;</h1>");

    popups.push(newWindow);

    popupLeft += popupWidth + popupGap;
    if (popupLeft + popupWidth > screenWidth) {
      popupLeft = 0;
      popupTop += popupHeight + popupGap;
    }
  }
}
