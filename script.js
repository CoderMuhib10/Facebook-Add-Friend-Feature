// selecting the elements
var isstatus = document.querySelector("h5");
var add = document.querySelector("#add");
var addIcon = document.querySelector("#Iadd");
var i = 0;
add.addEventListener("click", function () {
  if (i == 0) {
    isstatus.innerText = "Pending...";
    isstatus.style.color = "#dadada";
    add.innerText = "Cancel Recquest";

    i++;
  }
  if (i == 1) {
    setTimeout(() => {
      isstatus.innerText = "Friend";
      isstatus.style.color = "green";
      add.innerText = "Unfriend";
    }, 5000);
    i++;
  } else {
    isstatus.innerText = "Stranger";
    isstatus.style.color = "rgb(255, 79, 59)";
    add.innerText = "Add Friend";
    i--;
  }
});
/* things left to add
  1.on click change also icon to user-xmark and innertext to cancel recquest
  2.on click cancel recquest run else condition and dont execute the async code
  3.if not clicked on cancel recquest run the async code after the time mentioned and change icon to user-minus make unfriend button 
  4.when clicked to unfriend button run the else condition and if again click repeat from the top */
