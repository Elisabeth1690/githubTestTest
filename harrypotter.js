async function fetchStaff() {
  const hogwartsStaffRequwst = await fetch(
    "https://hp-api.onrender.com/api/characters/staff"
  );
  let result = await hogwartsStaffRequwst.json();
  return result;
}
