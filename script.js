const btn = document.getElementById("btn");
const result = document.getElementById("result");
const os = document.getElementById("os");
const brw = document.getElementById("name");
const version = document.getElementById("version");
// const manf = document.getElementById("Manufracturer");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  result.classList.remove("hidden");
  os.innerText = platform.os;
  brw.innerText = platform.name;
  version.innerText = platform.version;
  //   manf.innerText = platform.manufracturer;
});
