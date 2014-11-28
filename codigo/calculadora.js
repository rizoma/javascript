//"singleton"
window.Calculator = {}

Calculator.stack = [];

Calculator.helpers = {
  toArray: function(enumerable){
    return Array.prototype.slice.apply(enumerable);         
  }
  isNumber: function(val){
    return !isNaN(val);          
  }
};

Calculator.operations = {
  "+": function(a,b){ return a+b; },
  "-": function(a,b){ return a-b; },
  "*": function(a,b){ return a*b; },
  "/": function(a,b){ return a/b; }
};

Calculator.prepare = function(){
  this.prepareNumbers();
  this.prepareOperations();
  this.prepareDisplay();
}

Calculator.prepareNumbers = function(){
  var numbers = document.getElementsByClassName("number");
  var nodeArray = Calculator.helpers.toArray(numbers);
  nodeArray.forEach(function(node){
    node.addEventListener('click', Calculator.handleNumber);
  });
}

Calculator.handleNumber = function(event){
  var intValue = Number(event.target.getAttribute("data-value"));
  if(!this.helpers.isNumber(this.stack[0])){
    this.stack.unshift(intValue);
    this.setDisplay(intValue);
  }
}

Calculator.setDisplay(value){
  document.getElementById("display").value = value;
}

Calculator.prepareOperations = function(){
  var operations = document.getElementsByClassName("operation");
  var nodeArray = Calculator.helpers.toArray(operations);
  nodeArray.forEach(function(node){
    node.addEventListener('click', Calculator.handleOperation);
  });
}

Calculator.handleOperation= function(event){
  var operation = event.target.getAttribute("data-value")
  var func = this.operations[operation];
  //solo deja aplicar la operación si lo último que se aplicó
  //fue un número
  if(operation == "=" && this.helpers.isNumber(this.stack[0]))
    this.operate();
  else if(this.helpers.isNumber(this.stack[0]))
    this.stack.unshift(func);
}

Calculator.operate = function(){
  var result = this.stack.reduceRight(function(runningResult, item){
    if(this.helpers.isNumber(item)){
      return runningResult(item); 
    }else{
      return function(y){
        return item(y);
      } 
    }
  }, function(x){return x});
}
