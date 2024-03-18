function toggle(id, thisID) {
  let elementList = document.getElementsByClassName("info");
  let buttonList = document.getElementsByClassName("navbtn");
  for (let i = 0; i < elementList.length; i++) {
    elementList[i].classList.remove("show");
    buttonList[i].classList.remove("active");
  }
  let element = document.getElementById(id);
  let button = document.getElementById(thisID);
  button.classList.add("active");
  element.classList.add("show");
}
