const CLOSE = `<span class="close">×</span>`;
let ulDOM = document.querySelector("#list");
let liDOM = document.querySelectorAll("li");

for (let index = 0; index < liDOM.length; index++) {
  let closeButton = document.createElement("span");
  closeButton.innerHTML = "&#x2715";
  closeButton.classList.add("close");
  liDOM[index].append(closeButton);
  closeButton.onclick = removeItem;
  liDOM[index].onclick = toggleItem;
}

function newElement() {
  let newTaskItem = document.querySelector("#task");
  let itemToAdd = document.createElement("li");
  if (newTaskItem.value.length != 0 && /\S/.test(newTaskItem.value)) {
    $(".success").toast("show");
    itemToAdd.innerHTML = `${newTaskItem.value}`;
    ulDOM.append(itemToAdd);
    let closeButton = document.createElement("span");
    closeButton.innerHTML = "&#x2715";
    closeButton.classList.add("close");
    itemToAdd.appendChild(closeButton);
    closeButton.onclick = removeItem;
    itemToAdd.onclick = toggleItem;
  } else {
    $(".error").toast("show");
  }
  newTaskItem.value = "";
}

function removeItem() {
  this.parentElement.remove();
}

function toggleItem() {
  this.classList.toggle("checked");
}
