//code untuk sidebar
let sidebar = document.getElementById("sidebar");
let openclose = document.getElementById("openclose");
let page = document.getElementById("page");

let judul = document.querySelector(".judul");
let title = document.querySelectorAll(".title");
let menuitem = document.querySelectorAll(".menuitem");

let foto = document.querySelector(".foto");
let judulalt = document.querySelector(".judulalt");

function bukatutup() {
  sidebar.classList.toggle("sidebaropen");
  page.classList.toggle("pageopen");

  judul.classList.toggle("closejudul");
  judulalt.classList.toggle("judulalt");
  judulalt.classList.toggle("openjudulalt");

  foto.classList.toggle("fotoalt");

  for (var i = 0; i < title.length; i++) {
    menuitem[i].classList.toggle("menuitem");
    menuitem[i].classList.toggle("menucenter");
    title[i].classList.toggle("titleclose");
  }
}
openclose.addEventListener("click", bukatutup);

//code untuk modal
let btnmodal = document.querySelectorAll(".btnmodal");
let modal = document.querySelectorAll(".modal");
let closemodal = document.querySelectorAll(".closemodal");

function open() {
  for (var i = 0; i < modal.length; i++) {
    modal[i].classList.add("active");
  }
}
function close() {
  for (var i = 0; i < modal.length; i++) {
    modal[i].classList.remove("active");
  }
}

for (var i = 0; i < btnmodal.length; i++) {
  btnmodal[i].addEventListener("click", open);
  closemodal[i].addEventListener("click", close);
}

// code untuk tombol edit
const tomboledit = document.getElementById("tomboledit");
const divedit = document.getElementById("divedit");
function bukaedit() {
  divedit.classList.toggle("d-hide");
}
tomboledit.addEventListener("click", bukaedit);
