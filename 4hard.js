const storeData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
const retrieveData = (key) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
};
const dataToStore = { Intern: "Pranusys", Qual: "B.tech", Assignment:"hard" };
storeData("userData", dataToStore);
const retrievedData = retrieveData("userData");
console.log("Retrieved data:", retrievedData);

