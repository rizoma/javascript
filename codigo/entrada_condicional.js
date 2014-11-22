ESCRITORES = {
  "Jose Saramago": [
    "El hombre duplicado",
    "Todos los nombres"
  ],
  "P.G. Wodehouse": [
    "Leave it to Psmith",
    "Uncle dynamite" 
  ]
}

function prepareForm(form){
  var escritores = document.getElementById("escritores")
    , obras = document.getElementById("obras");

  populateSelect(escritores, Object.keys(ESCRITORES));

  escritores.addEventListener("change", function(event){
    populateSelect(obras, ESCRITORES[event.target.value]);
  });

  //necesitamos que al cargar la página salga algo en el segundo select.
  //Estamos aquí manualmente "disparando" el evento change.
  //cf. https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
  escritores.dispatchEvent(new Event("change"));
}

function populateSelect(selectElement, values){
  if(selectElement.childNodes.length) removeChildren(selectElement);

  values.forEach(function(value){
    var opt = createElement("option", {value: value, text: value}); 
    selectElement.appendChild(opt);
  });
}

//FROM: http://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
function removeChildren(node){
  while(node.firstChild){
    node.removeChild(node.firstChild);
  }
}

function createElement(tagName, options){
  var newNode = document.createElement(tagName);
  for(var attr in options){
    if(options.hasOwnProperty(attr)){
      if(attr == "text"){
        newNode.textContent = options[attr];
      }else{
        newNode.setAttribute(attr, options[attr]);
      }
    }
  }
  return newNode;
}
