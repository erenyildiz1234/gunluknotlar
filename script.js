const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function notEkle(){
	
	if(inputBox.value == ''){
		
		alert("Herhangi bir not girmediniz.");
		
	}
	else{
		
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("Span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
		
	}
	
	inputBox.value = "";
	notKaydet();
	
}

listContainer.addEventListener("click", function(e){
	
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		notKaydet();
	}
	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		notKaydet();
	}
}, false);

function notKaydet(){
	
	localStorage.setItem("data", listContainer.innerHTML);
	
}

function notGoster(){
	
	listContainer.innerHTML = localStorage.getItem("data");
	
}
notGoster();