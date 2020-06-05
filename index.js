let test = [
  {
    id: 1,
    title: "wine1",
    img: "img/wine1.jpg",
    categories: {
      corpo: "C123",
      acidita: "A12",
      tannico: "T1234",
      alcol: "H1",
      dolcezza: "D123",
    },
  },
  {
    id: 2,
    title: "wine2",
    img: "img/wine2.jpg",
    categories: {
      corpo: "C1",
      acidita: "A12",
      tannico: "T12345",
      alcol: "H1",
      dolcezza: "D1234",
    },
  },
  {
    id: 3,
    title: "wine3",
    img: "img/wine3.jpg",
    categories: {
      corpo: "C123",
      acidita: "A1234",
      tannico: "T1",
      alcol: "H1",
      dolcezza: "D12345",
    },
  },
  {
    id: 4,
    title: "wine4",
    img: "img/wine4.jpg",
    categories: {
      corpo: "C123",
      acidita: "A12345",
      tannico: "T12",
      alcol: "H1",
      dolcezza: "D1",
    },
  },
  {
    id: 5,
    title: "wine5",
    img: "img/wine5.jpg",
    categories: {
      corpo: "C12345",
      acidita: "A1",
      tannico: "T123",
      alcol: "H12345",
      dolcezza: "D123",
    },
  },
  {
    id: 6,
    title: "wine6",
    img: "img/wine6.jpg",
    categories: {
      corpo: "C12",
      acidita: "A1",
      tannico: "T1234",
      alcol: "H123",
      dolcezza: "D12",
    },
  },
  {
    id: 7,
    title: "wine7",
    img: "img/wine7.jpg",
    categories: {
      corpo: "C12",
      acidita: "A123",
      tannico: "T1",
      alcol: "H1234",
      dolcezza: "D1234",
    },
  },
  {
    id: 8,
    title: "wine8",
    img: "img/wine8.jpg",
    categories: {
      corpo: "C123",
      acidita: "A123",
      tannico: "T12",
      alcol: "H12",
      dolcezza: "D1",
    },
  },
  {
    id: 9,
    title: "wine9",
    img: "img/wine9.jpg",
    categories: {
      corpo: "C1",
      acidita: "A1234",
      tannico: "T12345",
      alcol: "H12345",
      dolcezza: "D12",
    },
  },
  {
    id: 10,
    title: "wine10",
    img: "img/wine10.jpg",
    categories: {
      corpo: "C12",
      acidita: "A1",
      tannico: "T1",
      alcol: "H1",
      dolcezza: "D123",
    },
  },
  {
    id: 11,
    title: "wine11",
    img: "img/wine11.jpg",
    categories: {
      corpo: "C123",
      acidita: "A12",
      tannico: "T123",
      alcol: "H12",
      dolcezza: "D1",
    },
  },
  {
    id: 12,
    title: "wine12",
    img: "img/wine12.jpg",
    categories: {
      corpo: "C1",
      acidita: "A12345",
      tannico: "T12345",
      alcol: "H1",
      dolcezza: "D1",
    },
  },
  {
    id: 13,
    title: "wine13",
    img: "img/wine13.jpg",
    categories: {
      corpo: "C12345",
      acidita: "A12345",
      tannico: "T12345",
      alcol: "H1",
      dolcezza: "D12345",
    },
  },
  {
    id: 14,
    title: "wine14",
    img: "img/wine14.jpg",
    categories: {
      corpo: "C123",
      acidita: "A123",
      tannico: "T12345",
      alcol: "H1234",
      dolcezza: "D12345",
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
const mybtn = document.getElementById("selected");
const more = document.getElementById("more");

//items to show
let size = 10;

//render the array on dom as a list
function renderArr(arr) {
  list.innerHTML = "";

  arr.slice(0, size).map((el) => {
    const li = document.createElement("li");
    li.style.margin = "0 40px 40px 0";
    li.style.border = "2px solid black";
    li.style.padding = "20px";
    li.className += "list-item";

    li.innerHTML = `<div>
                    <h1>Title: ${el.title}</h1>
                    <div class="inner-box">
                        <h3>Caratteristiche</h3>
                        <img src='./${el.img}' />
                        <p>corpo: ${el.categories.corpo}</p>
                        <p>acidita: ${el.categories.acidita}</p>
                        <p>tannico: ${el.categories.tannico}</p>
                        <p>alcol: ${el.categories.alcol}</p>
                        <p>dolcezza: ${el.categories.dolcezza}</p>
                    </div>
                </div>`;
    list.appendChild(li);
  });
}
renderArr(test);

//get user values and compare with wines values
function getValue() {
  //delete the list from the dom
  list.innerHTML = "";

  //user values
  const corpoValue = corpo.options[corpo.selectedIndex].value;
  const aciditaValue = acidita.options[acidita.selectedIndex].value;
  const tannicoValue = tannico.options[tannico.selectedIndex].value;
  const alcolValue = alcol.options[alcol.selectedIndex].value;
  const dolcezzaValue = dolcezza.options[dolcezza.selectedIndex].value;

  //for each user input take the value and create a string (ex: C1A12345T12345H1D1)
  const valueUser =
    corpoValue + aciditaValue + tannicoValue + alcolValue + dolcezzaValue;

  //loop through the list
  test.map((el, index) => {
    //for each wine take the value and create a string (ex: C1A12345T12345H1D1)
    const valueData =
      el.categories.corpo +
      el.categories.acidita +
      el.categories.tannico +
      el.categories.alcol +
      el.categories.dolcezza;

    //compare the 2 string. I'm using this library https://unpkg.com/string-similarity@4.0.1/umd/string-similarity.min.js
    const similarity = stringSimilarity.compareTwoStrings(valueData, valueUser);

    //updating similarity coefficient to wine list
    el.orderIndex = similarity;
  });
  //sorting the array by similarity coefficient
  test.sort((a, b) => (a.orderIndex > b.orderIndex ? 1 : -1));
  test.reverse();

  //rendering new list with sorted array
  renderArr(test);
}

//click event on button
mybtn.addEventListener("click", getValue);
more.addEventListener("click", function () {
  size += 10;
  renderArr(test);
  console.log(test.length);
  console.log(size);

  //button get invisible if there are not more items to load
  if (test.length < size) {
    this.style.display = "none";
  }
});
