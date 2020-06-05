let test = [
  {
    id: 1,
    title: "wine1",
    img: "img/wine1.jpeg",
    categories: {
      corpo: 3,
      acidita: 2,
      tannico: 4,
      alcol: 3,
      dolcezza: 5,
    },
  },
  {
    id: 2,
    title: "wine2",
    img: "img/wine2.jpeg",
    categories: {
      corpo: 5,
      acidita: 5,
      tannico: 5,
      alcol: 5,
      dolcezza: 5,
    },
  },
  {
    id: 3,
    title: "wine3",
    img: "img/wine3.jpeg",
    categories: {
      corpo: 3,
      acidita: 1,
      tannico: 1,
      alcol: 1,
      dolcezza: 5,
    },
  },
  {
    id: 4,
    title: "wine4",
    img: "img/wine4.jpeg",
    categories: {
      corpo: 5,
      acidita: 5,
      tannico: 1,
      alcol: 1,
      dolcezza: 4,
    },
  },
  {
    id: 5,
    title: "wine5",
    img: "img/wine5.jpeg",
    categories: {
      corpo: 3,
      acidita: 5,
      tannico: 4,
      alcol: 3,
      dolcezza: 5,
    },
  },
  {
    id: 6,
    title: "wine6",
    img: "img/wine6.jpeg",
    categories: {
      corpo: 3,
      acidita: 2,
      tannico: 1,
      alcol: 3,
      dolcezza: 1,
    },
  },
  {
    id: 7,
    title: "wine7",
    img: "img/wine7.jpeg",
    categories: {
      corpo: 3,
      acidita: 2,
      tannico: 1,
      alcol: 3,
      dolcezza: 1,
    },
  },
  {
    id: 8,
    title: "wine8",
    img: "img/wine8.jpeg",
    categories: {
      corpo: 1,
      acidita: 1,
      tannico: 4,
      alcol: 1,
      dolcezza: 5,
    },
  },
  {
    id: 9,
    title: "wine9",
    img: "img/wine9.jpeg",
    categories: {
      corpo: 3,
      acidita: 2,
      tannico: 1,
      alcol: 2,
      dolcezza: 1,
    },
  },
  {
    id: 10,
    title: "wine10",
    img: "img/wine10.jpeg",
    categories: {
      corpo: 5,
      acidita: 5,
      tannico: 5,
      alcol: 3,
      dolcezza: 1,
    },
  },
];

//dom elements
const list = document.getElementById("list");
const corpo = document.getElementById("corpo");
const acidita = document.getElementById("acidita");
const tannico = document.getElementById("tannico");
const alcol = document.getElementById("alcol");
const dolcezza = document.getElementById("dolcezza");

function renderArr(arr) {
  arr.map((el) => {
    const li = document.createElement("li");
    li.style.margin = "0 40px 40px 0";
    li.style.border = "2px solid black";
    li.style.padding = "20px";
    li.className += "list-item";

    li.innerHTML = `<div>
                    <h1>Title: ${el.title}</h1>
                    <div>
                        <h3>Caratteristiche</h3>
                        <p>corpo: ${el.categories.corpo}</p>
                        <p>acidita: ${el.categories.acidita}</p>
                        <p>tannico: ${el.categories.tannico}</p>
                        <p>alcol: ${el.categories.alcol}</p>
                        <p>dolcezza: ${el.categories.dolcezza}</p>
                    </div>
                </div>`;
    list.appendChild(li);
  });
  console.log(test);
}
renderArr(test);

const mybtn = document.getElementById("selected");

function getValue() {
  list.innerHTML = "";

  //user values
  const corpoValue = corpo.options[corpo.selectedIndex].value;
  const aciditaValue = acidita.options[acidita.selectedIndex].value;
  const tannicoValue = tannico.options[tannico.selectedIndex].value;
  const alcolValue = alcol.options[alcol.selectedIndex].value;
  const dolcezzaValue = dolcezza.options[dolcezza.selectedIndex].value;

  //storing users values in array
  const selectedValues = [
    { title: "corpo", value: corpoValue },
    { title: "acidita", value: aciditaValue },
    { title: "tannico", value: tannicoValue },
    { title: "alcol", value: alcolValue },
    { title: "dolcezza", value: dolcezzaValue },
  ];

  //sorting array in discendent way
  selectedValues.sort(function (a, b) {
    return b.value - a.value;
  });

  //using highest input value to have parameter to start sorting with
  const toSortTitle1 = selectedValues[0].title;
  const toSortTitle2 = selectedValues[1].title;
  const toSortTitle3 = selectedValues[2].title;
  const toSortTitle4 = selectedValues[3].title;
  const toSortTitle5 = selectedValues[4].title;

  const toSortValue1 = selectedValues[0].value;

  test.sort(function (a, b) {
    // return b.categories[toSortTitle1] - a.categories[toSortTitle1];
    if (a.categories[toSortTitle1] > b.categories[toSortTitle1]) return -1;
    if (a.categories[toSortTitle1] < b.categories[toSortTitle1]) return 1;

    // If the votes number is the same between both items, sort alphabetically
    // If the first item comes first in the alphabet, move it up
    // Otherwise move it down
    if (a.categories[toSortTitle2] > b.categories[toSortTitle2]) return -1;
    if (a.categories[toSortTitle2] < b.categories[toSortTitle2]) return 1;

    if (a.categories[toSortTitle3] > b.categories[toSortTitle3]) return -1;
    if (a.categories[toSortTitle3] < b.categories[toSortTitle3]) return 1;

    if (a.categories[toSortTitle4] > b.categories[toSortTitle4]) return -1;
    if (a.categories[toSortTitle4] < b.categories[toSortTitle4]) return 1;

    if (a.categories[toSortTitle5] > b.categories[toSortTitle5]) return -1;
    if (a.categories[toSortTitle5] < b.categories[toSortTitle5]) return 1;
  });
  //   test.map((el) => {
  //     console.log("data", el.categories[toSortTitle1]);
  //     console.log("user", toSortValue1);

  //     if (el.categories[toSortTitle1] == toSortValue1) {
  //       console.log("group", el);
  //       //here you have to sort value2
  //     }
  //   });
  renderArr(test);
}

//click event on button
mybtn.addEventListener("click", getValue);
