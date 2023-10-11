/**********************************************************/
/* Hide/Show Drop Menu Landing Page */
function openNav() {
  document.getElementById("Main_Menu").style.width = "250px";
}


function closeNav() {
  document.getElementById("Main_Menu").style.width="0";
}

/**********************************************************/
/* Loans Page - Info */
var acc = document.getElementsByClassName("accordian");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/**********************************************************/

