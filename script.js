const inputs = document.querySelector(".inputs"),
  btn = document.querySelector(".btn"),
  message = document.querySelector(".message"),
  aler = document.querySelector(".alert"),
  clos = document.querySelector(".close");

btn.addEventListener("click", pass);
clos.addEventListener("click", function () {
  aler.style.display = "none";
});

function pass() {
  let messpass = inputs.value;
  if (inputs.value == "") {
    aler.style.display = "block";
    message.innerHTML = "";
  } else {
    inputs.value = "";
    message.innerHTML = messpass;
  }
}
