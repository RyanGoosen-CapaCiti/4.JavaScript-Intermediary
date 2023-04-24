function openPopup() {
  document.getElementById("popup").style.display = "flex";
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
function submitForm() {
    searchAndDisplayFile();
  closePopup();
}

//iFrame
function searchAndDisplayFile() {
  let popupWidth = 500;
  let popupHeight = 350;
  let left = screen.width / 2 - popupWidth / 2;
  let top = screen.height / 2 - popupHeight / 2;
  const query = "final.txt";
  const fileUrl = `${window.location.href}${query}`;

  fetch(fileUrl)
    .then((response) => response.text())
    .then((content) => {
      const params = "width=500,height=350,left=" + left + ",top=" + top;
      const newWindow = window.open("", "_blank", params);
      newWindow.document.write(
        '<style>iframe { display: block; width: 100%; height: 100%; border: none; }</style><iframe id="iframe" src="data:text/plain;charset=utf-8,' +
          encodeURIComponent(content) +
          '"></iframe>'
      );
      closePopup();
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to load file.");
    });
}
