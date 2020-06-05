let test = [
  {
    id: 1,
    title: "wine1",
    img: "img/wine1.jpeg",
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
    img: "img/wine2.jpeg",
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
    img: "img/wine3.jpeg",
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
    img: "img/wine4.jpeg",
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
    img: "img/wine5.jpeg",
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
    img: "img/wine6.jpeg",
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
    img: "img/wine7.jpeg",
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
    img: "img/wine8.jpeg",
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
    img: "img/wine9.jpeg",
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
    img: "img/wine10.jpeg",
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
    img: "img/wine10.jpeg",
    categories: {
      corpo: "C123",
      acidita: "A12",
      tannico: "T123",
      alcol: "H12",
      dolcezza: "D1",
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
}
renderArr(test);

function getValue() {
  list.innerHTML = "";

  //user values
  const corpoValue = corpo.options[corpo.selectedIndex].value;
  const aciditaValue = acidita.options[acidita.selectedIndex].value;
  const tannicoValue = tannico.options[tannico.selectedIndex].value;
  const alcolValue = alcol.options[alcol.selectedIndex].value;
  const dolcezzaValue = dolcezza.options[dolcezza.selectedIndex].value;

  const valueUser =
    corpoValue + aciditaValue + tannicoValue + alcolValue + dolcezzaValue;

  test.map((el, index) => {
    const valueData =
      el.categories.corpo +
      el.categories.acidita +
      el.categories.tannico +
      el.categories.alcol +
      el.categories.dolcezza;
    const similarity = stringSimilarity.compareTwoStrings(valueData, valueUser);

    el.orderIndex = similarity;
  });
  test.sort((a, b) => (a.orderIndex > b.orderIndex ? 1 : -1));
  test.reverse();

  renderArr(test);
}

//click event on button
mybtn.addEventListener("click", getValue);
more.addEventListener("click", function () {
  size++;
  renderArr(test);
});
