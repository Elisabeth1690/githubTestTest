const griffendorBtn = document.getElementById("griffindor-Btn");
const slytherinBtn = document.getElementById("slytherin-Btn");
const huffelpuffBtn = document.getElementById("huffelpuff-Btn");
const ravenclawBtn = document.getElementById("ravenclaw-Btn");

const griffindorConteiner = document.getElementById("griffindor-Conteiner");
const slytherinConteiner = document.getElementById("slytherin-Conteiner");
const huffelpuffConteiner = document.getElementById("huffelpuff-Conteiner");
const ravenclawConteiner = document.getElementById("ravenclaw-Conteiner");

griffendorBtn.addEventListener("click", getGriffendorHouse);

async function fetchStaff() {
  const hogwartsStaffRequwst = await fetch(
    "https://hp-api.onrender.com/api/characters/staff"
  );
  let result = await hogwartsStaffRequwst.json();
  return result;
}

function getGriffendorHouse() {
  alert("heihei");
}
