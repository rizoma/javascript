window.DICCIONARIO = null;

function loadAndPrepareDictionary(){
  var container = document.getElementById("diccionario");
  //Del "diccionario del diablo": https://archive.org/stream/AmbroseBierce-ElDiccionarioDelDiablo/AmbroseBierce-ElDiccionarioDelDiablo_djvu.txt
  DICCIONARIO = new Dictionary(container, {
    "Anécdota": "Relato generalmente falso",
    "Diccionario": "Perverso artificio literario que paraliza el crecimiento de una lengua además de quitarle soltura y elasticidad. El presente diccionario, sin embargo, es una obra útil"
  });
  DICCIONARIO.render();

  var addDefinition = document.getElementById("submit-definition");
  addDefinition.addEventListener("click", function(event){
    event.preventDefault();
    var word = document.getElementById("new-word");
    var definition = document.getElementById("new-definition");
    try{
      DICCIONARIO.addEntry(word.value, definition.value);
      word.value = "";
      definition.value = "";
    }catch(e){
      alert(e);
    }
  });
};

var Dictionary = function(container, entries){
  this.container = container;
  if(entries)
    this.entries = entries;
  else
    this.entries = {};
}

Dictionary.prototype.addEntry = function(word, definition){
  //más sobre throw: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
  if(word.toLowerCase() in this.entries) throw (word + "ya está definida");
  this.entries[word] = definition; 
  this.renderEntry(word);
}

Dictionary.prototype.render = function(){
  var self = this;
  Object.keys(this.entries).forEach(function(word){
    //en este caso, this corresponde al ámbito de
    //la función anónima.
    self.renderEntry(word); 
  });
}

Dictionary.prototype.renderEntry = function(word){
  var populatedTemplate = this.populateTemplate({word: word, definition: this.entries[word]});
  this.container.insertAdjacentHTML('beforeend', populatedTemplate);
}

Dictionary.prototype.populateTemplate = function(data){
  var template = document.getElementById("entry-template").textContent;

  return Object.keys(data).reduce(function(result, datum){
    var toReplace = "{{" + datum + "}}";
    var replacement = data[datum];
    return result.replace(toReplace, replacement);
  }, template);
}
