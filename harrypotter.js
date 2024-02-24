const griffendorBtn = document.getElementById("griffindor-Btn");
const slytherinBtn = document.getElementById("slytherin-Btn");
const huffelpuffBtn = document.getElementById("huffelpuff-Btn");
const ravenclawBtn = document.getElementById("ravenclaw-Btn");

const griffindorContainer = document.getElementById("griffindor-Conteiner");
const slytherinContainer = document.getElementById("slytherin-Conteiner");
const huffelpuffContainer = document.getElementById("huffelpuff-Conteiner");
const ravenclawContainer = document.getElementById("ravenclaw-Conteiner");
let griffindorHouse;
let slytherinHouse;
let huffelpuffHouse;
let griffindorHouseArray = [];
let slytherinHouseArray = [];
let huffelpuffHouseArray = [];

//let ravenclawHouseArray;

griffendorBtn.addEventListener("click", getGriffendorHouse);
slytherinBtn.addEventListener("click", getSlytherinHouse);
huffelpuffBtn.addEventListener("click", getHuffelpuffHouse);

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

function showAllGriffendor(hogwartsStudent) {
  hogwartsStudent.forEach((student) => {
    let yearBirth = student.yearOfBirth;
    let age = 2023 - yearBirth;
    if (yearBirth === null) {
      age = "Uvisst";
    }
    let StudenPitcher = `<img src="${student.image}" height="90px" width="60px">`;
    if (student.image === "") {
      StudenPitcher = "Uvisst";
    }
    console.log(StudenPitcher);
    let griffindorStudensCon = document.createElement("div");
    griffindorStudensCon.innerHTML = `
                Name: ${student.name} <br>
                House: ${student.house}<br>
                Age: ${age}<br>
                ${StudenPitcher}
      `;
    StyleCard(griffindorStudensCon);
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Slett Student";
    deleteBtn.style.backgroundColor = "red";
    //deleteBtn.addEventListener("click", deleteStudent);
    deleteBtn.style.width = "100px";
    deleteBtn.style.color = "white";
    deleteBtn.style.margin = "10px";

    griffindorContainer.appendChild(griffindorStudensCon);
    griffindorStudensCon.appendChild(deleteBtn);
  });
}

function StyleCard(griffindorStudensCon1) {
  griffindorStudensCon1.style.display = "flex";
  griffindorStudensCon1.style.flexDirection = "column";
  griffindorStudensCon1.style.alignItems = "center";
  griffindorStudensCon1.style.justifyContent = "center";
  griffindorStudensCon1.style.padding = "5px";
  griffindorStudensCon1.style.color = "blue";
  griffindorStudensCon1.style.fontSize = "medium";
  griffindorStudensCon1.style.width = "180px";
  griffindorStudensCon1.style.height = "180px";
  griffindorStudensCon1.style.backgroundColor = "beige";
  griffindorStudensCon1.style.borderRadius = "15px";
  griffindorStudensCon1.style.margin = "15px";
}

// Slyterin
async function getSlytherinHouse() {
  try {
    const SlyterinRequwst = await fetch(
      "https://hp-api.onrender.com/api/characters/students"
    );

    slytherinHouse = await SlyterinRequwst.json();
    const slytherinHouseDoorman = slytherinHouse.filter(
      (slytherinHouse) =>
        slytherinHouse.house === "Slytherin" &&
        slytherinHouse.hogwartsStudent === true
    );
    huffelpuffHouseArray.push(slytherinHouseDoorman);
    console.log(slytherinHouseDoorman);
    // funcjon
    showAllSlytherin(slytherinHouseDoorman);
  } catch (error) {
    console.error("Ops klarte ikke å laste ned hogwarts elever", error);
  }
}
function showAllSlytherin(slytherinStudent) {
  slytherinStudent.forEach((student) => {
    let yearBirth = student.yearOfBirth;
    let age = 2023 - yearBirth;
    if (yearBirth === null) {
      age = "Uvisst";
    }
    let StudenPitcher = `<img src="${student.image}" height="90px" width="60px">`;
    if (student.image === "") {
      StudenPitcher = "Uvisst";
    }
    console.log(StudenPitcher);
    let slytherinStudensCon = document.createElement("div");
    slytherinStudensCon.innerHTML = `
                Name: ${student.name} <br>
                House: ${student.house}<br>
                Age: ${age}<br>
                ${StudenPitcher}
      `;
    StyleCard(slytherinStudensCon);
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Slett Student";
    deleteBtn.style.backgroundColor = "red";
    //deleteBtn.addEventListener("click", deleteStudent);
    deleteBtn.style.width = "100px";
    deleteBtn.style.color = "white";
    deleteBtn.style.margin = "10px";

    slytherinContainer.appendChild(slytherinStudensCon);
    slytherinStudensCon.appendChild(deleteBtn);
  });
}

//huffelPuff
async function getHuffelpuffHouse() {
  try {
    const HuffelpuffRequwst = await fetch(
      "https://hp-api.onrender.com/api/characters/students"
    );

    huffelpuffHouse = await HuffelpuffRequwst.json();
    const huffelpuffHouseDoorman = huffelpuffHouse.filter(
      (huffelpuffHouse) =>
        huffelpuffHouse.house === "Hufflepuff" &&
        huffelpuffHouse.hogwartsStudent === true
    );
    huffelpuffHouseArray.push(huffelpuffHouseDoorman);
    console.log(huffelpuffHouseDoorman);
    // funcjon
    showAllHuffelpuff(huffelpuffHouseDoorman);
  } catch (error) {
    console.error("Ops klarte ikke å laste ned hogwarts elever", error);
  }
}
function showAllHuffelpuff(huffelpuffStudent) {
  huffelpuffStudent.forEach((student) => {
    let yearBirth = student.yearOfBirth;
    let age = 2023 - yearBirth;
    if (yearBirth === null) {
      age = "Uvisst";
    }
    let StudenPitcher = `<img src="${student.image}" height="90px" width="60px">`;
    if (student.image === "") {
      StudenPitcher = "Uvisst";
    }
    console.log(StudenPitcher);
    let huffelpuffStudensCon = document.createElement("div");
    huffelpuffStudensCon.innerHTML = `
                Name: ${student.name} <br>
                House: ${student.house}<br>
                Age: ${age}<br>
                ${StudenPitcher}
      `;
    StyleCard(huffelpuffStudensCon);
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Slett Student";
    deleteBtn.style.backgroundColor = "red";
    //deleteBtn.addEventListener("click", deleteStudent);
    deleteBtn.style.width = "100px";
    deleteBtn.style.color = "white";
    deleteBtn.style.margin = "10px";

    huffelpuffContainer.appendChild(huffelpuffStudensCon);
    huffelpuffStudensCon.appendChild(deleteBtn);
  });
}

//Raven
