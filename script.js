let randomTitle = [
  "lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
  "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  "qui officia deserunt mollit anim id est laborum.",
];
let randomDescription = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
  "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  "qui officia deserunt mollit anim id est laborum.",
];

function render() {
  let contentRef = document.getElementById("content");
  for (let index = 0; index < randomTitle.length; index++) {
    contentRef.innerHTML += getNotesTemplats(index);
  }
}

function getNotesTemplats(index) {
  return ` <div class="single_element">
            <h2>
            ${randomTitle[index]}
            </h2>
            <p>
            ${randomDescription[index]}
            </p>
        </div>
        `;
}
