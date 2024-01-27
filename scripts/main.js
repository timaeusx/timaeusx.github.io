document.getElementById("default").click();

function switchTab(event, tabID) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  document.getElementById(tabID).style.display = "block";
  event.currentTarget.className += "active";
}

function toggleLightDark() {
  var element = document.body;
  element.classList.toggle("lightmode");

  var headerbuttons = document.getElementsByClassName("headerbutton");
  for (i = 0; i < headerbuttons.length; i++) {
    headerbuttons[i].classList.toggle("recolor");
  }
  
}