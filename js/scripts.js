function changePage(clicked){
	var clickedLink = clicked.getAttribute("data-id");
  var clickedNav = clicked.getAttribute("data-nav");

  $(".active").toggleClass("active");
  $("#main-" +clickedLink).toggleClass("active");
  $("#offscreen-" +clickedLink).toggleClass("active");
  $("#content-inner").load("php/" + clickedLink + ".php");

  // FADES OUT THE CONTENT, CHANGES IT AND FADES IT BACK
  $("#content-inner").toggleClass("hidden");
  $("#content-inner").load("php/" + clickedLink + ".php");
  $("#content-inner").toggleClass("hidden");
  checkMenu();
}

function toggle_visibility(id) {
 var e = document.getElementById(id);
 if(e.style.display == 'block')
    e.style.display = 'none';
 else
    e.style.display = 'block';
}

// Stops video on click
function destroyVideo(){
    var url = $('#exit-button').attr('src');
    $('#exit-button').attr('src', '');
    $('#exit-button').attr('src', url);
}

function plusTen(id){
  var e = document.getElementById(id);
  e.style.width = e.style.width + 10;
}

function changeValue(changedInput){
	$(changedInput).attr("value", changedInput.value);
}

function checkMenu(){
  if ($("#body-wrapper").attr("class") == "pushed")
  {
    toggleNav();
  }
}

function toggleNav(){
  $("#body-wrapper").toggleClass("pushed");
  $("#offscreen-nav").toggleClass("pushed");
  $("#content-overlay").toggleClass("visible");
  $("#hamburger-menu-button").toggleClass("back");
}

function resizeContent(){
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var navHeight = $("#nav-bar").height();
  var newHeight = windowHeight - navHeight;

  $("#content").height(newHeight + "px");
  ;
}


function scrollTo(id){
  window.location.hash = id;
}


function checkUrl(){
  var url = window.location.pathname;

  if (url.indexOf("index.php") >= 0)
  {
    $("#main-home").attr("class", "active");
    $("#offscreen-home").attr("class", "active");    
  }
  else if (url.indexOf("products.php") >= 0)
  {
    $("#main-products").attr("class", "active");
    $("#offscreen-products").attr("class", "active");    
  }
  else if (url.indexOf("plans.php") >= 0)
  {
    $("#main-plans").attr("class", "active");
    $("#offscreen-plans").attr("class", "active");    
  }
  else if (url.indexOf("about.php") >= 0)
  {
    $("#main-about").attr("class", "active");
    $("#offscreen-about").attr("class", "active");    
  }
  else if (url.indexOf("contact.php") >= 0)
  {
    $("#main-contact").attr("class", "active");
    $("#offscreen-contact").attr("class", "active");    
  }
  else
  {
    $("#main-home").attr("class", "active");
    $("#offscreen-home").attr("class", "active"); 
  }


}