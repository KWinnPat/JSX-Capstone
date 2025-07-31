let weight = 1;
let dataObj = undefined;

function pagePopulate(data) {
  for (let i = 0; i < data.length; i++) {
    parentUl = document.querySelector("ul");

    li = document.createElement("li");
    li.classList.add("name-item");

    p = document.createElement("p");
    p.id = `${data[i].id}`;
    p.innerText = `${data[i].firstName}: ${weight}`;

    divWeightButtons = document.createElement("div");
    divWeightButtons.classList.add("weight-buttons");

    weightDownButton = document.createElement("button");
    weightDownButton.classList.add("weight-down-button");
    weightDownButton.addEventListener("click", () => {
      handleWeight("-", data[i].id);
    });

    minus = document.createElement("i");
    minus.classList.add("fa-solid", "fa-minus");

    weightUpButton = document.createElement("button");
    weightUpButton.classList.add("weight-up-button");
    weightUpButton.addEventListener("click", () => {
      handleWeight("+", data[i].id);
    });

    plus = document.createElement("i");
    plus.classList.add("fa-solid", "fa-plus");

    weightDownButton.appendChild(minus);
    weightUpButton.appendChild(plus);
    divWeightButtons.appendChild(weightDownButton);
    divWeightButtons.appendChild(weightUpButton);
    li.appendChild(p);
    li.appendChild(divWeightButtons);
    parentUl.appendChild(li);
  }
}

function handleWeight(op, id) {
  userId = document.getElementById(`${id}`);

  string = userId.innerText;
  sliceIndex = string.indexOf(":");
  weight = parseInt(string.slice(sliceIndex + 2, string.length));
  firstName = string.slice(0, sliceIndex);

  if (op === "+") {
    setWeight = weight + 1;
  } else {
    setWeight = weight - 1;
  }

  userId.innerText = `${firstName}: ${setWeight}`;
}

fetch("https://javascript-capstone-backend.onrender.com/users")
  .then((res) => res.json())
  .then((res) => {
    pagePopulate(res);
    dataObj = res;
  });
