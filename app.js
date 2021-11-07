let rightArrow = document.querySelector(".direction-right");
let leftArrow = document.querySelector(".direction-left");
let surpriseButton = document.querySelector("#random");

let listNumber = 0;
let parentDivList = rightArrow.parentElement.parentElement.children[0];
let listLength = [...parentDivList.children].length

rightArrow.addEventListener("click", (e) => {
  [...parentDivList.children].forEach(element => {
    element.style.display = "none";
  });
  if (listNumber==(listLength-1)) {
    parentDivList.children[listLength-1].style.display = "none";
    parentDivList.children[0].style.display = "block";
    listNumber = 0;
  } else {
    parentDivList.children[listNumber].style.display = "none";
    parentDivList.children[listNumber+1].style.display = "block";
    listNumber += 1;
  }
});

leftArrow.addEventListener("click", (e) => {
  [...parentDivList.children].forEach(element => {
    element.style.display = "none";
  });
  if (listNumber==0) {
    parentDivList.children[0].style.display = "none";
    parentDivList.children[listLength-1].style.display = "block";
    listNumber = listLength-1;
  } else {
    parentDivList.children[listNumber].style.display = "none";
    parentDivList.children[listNumber-1].style.display = "block";
    listNumber -= 1;
  }
});

surpriseButton.addEventListener("click", (e) => {
  [...parentDivList.children].forEach(element => {
    element.style.display = "none";
  });
  let randomNumber = Math.round(Math.random()*4)
  parentDivList.children[randomNumber].style.display = "block";
});
