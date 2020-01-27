// JavaScript 1 Module Assignment

// Level 1.1
let cat = {
    complain() {
        console.log("Meow!")
    }
};

cat.complain();

// Level 1.2
let heading = document.querySelector("h3");

// Level 1.3
heading.style.fontSize = ("2em");

// Level 1.4
// element.heading.add("subheading");

// Level 1.5
let paragraphs = document.querySelector("p");

// Level 1.6
let resultsContainer = document.querySelector("div").innerHTML = "New paragraph";

// Level 1.7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
  const catArray = [cats];
  for (index = 0; index < cats.length; index++) {
    let loopArrays = cats[index];
    let loopArraysValues = loopArrays.name;
  
    console.log(loopArraysValues);
  };

// Level 1.8
const cats2 = [
    {
        name: `<h5>Blob</h5>`,
        age: 10
    },
    {
        name: `<h5>Harold</h5>`,
    },
    {
        name: `<h5>Blurt</h5>`,
        age: 21
    }
];
  const catArray2 = [cats2];
  for (index = 0; index < cats2.length; index++) {
    let loopArrays = cats2[index];
    let loopArraysValues = loopArrays.name;
  
    console.log(loopArraysValues);
  };


// Level 1.9
// ?

// Level 1.10
// ?