const griffendorBtn = document.getElementById("griffindor-Btn");
const slytherinBtn = document.getElementById("slytherin-Btn");
const huffelpuffBtn = document.getElementById("huffelpuff-Btn");
const ravenclawBtn = document.getElementById("ravenclaw-Btn");

const griffindorConteiner = document.getElementById("griffindor-Conteiner");
const slytherinConteiner = document.getElementById("slytherin-Conteiner");
const huffelpuffConteiner = document.getElementById("huffelpuff-Conteiner");
const ravenclawConteiner = document.getElementById("ravenclaw-Conteiner");
let griffindorHouse;
let griffindorHouseArray;
//let slytherinHouseArray;
//let huffelpuffHouseArray;
//let ravenclawHouseArray;

griffendorBtn.addEventListener("click", fetchGriffendor);

async function fetchGriffendor() {
  const griffindorRequwst = await fetch(
    "https://hp-api.onrender.com/api/characters/students"
  );
  let result = await griffindorRequwst.json();
  return result;
}
console.log(fetchGriffendor());
async function getGriffendorHouse() {
  try {
    griffindorHouse = await fetchGriffendor();
    let griffindorHouseDoorman = griffindorHouse.filter(
      (griffindorHouse) =>
        griffindorHouse.house === "Gryffindor" &&
        griffindorHouse.hogwartsStudent === true
    );
    griffindorHouseArray.push(griffindorHouseDoorman);
    console.log(griffindorHouseArray);
    showAllGriffendor();
  } catch (error) {
    console.error("Ops klarte ikke å laste ned hogwarts staff", error);
  }
}
console.log(griffindorHouseDoorman);
function showAllGriffendor() {
  griffindorConteiner.innerHTML = "";
  griffindorHouse.forEach((student, index) => {
    const griffendorStudent = document.createElement("div");
    griffendorStudent.style.display = "flex";
    griffendorStudent.style.flexDirection = "column";
  });
}
