let px = document.getElementById("px");
let res = document.querySelector("div.res");
function converter() {
  if (px.value.length === 0) {
    alert("Declare o número antes de prosseguir!");
  }
  if (Number(px.value) <= 0) {
    alert("Insira um valor maior que 0");
  } else {
    let resultado = Number(px.value) / 16;
    res.innerHTML = "";
    res.innerHTML += `${resultado}rem`;
  }
}
