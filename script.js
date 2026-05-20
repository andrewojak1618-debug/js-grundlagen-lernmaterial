let randomTitles = [
  "lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
];

let randomTitlesSecond = [
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
  "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  "qui officia deserunt mollit anim id est laborum.",
];

let randomDescriptions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
];

let randomDescriptionsSecond = [
  "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
  "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  "qui officia deserunt mollit anim id est laborum.",
  "Beschreibung fuer den letzten Titel",
];

let arrTitles = [];
let arrDescriptions = [];

function renderFiltered(index) {
  if (index == 1) {
    arrTitles = randomTitles;
    arrDescriptions = randomDescriptions;
  } else if (index == 2) {
    arrTitles = randomTitlesSecond;
    arrDescriptions = randomDescriptionsSecond;
  }

  render();
}

function render() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let index = 0; index < arrTitles.length; index++) {
    contentRef.innerHTML += getNotesTemplate(index);
  }
}

function getNotesTemplate(index) {
  return `
    <div class="single_element">
      <h2>${arrTitles[index]}</h2>
      <p>${arrDescriptions[index]}</p>
    </div>
  `;
}
