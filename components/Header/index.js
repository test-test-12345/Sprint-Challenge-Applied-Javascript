// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const header = document.querySelector(".header-container");
header.appendChild(Header());

function Header() {
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header");

  const daDate = document.createElement("span");
  headerContainer.appendChild(daDate);
  daDate.classList.add("date");
  daDate.textContent = "SMARCH 28, 2019";

  const title = document.createElement("h1");
  headerContainer.appendChild(title);
  title.textContent = "Lambda Times";

  const temp = document.createElement("span");
  headerContainer.appendChild(temp);
  temp.classList.add("temp");
  temp.textContent = "98°";

  return headerContainer;
}
