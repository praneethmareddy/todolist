var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("container");

function createListElement() {
	var div = document.createElement("div");
    div.classList.add("box");
    div.classList.add("zone");
	var li = document.createElement("p");
	var delButton = document.createElement("button");
	
	ul.appendChild(div);
	div.append(li, delButton);
	li.classList.add("taskClass");
	// li.appendChild(document.createTextNode(input.value));
    li.innerHTML = input.value;
	input.value = "";
	// delButton.classList.add("delClass");
    delButton.classList.add("button-30");
	delButton.innerHTML='Del';
}

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



function deleteListElement(element) {
	if (element.target.className === "button-30"){
		element.target.parentElement.remove();
	}
}
function handleUlClick (element) {
	// doneTask(element);
	deleteListElement(element);
}
// function doneTask(task) {
// 	if (task.target.tagName === "LI"){
// 		task.target.classList.toggle("done");
// 	}
// }

ul.addEventListener("click", handleUlClick)
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
