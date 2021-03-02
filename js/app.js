//code untuk sidebar
const sidebar = document.getElementById("sidebar");
const openclose = document.getElementById("openclose");
const page = document.getElementById("page");

const judul = document.querySelector(".judul");
const title = document.querySelectorAll(".title");
const menuitem = document.querySelectorAll(".menuitem");

const foto = document.querySelector(".foto");
const judulalt = document.querySelector(".judulalt");

const bukatutup = function bukatutup() {
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
};
openclose.addEventListener("click", bukatutup);

//code untuk modal
const btnmodal = document.querySelectorAll(".btnmodal");
const modal = document.querySelectorAll(".modal");
const closemodal = document.querySelectorAll(".closemodal");

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

// code untuk tombol editform
// const tomboledit = document.getElementById("tomboledit");
// const divedit = document.getElementById("divedit");
// function bukaedit() {
//   divedit.classList.toggle("d-hide");
// }
// tomboledit.addEventListener("click", bukaedit);

//code untuk sweetalert2
const sw = document.querySelector("#tomboledit");
sw.addEventListener("click", function () {
  Swal.fire({
    title: "Apakah anda yakin akan mengedit?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: `Edit`,
    denyButtonText: `Batal`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      divedit.classList.remove("d-hide");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
});
