/**********************************************************/
/* Hide/Show Drop Menu Landing Page */
function myFunction() {
  document.getElementById("Main_Menu").classList.toggle("show");
  
}


window.onclick = function(event) {
  if (!event.target.matches('.drop_button')) {
    var dropdowns = document.getElementsByClassName("drop_content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
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