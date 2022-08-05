const addBtn = document.getElementById("addBtn");
const inputGroup = document.getElementById("inputGroup");


function remove(e){
  this.parentElement.remove();
}


addFunc = () => {
  var nameLabel = document.createElement("Label");
  nameLabel.setAttribute("for", "name");
  nameLabel.innerHTML = "Name: ";
  var name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("name", "name");
  name.setAttribute("class", "name");

  var degreeLabel = document.createElement("Label");
  degreeLabel.setAttribute("for", "degree");
  degreeLabel.innerHTML = "Degree: ";
  var degree = document.createElement("input");
  degree.setAttribute("type", "text");
  degree.setAttribute("name", "degree");
  degree.setAttribute("class", "degree");

  var cgpaLabel = document.createElement("Label");
  cgpaLabel.setAttribute("for", "cgpa");
  cgpaLabel.innerHTML = "CGPA: ";
  var cgpa = document.createElement("input");
  cgpa.setAttribute("type", "number");
  cgpa.setAttribute("name", "cgpa");
  cgpa.setAttribute("class", "cgpa");

  var deleBtn = document.createElement("button");
  deleBtn.className = "deleBtn";
  deleBtn.innerHTML = "Remove";

  deleBtn.addEventListener('click', remove);

  var div = document.createElement("div");

  inputGroup.appendChild(div);
  div.appendChild(nameLabel);
  div.appendChild(name);
  div.appendChild(degreeLabel);
  div.appendChild(degree);
  div.appendChild(cgpaLabel);
  div.appendChild(cgpa);
  div.appendChild(deleBtn);
};

addBtn.addEventListener("Click", addFunc);