const griffendorBtn = document.getElementById("griffindor-Btn");
const slytherinBtn = document.getElementById("slytherin-Btn");
const huffelpuffBtn = document.getElementById("huffelpuff-Btn");
const ravenclawBtn = document.getElementById("ravenclaw-Btn");

const griffindorContainer = document.getElementById("griffindor-Conteiner");
const slytherinContainer = document.getElementById("slytherin-Conteiner");
const huffelpuffContainer = document.getElementById("huffelpuff-Conteiner");
const ravenclawContainer = document.getElementById("ravenclaw-Conteiner");
let griffindorHouse;
let griffindorHouseArray = [];
//let slytherinHouseArray;
//let huffelpuffHouseArray;
//let ravenclawHouseArray;

griffendorBtn.addEventListener("click", getGriffendorHouse);

async function getGriffendorHouse() {
  try {
    const griffindorRequwst = await fetch(
      "https://hp-api.onrender.com/api/characters/students"
    );

    griffindorHouse = await griffindorRequwst.json();
    const griffindorHouseDoorman = griffindorHouse.filter(
      (griffindorHouse) =>
        griffindorHouse.house === "Gryffindor" &&
        griffindorHouse.hogwartsStudent === true
    );
    griffindorHouseArray.push(griffindorHouseDoorman);
    console.log(griffindorHouseDoorman);
    showAllGriffendor(griffindorHouseDoorman);
  } catch (error) {
    console.error("Ops klarte ikke å laste ned hogwarts elever", error);
  }
}

function showAllGriffendor(griffendorHouseArray) {
  console.log("vi er inne i showAllGriffendor");
  griffendorHouseArray.forEach((student) => {
    let yearBirth = student.yearOfBirth;
    let age = 2023 - yearBirth;
    if (age == 2023) {
      ("uvisst");
    }

    let griffindorStudensCon = document.createElement("div");
    griffindorStudensCon.innerHTML = `
                Name: ${student.name} <br>
                House: ${student.house}<br>
                Age: ${age}<br>
                <img src="${student.image}" height="90px" width="60px">
      `;
    griffindorStudensCon.style.display = "flex";
    griffindorStudensCon.style.flexDirection = "column";
    griffindorStudensCon.style.alignItems = "center";
    griffindorStudensCon.style.justifyContent = "center";
    griffindorStudensCon.style.padding = "5px";
    griffindorStudensCon.style.color = "blue";
    griffindorStudensCon.style.fontSize = "medium";
    griffindorStudensCon.style.width = "180px";
    griffindorStudensCon.style.height = "180px";
    griffindorStudensCon.style.backgroundColor = "beige";
    griffindorStudensCon.style.borderRadius = "15px";
    griffindorStudensCon.style.margin = "15px";
    griffindorContainer.appendChild(griffindorStudensCon);
  });
}
