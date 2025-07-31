import { animateNameShuffle } from "./animation.js";

function getRandomName(array) {
  const shuffleName = document.getElementsByClassName("randomizer-text")[0];
  const getWeights = document.querySelectorAll("p");
  let weightedArray = [];

  for (let i = 0; i < getWeights.length; i++) {
    const string = getWeights[i].innerText;
    const sliceIndex = string.indexOf(":");
    const weight = parseInt(string.slice(sliceIndex + 2, string.length));
    const name = array[i].firstName;

    for (let i = 0; i < weight; i++) weightedArray.push(name);
  }
  const randomIndex = Math.floor(Math.random() * weightedArray.length);
  const result = weightedArray[randomIndex];
  animateNameShuffle(shuffleName, array, 4000, result);
}

document.querySelector(".randomizer-button").addEventListener("click", () => {
  getRandomName(dataObj);
});
