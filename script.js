


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

var coll = document.getElementsByClassName("loan_types_info");
var j;

for (j = 0; j < coll.length; j++) {
  coll[j].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

/**********************************************************/